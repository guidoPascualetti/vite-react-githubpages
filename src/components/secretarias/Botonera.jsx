import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Boton from "../UI/Boton";
import Acordeon from "../functional/Acordeon";

import { useState } from "react";
export default function Botonera({data}) {

  const [acordeonActive, setAcordeonActive] = useState("");
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
      </Container>
      <Container fluid className="d-none d-lg-block">
        <Row className="mt-3">
          {data.acordeon.map((item, index) => (
            <Col className="mt-2" xs={12} md={6} lg={3} key={index}>
              <Boton
                isActive={acordeonActive === item.id}
                bg={item.bg}
                click={() => handlerClickAcorden(item.id)}
                changeBg={true}
              >
                <p
                  className={`psico-destacado-fino text-${item.color} p-0 m-0`}
                >
                  {item.title} <br></br>
                  <span className={`psico-destacado text${item.color}`}>
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
          <h1>Contenido de {acordeonActive} </h1>
        </Row>
      </Container>
      </>
)
}