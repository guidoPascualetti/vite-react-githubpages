import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logos/logo.svg";

function menu() {
  const DEVICE_EXPAND = "xl";
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="white" expand={DEVICE_EXPAND} className="">
        <Container>
          <Navbar.Brand href="#" className="">
            <img className="" style={{ width: "200px" }} src={logo} />
          </Navbar.Brand>

          <div className="d-flex  justify-content-between">
            <i
              className="bi bi-search d-xl-none pe-4"
              style={{ fontSize: "30px" }}
              variant="primary"
              onClick={handleShow}
            ></i>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${DEVICE_EXPAND}`}
            />
          </div>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${DEVICE_EXPAND}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${DEVICE_EXPAND}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${DEVICE_EXPAND}`}
              >
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>INSTITUCIONAL</Nav.Link>
                <Nav.Link>ACADÉMICA</Nav.Link>
                <Nav.Link>INVESTIGACIÓN</Nav.Link>
                <Nav.Link>POSGRADO</Nav.Link>
                <Nav.Link>SALUD MENTAL Y DDHH</Nav.Link>
                <Nav.Link>COMUNICACIÓN Y VINCULACIÓN</Nav.Link>
                <Nav.Link>GESTIÓN</Nav.Link>
                <Nav.Link>
                  <i
                    className="bi bi-search"
                    variant="primary"
                    onClick={handleShow}
                  ></i>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} className="bg-lila">
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Facultad de Psicología</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-center">
            <h1 className="">Buscar</h1>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default menu;
