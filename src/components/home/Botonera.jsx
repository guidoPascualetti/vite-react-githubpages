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
    <Container fluid className="botonera">
      <Container>
        <Row className="">
          <Col xs={12} lg={2}>
            <h1 className="text-white pt-4">
              <span className="psico-destacado">ACCESOS</span>{" "}
              <span className="">RÁPIDOS</span>
            </h1>
          </Col>
          <Col xs={12} lg={10} className="pb-2  pt-4">
            <Row>
              {BOTONES.map((item) => (
                <Col
                  xs={{ span: 12, offset: 0 }}
                  lg={{ span: 4, offset: 0 }}
                  key={item.title}
                  className="mb-2"
                >
                  <Button
                    variant="gris-oscuro"
                    className="rounded-0 pb-2"
                    style={{ width: "100%" }}
                  >
                    <span className="psico-p-destacado">{item.title}</span>
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
