import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import "./Acordion.scss";
export default function Acordion({ title, children }) {
  const [toggleIsOpen, setToggleIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
    </>
   
  );
}
