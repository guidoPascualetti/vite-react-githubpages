import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Title from "./UI/Title";
export default function HeaderSecretaria({ firstT, secondT, bajada = null }) {
  return (
    <Container fluid className="bg-gris-clarito-fondo">
      <Container>
        <Row className="bg-gris-clarito-fondo pb-4">
          <Col xs={12} lg={6} className="bg-lila d-flex mt-4">
            <div
              style={{
                backgroundImage: `url("https://i.picsum.photos/id/140/400/400.jpg?hmac=g-jpVEE9sIBkD90UyFVabP86FsrmMieI68Tc-9_GKYE")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                width: "100%",
              }}
            ></div>
          </Col>
          <Col xs={12} lg={6} className=" order-lg-first">
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
                  <p className="psico-p-destacado" style={{lineHeight:"25px",textAlign: "justify"}}>
                    La Secretaría de Posgrado es el área que tiene a su cargo la
                    gestión de las carreras de grados académicos de postgrado y
                    de las actividades formativas de actualización,
                    profundización y perfeccionamiento que ofrece la Facultad.
                  </p>
                  <p className="psico-p-destacado" style={{lineHeight:"25px",textAlign: "justify"}}>
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
