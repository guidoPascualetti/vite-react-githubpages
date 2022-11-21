import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Title from "./UI/Title";
export default function HeaderSecretaria({ firstT, secondT, bajada = null }) {
  return (
    <Container fluid className="bg-gris-clarito-fondo">
      <Container>
        <Row className="bg-gris-clarito-fondo">
          <Col
            xs={12}
            lg={6}
            className="bg-lila d-flex"
            style={{
              backgroundImage: `url("https://i.picsum.photos/id/140/400/400.jpg?hmac=g-jpVEE9sIBkD90UyFVabP86FsrmMieI68Tc-9_GKYE")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Col>
          <Col xs={12} lg={6} className="pt-4 order-lg-first">
            <Title>
              <h1 className="text-lila secretarias-fino">
                {firstT}
                <br />
                <span className="secretarias">{secondT}</span>
              </h1>
            </Title>
            <div className="p-4">
              {bajada ? (
                bajada
              ) : (
                <>
                  <p className="psico-p-destacado">
                    La Secretaría de Posgrado es el área que tiene a su cargo la
                    gestión de las carreras de grados académicos de postgrado y
                    de las actividades formativas de actualización,
                    profundización y perfeccionamiento que ofrece la Facultad.
                  </p>
                  <p className="psico-p-destacado">
                    Las propuestas que se imparten en la actualidad son las
                    carreras de Doctorado en Psicología, la Especialización en
                    Clínica Psicoanalítica con Adultos y la Especialización en
                    Evaluación y Diagnóstico Psicológico. A esto se suman los
                    programas de actualización profesional y los cursos y
                    seminarios no conducentes a título.
                  </p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
