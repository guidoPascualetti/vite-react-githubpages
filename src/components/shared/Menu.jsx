// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logos/logo.svg";
// import { Link } from "react-router-dom";
import Navbar from "../functional/Navbar";
const links = [
  { name: "INSTITUCIONAL" },
  { name: "ACADÉMICA" },
  { name: "INVESTIGACIÓN" },
  { name: "POSGRADO" },
  { name: "SALUD MENTAL Y DDHH" },
  { name: "COMUNICACIÓN Y VINCULACIÓN" },
  { name: "GESTIÓN" },
];

function menu() {
  return (
    <>
      <Navbar>
        <Navbar.Desktop>
          <Navbar.Brand>
            <div className="">
              <img style={{ width: "100%" }} src={logo} />
            </div>
          </Navbar.Brand>
          <Navbar.Links>
            {links.map((link) => (
              <div key={link.name}>{link.name}</div>
            ))}
            <i className="bi bi-search" variant="primary"></i>
          </Navbar.Links>
          <Navbar.Control></Navbar.Control>
        </Navbar.Desktop>
        <Navbar.Mobile>
          {links.map((link) => (
            <div key={link.name}>
              <b>{link.name}</b>
            </div>
          ))}
        </Navbar.Mobile>
      </Navbar>
    </>
  );
}

export default menu;
