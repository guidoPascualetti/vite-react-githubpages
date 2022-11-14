import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logos/logo-blanco.png";
import Acordion from "../UI/Acordion";
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
      <Container fluid className="bg-gris-oscuro text-white pt-5 pb-5">
        <Container>
          <Row>
            {/* {Object.keys(links).map((k) => (
              <Col xs={12} lg={3} key={k} className="pt-3">
                <h5 className="pb-3">{k}</h5>
                {links[k].map((link) => (
                  <p key={link.label}>{link.label}</p>
                ))}
              </Col>
            ))} */}
            {Object.keys(links).map((k) => (
              <Acordion key={k} title={k}>
                {links[k].map((link) => (
                  <p key={link.label}>{link.label}</p>
                ))}
              </Acordion>
            ))}

            <Col xs={12} lg={3} className="pt-3 order-lg-first">
              <img className="" style={{ width: "200px" }} src={logo} />
              <p className="footer-p pt-3">
                Calle 51 entre 123 y 124, Ensenada (CP1925), <br />
                Provincia de Buenos Aires, Argentina. <br />
                <b>Teléfonos:</b> +54 (0221) 482 4415 - 482 5931 -<br /> 482
                8457 - 483 3933 - 483-4871
              </p>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Container>
    </>
  );
}
