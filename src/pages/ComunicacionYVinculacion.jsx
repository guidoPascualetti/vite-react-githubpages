import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../components/group/Cards";
import Boton from "../components/UI/Boton";
import HeaderSecretaria from "../components/secretarias/HeaderSecretaria";
import AutoridadesContactoSecretaria from "../components/secretarias/AutoridadesContactoSecretaria";
import data from "../api/comunicacionYVinculacion";
import Title from "../components/secretarias/UI/Title";
import Acordeon from "../components/functional/Acordeon";
import { useState } from "react";
export default function ComunicacionYVinculacion() {
  const [acordeonActive, setAcordeonActive] = useState("");
  const handlerClickAcorden = (k) => {
    if (k == acordeonActive) {
      setAcordeonActive("");
    } else {
      setAcordeonActive(k);
    }
  };

  return (
    // <PagesLayout nombre="Posgrado" descripcion=" desc de la sec" imagen="" />
    <>
      <Container>
        <HeaderSecretaria
          firstT={data.tituloFino}
          secondT={data.titleAncho}
          bajada={data.bajada}
        ></HeaderSecretaria>

        <AutoridadesContactoSecretaria
          autoridades={data.autoridades}
          email={data.email}
          direccion={data.direccion}
          lugar={data.lugar}
          horario={data.horario}
        ></AutoridadesContactoSecretaria>

        <Row className="mt-3">
          {data.acordeon.map((item, index) => (
            <Col className="mt-2" xs={12} md={6} lg={3} key={index}>
              <Acordeon
                isActive={acordeonActive === item.id}
                clickHandler={() => handlerClickAcorden(item.id)}
              >
                <Acordeon.Button>
                  <Boton bg={item.bg} isActive={acordeonActive === item.id}>
                    <p
                      className={`psico-destacado-fino text-${item.color} p-0 m-0`}
                    >
                      {item.title} <br></br>
                      <span className={`psico-destacado text${item.color}`}>
                        {item.titleBold}
                      </span>
                    </p>
                  </Boton>
                </Acordeon.Button>
                <Acordeon.Content>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat eos sapiente eius quo id accusantium non fugit unde
                  atque accusamus excepturi quod ad, eaque quos molestiae est,
                  labore impedit voluptatem.
                </Acordeon.Content>
              </Acordeon>
            </Col>
          ))}
        </Row>

        <Row>
          <Col xs={12} className="pt-4 ">
            <Title>
              <h3 className="text-gris-intermedio psico-destacado-fino">
                NOTICIAS &nbsp;
                <span className="psico-destacado">
                  Comunicación y vinculación
                </span>
              </h3>
            </Title>
          </Col>
        </Row>
        <Row>
          <Cards />
        </Row>
      </Container>
    </>
  );
}