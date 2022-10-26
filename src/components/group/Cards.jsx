import Card from "../UI/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Cards() {
  const data = [
    {
      id: 1,
      area: "INSTITUCIONAL",
      fecha: "11 DE OCTUBRE DEL 2022",
      titulo: "Ingreso 2023: Información sobre preinscripciones a las carreras",
      bajada:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, illum porro! Eligendi ex velit sint nesciunt. Enim culpa officia optio.",
    },
    {
      id: 2,
      area: "INSTITUCIONAL",
      fecha: "11 DE OCTUBRE DEL 2022",
      titulo: "Ingreso 2023: Información sobre preinscripciones a las carreras",
      bajada:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, illum porro! Eligendi ex velit sint nesciunt. Enim culpa officia optio.",
    },
    {
      id: 3,
      area: "INSTITUCIONAL",
      fecha: "11/20/2022",
      titulo: "Ingreso 2023: Información sobre preinscripciones a las carreras",
      bajada:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, illum porro! Eligendi ex velit sint nesciunt. Enim culpa officia optio.",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          {data.map((item) => (
            <Col xs={12} lg={4} className="mt-4" key={item.id}>
              <Card
                area={item.area}
                fecha={item.fecha}
                titulo={item.titulo}
                bajada={item.bajada}
                id={item.id}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12}></Col>
        </Row>
      </Container>
    </>
  );
}
