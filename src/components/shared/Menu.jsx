// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import Navbar from "../functional/Navbar";
const links = [
  { name: "INSTITUCIONAL", to: "#" },
  { name: "ACADÉMICA", to: "/academica" },
  { name: "INVESTIGACIÓN", to: "#" },
  { name: "POSGRADO", to: "/posgrado" },
  { name: "SALUD MENTAL Y DDHH", to: "/ddhh" },
  { name: "COMUNICACIÓN Y VINCULACIÓN", to: "/comunicacion" },
  { name: "GESTIÓN", to: "#" },
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
              <Link to={link.to}>
                <div key={link.name} role="button">
                  {link.name}
                </div>
              </Link>
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
