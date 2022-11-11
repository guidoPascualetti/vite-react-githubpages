// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import logo from "../../assets/logos/logo-blanco.png";
// import Acordion from "../UI/Acordion";
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
          <h1>hola</h1>
        </Container>
      </Container>
    </>
  );
}
