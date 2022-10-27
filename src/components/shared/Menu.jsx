import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logos/logo.svg";
function menu() {
  const DEVICE_EXPAND = "xl";
  return (
    <>
      <Navbar fixed="top" bg="white" expand={DEVICE_EXPAND} className="mb-3">
        <Container fluid>
          <Nav.Link className="">
            {/* <i className="bi bi-search"></i> */}
          </Nav.Link>
          <Navbar.Brand href="#">
            {" "}
            <img className="" style={{ width: "50%" }} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${DEVICE_EXPAND}`}
          />
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
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default menu;
