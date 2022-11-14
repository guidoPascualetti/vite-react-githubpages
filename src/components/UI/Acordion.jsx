import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import "./Acordion.scss";
function Acordion({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="acordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        <div
          className={`${
            isActive ? "acordion-container" : "acordion-container-a"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export function AcordionContainer({ children }) {
  return <>{children}</>;
}

AcordionContainer.Acordion = Acordion;

export default AcordionContainer;
