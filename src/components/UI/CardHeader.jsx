import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextoConEncuadre from "../UI/TextoConEncuadre";

export default function CardHeader({ tax, titulo, id }) {
  return (
    <Container fluid>
      <Row className="bg-lila" style={{ height: "351px" }}>
        <Col
          xs={12}
          lg={6}
          className="d-flex flex-column justify-content-end justify-content-lg-center
mb-5 mb-lg-0"
        >
          <Col xs={12} lg={6}></Col>
          <TextoConEncuadre tax={tax} color="white" className="" />
          <h1 className="psico-destacado text-white">{titulo}</h1>
        </Col>
        {}
        <Col lg={6} className="bg-primary d-none d-lg-block"></Col>
      </Row>
    </Container>
  );
}
