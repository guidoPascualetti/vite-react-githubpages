import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Boton({
  children,
  bg,
  isActive,
  click = null,
  changeBg = false,
}) {
  return (
    <Container>
      <Row
        className={` 
        ${isActive && changeBg ? "bg-active" : "bg-${bg}"}
        d-flex justify-content-between align-items-center pt-4 pt-md-0 pb-4 bg-${bg} `}
        onClick={click}
        role="button"
      >
        <Col xs={10} md={12} className=" d-flex align-items-center">
          <div className="d-flex">{children}</div>
        </Col>
        <Col
          xs={2}
          md={12}
          className=" d-flex justify-content-end align-items-start order-md-first"
          style={{
            height: "50px",
          }}
        >
          <i
            className={` bi bi-arrow-up-right`}
            style={{
              fontSize: "25px",
              color: "#FFFFFF",
              transition: "all .3s ",
              transform: isActive ? "rotate(90deg)" : "",
            }}
          ></i>
        </Col>
      </Row>
    </Container>
  );
}
