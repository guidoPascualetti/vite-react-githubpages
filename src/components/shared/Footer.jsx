import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Footer() {
  const links = {
    Estudiantes: [
      { label: "Calendario Acádemico" },
      { label: "Turnos de examen" },
      { label: "Horarios de consulta" },
      { label: "Dirección de enseñanza" },
      { label: "Prosecretaría de asuntos estudiantiles" },
    ],
    Docentes: [
      { label: "SIU Guaraní" },
      { label: "Entornos virtuales" },
      { label: "Sigeva" },
      { label: "ADULP" },
      { label: "Dirección de Servicios Sociales" },
    ],
    Nodocentes: [{ label: "ATULP" }],
  };
  return (
    <>
      <Container fluid>
        <Container>
          <Row>
            <Col>Facultad de psico</Col>
            {Object.keys(links).map((k) => (
              <Col xs={12}>
                <h5>{k}</h5>
                {links[k].map((link) => (
                  <a href="#">{link.label}</a>
                ))}
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}
