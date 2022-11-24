import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Boton from "../UI/Boton";
import Acordeon from "../functional/Acordeon";
import AutoridadesContactoSecretaria from "./AutoridadesContactoSecretaria";
import { useState } from "react";
export default function Botonera({ data }) {
  const [acordeonActive, setAcordeonActive] = useState("1");
  const handlerClickAcorden = (k) => {
    if (k == acordeonActive) {
      setAcordeonActive("");
    } else {
      setAcordeonActive(k);
    }
  };

  return (
    <>
      <Container fluid className="d-lg-none">
        <Row className="mt-3">
          {data.acordeon.map((item, index) => (
            <Col className="mt-2" xs={12} key={index}>
              <Acordeon
                isActive={acordeonActive === item.id}
                clickHandler={() => handlerClickAcorden(item.id)}
              >
                <Acordeon.Button>
                  <Boton isActive={acordeonActive === item.id} bg={item.bg}>
                    <p
                      className={`psico-boton-fino text-${item.color} p-0 m-0`}
                    >
                      {item.title} <br></br>
                      <span className={`psico-boton text${item.color}`}>
                        {item.titleBold}
                      </span>
                    </p>
                  </Boton>
                </Acordeon.Button>
                <Acordeon.Content>
                  <Container>
                    {
                      item.id == 1
                        ?<AutoridadesContactoSecretaria
                        autoridades={data.autoridades}
                        email={data.email}
                        direccion={data.direccion}
                        lugar={data.lugar}
                        horario={data.horario}
                      ></AutoridadesContactoSecretaria>
                        :                    <div
                        className="mt-3"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></div>

                    }

                  </Container>
                </Acordeon.Content>
              </Acordeon>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className="d-none d-lg-block">
        <Row className="mt-3 justify-content-center">
          {data.acordeon.map((item, index) => (
            <Col className="mt-2" lg={2} key={index}>
              <Boton
                isActive={acordeonActive === item.id}
                bg={item.bg}
                click={() => handlerClickAcorden(item.id)}
                changeBg={true}
              >
                <p className={`psico-boton-fino text-${item.color} p-0 m-0`}>
                  {item.title} <br></br>
                  <span className={`psico-boton text${item.color}`}>
                    {item.titleBold}
                  </span>
                </p>
              </Boton>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-none d-lg-block">
        <Row className="pt-3 ">

          {
            acordeonActive == 1
              ?   <AutoridadesContactoSecretaria
              autoridades={data.autoridades}
              email={data.email}
              direccion={data.direccion}
              lugar={data.lugar}
              horario={data.horario}
            ></AutoridadesContactoSecretaria>
              : data.acordeon
                .filter((item) => item.id == acordeonActive)
                .map((item) => (
                 
                <div
                  className="mt-3 p-5"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
          
              ))
          }
        
            

       
        </Row>
      </Container>
    </>
  );
}
