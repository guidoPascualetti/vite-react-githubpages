import React, { useContext } from "react";

import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavbarContext = React.createContext({});

function Brand({ children }) {
  return (
    <Col className=" col-6  col-lg-2 d-flex align-items-center">{children}</Col>
  );
}
function Links({ children }) {
  const context = useContext(NavbarContext);

  return (
    <Col className=" col-10 d-flex  align-items-center justify-content-between d-none d-lg-flex">
      {children}
    </Col>
  );
}
function Control({ children }) {
  const context = useContext(NavbarContext);
  return (
    <Col className=" col-3 d-flex  align-items-center justify-content-between  d-lg-none justify-content-around">
      <i className="bi bi-search" variant="primary"></i>
      <i
        className="bi bi bi-list"
        variant="primary"
        onClick={() => context.setMenuToggle((prev) => !prev)}
      ></i>
    </Col>
  );
}

function Desktop({ children }) {
  const context = useContext(NavbarContext);
  return (
    <>
      <nav
        className="container-fluid sticky-top bg-white "
        style={{ zIndex: 99999 }}
      >
        <Row
          className={`d-flex align-items-center  justify-content-between`}
          style={{ height: "80px", width: "98%", margin: "auto" }}
        >
          {children}
        </Row>
      </nav>
    </>
  );
}
function Mobile({ children }) {
  const context = useContext(NavbarContext);
  return (
    <>
      <div
        className={`  position-fixed ${
          context.menuToggle ? "start-0" : "start-100"
        }`}
        style={{
          height: "100vh",
          width: "100vw",
          transition: "all .5s",
          backgroundColor: "#F5F5F5",

          zIndex: 9999,
        }}
      >
        <div
          className="ps-4 d-flex flex-column  justify-content-around"
          style={{ height: "60vh" }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
function Navbar({ children }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuToggle]);

  return (
    <>
      <NavbarContext.Provider
        value={{
          menuToggle,
          setMenuToggle,
          selected,
          setSelected,
        }}
      >
        {children}
      </NavbarContext.Provider>
    </>
  );
}
Navbar.Desktop = Desktop;
Navbar.Mobile = Mobile;
Navbar.Brand = Brand;
Navbar.Links = Links;
Navbar.Control = Control;

export default Navbar;
