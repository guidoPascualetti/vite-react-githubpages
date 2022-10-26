import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextoConEncuadre from "./TextoConEncuadre";

export default function Card({
  area,
  fecha,
  titulo,
  bajada,
  tituloMarcado,
  id,
}) {
  return (
    <>
      <Container className="">
        <Row className="bg-gris-clarito-fondo p-4">
          <Col xs={12}>
            <TextoConEncuadre tax={area} />
          </Col>
          <Col xs={12} className="pt-2">
            <span className="">{fecha}</span>
          </Col>
          <Col xs={12}>
            <h1 className="text-gris-oscuro psico-h1">
              {titulo}
              <div
                className="bg-gris-oscuro d-none d-md-block mt-2"
                style={{
                  width: "24px",
                  height: "5px",
                  borderRadius: "0 100px 100px 0",
                }}
              ></div>
            </h1>
          </Col>
          <Col className="d-none d-md-block">
            <p className="text-gris-intermedio">{bajada}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
