import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Botonera() {
  const BOTONES = [
    { title: "CARRERAS" },
    { title: "CALENDARIO ACADÉMICO" },
    { title: "ENTORNOS VIRTUALES" },
    { title: "SIÚ GUARANÍ" },
    { title: "CUCH" },
    { title: "BIBLIOTECA" },
    { title: "INGRESO 2023" },
  ];

  return (
    <Container fluid className="botonera mt-3">
      <Container className>
        <Row className=" pb-5 pt-5">
          <Col xs={12} lg={3}>
            <p className="text-white d-flex align-items-center  border-bottom border-lila border-4">
              <span className="psico-destacado">ACCESOS</span>{" "}
              <span className="">RÁPIDOS</span>
            </p>
            {/* <div
              style={{ width: "40px", height: "5px" }}
              className="bg-lila"
            ></div> */}
          </Col>

          {BOTONES.map((item) => (
            <Col
              xs={{ span: 12, offset: 0 }}
              lg={{ span: 3, offset: 0 }}
              key={item.title}
              className="mb-2"
            >
              <Button
                variant="gris-oscuro"
                className="rounded-0"
                style={{ width: "100%" }}
              >
                <span className="psico-p-destacado">{item.title}</span>
              </Button>
            </Col>
          ))}
        </Row>
        <div
          style={{ width: "100%", height: "20px" }}
          className="bg-lila"
        ></div>
      </Container>
    </Container>
  );
}
