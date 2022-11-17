import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
export function Icon({ icon }) {
  return (
    <i
      className={`${icon} pe-1 text-dtv-turquesa-ok`}
      style={{ fontSize: "20px" }}
      variant="primary"
      role="button"
    ></i>
  );
}
export function ColControl() {
  return (
    <Col className="d-flex col-6 col-md-1 justify-content-end align-items-center">
      <i
        className="bi bi-list  pe-1"
        style={{ fontSize: "30px" }}
        variant="primary"
        onClick={() => setMenuToggle((prev) => !prev)}
        role="button"
      ></i>
    </Col>
  );
}
export function PrimaryNav({ item }) {
  return (
    <div role="button" className="dtv-h2 pointer">
      {item.name}
    </div>
  );
}
export function Navbar({ children }) {
  // className='p-1 position-fixed bg-white start-0'
  return (
    <Container fluid className="bg-lila">
      <nav
        className="container pt-1 bg-lila sticky-top"
        style={{ width: "100%", zIndex: 99999, height: "50px" }}
      >
        {children}
      </nav>
    </Container>
  );
}
export function PrimaryNavWithSubMenu({ item }) {
  return (
    <div role="button" className="dtv-h2 pointer">
      {item.name} <b>+</b>
    </div>
  );
}

export function ColBrand({ logos }) {
  return (
    <Col className=" col-4">
      <img className="img-fluid" src={logos} style={{ width: "100%" }} />
    </Col>
  );
}

export function ColSocial({ socialNetworking }) {
  return (
    <Col className=" container-fluid justify-content-end pe-4 d-none d-md-block align-items-center">
      <div className="row justify-content-end  ">
        {socialNetworking.map(({ name, route }) => (
          <div className="col-lg-1 col-md-2" key={name}>
            <img
              className="img-fluid "
              style={{ maxWidth: "30px" }}
              src={route}
              alt={name}
            />
          </div>
        ))}
      </div>
    </Col>
  );
}
export function MenuSubmenu({ items, setToggle, selected, setSelected }) {
  const itemSelected = items.filter((item) => item.name == selected)[0];

  const mostrarMenu = (submenu) => {
    console.log(submenu);
    const first = submenu.slice(0, 20);
    const second = submenu.slice(20);
    let url =
      selected === "Programas" ? "programaEspecifico" : "deporteEspecifico";

    return (
      <>
        <Col xs={6} className="">
          <div className="">
            {first.map((item) => (
              <div
                className=" border-bottom"
                style={{ width: "100%", paddingBottom: "5px" }}
                key={item.id}
              >
                <p className="dtv-card-vol m-0 text-dtv-blanco ">
                  <Link
                    key={item.id}
                    to={`${url}/${item.id}`}
                    className="dtv-p text-decoration-none text-dtv-blanco"
                    onClick={() => setToggle(false)}
                  >
                    {item.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </Col>
        <Col xs={6} className="">
          <div>
            {second.map((item) => (
              <div
                className=" border-bottom"
                style={{ width: "100%", paddingBottom: "5px" }}
                key={item.id}
              >
                <p className="dtv-card-vol m-0" key={item.id}>
                  <Link
                    key={item.id}
                    to={`${url}/${item.id}`}
                    className="dtv-p text-decoration-none text-dtv-blanco"
                    onClick={() => setToggle(false)}
                  >
                    {item.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </Col>
      </>
    );
  };
  return (
    <>
      {/* PRIMERA COLUMNA DEL MENU */}
      <Col className="bg-dtv-turquesa-ok d-flex flex-column justify-content-center align-items-center">
        <div>
          {items.map((item) => {
            return item.hasOwnProperty("submenu") ? (
              <div
                key={item.name}
                role="button"
                className={`dtv-h2 pointer ${
                  selected == item.name
                    ? "text-dtv-azul"
                    : "text-dtv-menu-active"
                }`}
                onClick={() => setSelected(item.name)}
              >
                {item.name}
              </div>
            ) : (
              <div key={item.name}>
                <Link
                  to={item.to}
                  className={`dtv-h2 pointer ${
                    selected == item.name
                      ? "text-dtv-azul"
                      : "text-dtv-menu-active"
                  } `}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setSelected(item.name);
                    setToggle(false);
                  }}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </Col>
      {/* SEGUNDA COLUMNA DEL MENU, 
        Falta cambiar el titulo de la seccion y linkear el botton*/}
      <Col
        xs={6}
        className="bg-dtv-azul text-white"
        style={{ overflowY: "scroll" }}
      >
        <Row>
          <Col>
            <div
              style={{ height: "25px", width: "25px", borderRadius: "100%" }}
              className="me-2 m-2 ms-0 float-end border border-1 d-flex justify-content-center align-items-between"
              onClick={() => setToggle(false)}
              role="button"
            >
              <b>
                <h4 className="dtv-h4 variante">X</h4>
              </b>
            </div>
          </Col>
        </Row>

        <Container>
          <Row className="pt-2 ps-3 pe-3">
            <Col className="m-2 ms-0 p-0 me-0 d-flex justify-content-between align-items-center">
              <h1 className="col-6 dtv-h4">
                {selected == "Deportes" ? "Noticias de Deportes" : "Programas"}
              </h1>
              {selected === "Deportes" ? (
                <>
                  {" "}
                  <Link
                    className="col-4 col-lg-5 btn btn-outline-dtv-turquesa-ok dtv-filtros btn-sm rounded-0"
                    to="/todosDeportes"
                    onClick={() => setToggle(false)}
                  >
                    TODAS LAS NOTICIAS
                  </Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    to="/todosProgramas"
                    className="col-4 col-lg-5 btn btn-outline-dtv-turquesa-ok dtv-filtros btn-sm rounded-0"
                    onClick={() => setToggle(false)}
                  >
                    TODOS LOS PROGRAMAS
                  </Link>
                </>
              )}
            </Col>
          </Row>
          <Row className="dtv-h4 pt-2 ps-3 pe-3">
            {itemSelected !== undefined &&
            itemSelected.hasOwnProperty("submenu")
              ? mostrarMenu(itemSelected.submenu)
              : ""}
          </Row>
        </Container>
      </Col>
    </>
  );
}
