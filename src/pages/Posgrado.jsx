import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../components/group/Cards";
import Boton from "../components/UI/Boton";
import HeaderSecretaria from "../components/secretarias/HeaderSecretaria";
import AutoridadesContactoSecretaria from "../components/secretarias/AutoridadesContactoSecretaria";
import data from "../api/posgrado";
import Title from "../components/secretarias/UI/Title";
export default function Posgrado() {
  return (
    // <PagesLayout nombre="Posgrado" descripcion=" desc de la sec" imagen="" />
    <>
      <Container>
        <HeaderSecretaria
          firstT={data.tituloFino}
          secondT={data.titleAncho}
        ></HeaderSecretaria>

        <AutoridadesContactoSecretaria
          autoridades={data.autoridades}
          email={data.email}
          direccion={data.direccion}
          lugar={data.lugar}
          horario={data.horario}
        ></AutoridadesContactoSecretaria>

        <Row className="mt-3">
          <Col className="mt-2" xs={12} md={6} lg={3}>
            <Boton bg="lila">
              <p className="psico-destacado-fino text-white p-0 m-0">
                CARRERAS DE <br></br>
                <span className="psico-destacado text-white">POSGRADO</span>
              </p>
            </Boton>
          </Col>
          <Col className="mt-2" xs={12} md={6} lg={3}>
            <Boton bg="lila">
              <p className="psico-destacado-fino text-white p-0 m-0">
                CARRERAS DE <br></br>
                <span className="psico-destacado text-white">POSGRADO</span>
              </p>
            </Boton>
          </Col>
          <Col className="mt-2" xs={12} md={6} lg={3}>
            <Boton bg="lila">
              <p className="psico-destacado-fino text-white p-0 m-0">
                CARRERAS DE <br></br>
                <span className="psico-destacado text-white">POSGRADO</span>
              </p>
            </Boton>
          </Col>
          <Col className="mt-2" xs={12} md={6} lg={3}>
            <Boton bg="lila">
              <p className="psico-destacado-fino text-white p-0 m-0">
                CARRERAS DE <br></br>
                <span className="psico-destacado text-white">POSGRADO</span>
              </p>
            </Boton>
          </Col>

          {/* <Col xs={12}>
            <Boton bg="lila">
              <p className="psico-destacado text-white p-0 m-0 ">
                PROGRAMAS DE<br></br>
                <span className="psico-destacado-fino text-white p-0 m-0">
                  ACTUALIZACIÓN
                </span>
              </p>
            </Boton>
          </Col>
          <Col xs={12}>
            <Boton bg="lila">
              <p className="psico-destacado text-white p-0 m-0 ">
                CURSOS Y<br></br>
                <span className="psico-destacado-fino text-white p-0 m-0">
                  SEMINARIOS
                </span>
              </p>
            </Boton>
          </Col>
          <Col xs={12}>
            <Boton bg="gris-claro">
              <p className="psico-destacado text-gris-intermedio p-0 m-0 ">
                INSCRIPCIÓN{" "}
                <span className="psico-destacado-fino text-gris-intermedio p-0 m-0">
                  A LAS ACTIVIDADES DE POSGRADO
                </span>
              </p>
            </Boton>
          </Col> */}
        </Row>

        <Row>
          <Col xs={12} className="pt-4">
            <Title>
              <h3 className="text-gris-intermedio psico-destacado-fino">
                NOTICIAS &nbsp;
                <span className="psico-destacado">POSGRADO</span>
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
