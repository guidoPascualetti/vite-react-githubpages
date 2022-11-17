import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Boton({ children, bg, active = false }) {
  return (
    <Container>
      <Row
        className={` d-flex justify-content-between align-items-center pt-4 pb-4  bg-${bg}`}
      >
        <Col xs={10} className=" d-flex align-items-center">
          <div className="d-flex">{children}</div>
        </Col>
        <Col
          xs={2}
          className=" d-flex  justify-content-end align-items-start"
          style={{ height: "50px" }}
        >
          <i
            className={` bi bi-arrow-up-right`}
            style={{
              fontSize: "25px",
              color: "#D9D9D9",
              transition: "all .3s ",
              transform: active ? "rotate(90deg)" : "",
            }}
          ></i>
        </Col>
      </Row>
    </Container>
  );
}
