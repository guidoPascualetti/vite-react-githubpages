import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Botonera() {
  const BOTONES = [
    { title: "CALENDARIO ACADÉMICO" },
    { title: "ENTORNOS VIRTUALES" },
    { title: "SIÚ GUARANÍ" },
    { title: "CUCH" },
    { title: "BIBLIOTECA" },
    { title: "INGRESO 2023" },
  ];

  return (
    <Container fluid>
      <Row className="bg-gris-intermedio">
        <Col xs={12}>
          <h1 className="psico-destacado text-white">ACCESOS RÁPIDOS</h1>
        </Col>
        {BOTONES.map((item) => (
          <Col key={item.title} md={{ span: 10, offset: 1 }} className="pb-2">
            <Button
              variant="gris-oscuro"
              className="rounded-0 pt-3 pb-3"
              style={{ width: "100%" }}
            >
              {item.title}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
