import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import "./Acordion.css";
export default function Acordion({ header, children }) {
  const [toggleIsOpen, setToggleIsOpen] = useState(false);
  return (
    <>
      <Container className="acordion">
        <Row className=" acordion">
          <Col
            xs={12}
            className="d-flex justify-content-between align-items-center border-bottom"
            style={{ height: "50px" }}
            onClick={() => setToggleIsOpen((prev) => !prev)}
          >
            <div className="d-flex align-items-center">
              <h5 className="psico-h1  m-0">{header}</h5>
            </div>

            <div className="d-flex align-items-center psico-h1">
              {toggleIsOpen ? <i> - </i> : <i> + </i>}
            </div>
          </Col>
          <Col
            className={`${
              toggleIsOpen ? "altura-auto" : "altura-0"
            } acordion pt-3`}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}
