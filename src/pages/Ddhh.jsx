import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../components/group/Cards";

import HeaderSecretaria from "../components/secretarias/HeaderSecretaria";
import AutoridadesContactoSecretaria from "../components/secretarias/AutoridadesContactoSecretaria";
import data from "../api/ddhh";
import Title from "../components/secretarias/UI/Title";

import Botonera from "../components/secretarias/Botonera";

import { useState } from "react";
export default function Ddhh() {
  return (
    // <PagesLayout nombre="Posgrado" descripcion=" desc de la sec" imagen="" />
    <>
      <HeaderSecretaria
        firstT={data.tituloFino}
        secondT={data.titleAncho}
        bajada={data.bajada}
      ></HeaderSecretaria>

      <AutoridadesContactoSecretaria
        autoridades={data.autoridades}
        email={data.email}
        direccion={data.direccion}
        lugar={data.lugar}
        horario={data.horario}
      ></AutoridadesContactoSecretaria>

      <Botonera data={data}></Botonera>

      <Container fluid>
        <Container>
          <Row>
            <Col xs={12} className="pt-4 ">
              <Title>
                <h3 className="text-gris-intermedio psico-destacado-fino">
                  NOTICIAS &nbsp;
                  <span className="psico-destacado">POSGRADO</span>
                </h3>
              </Title>
            </Col>
          </Row>
          <Row>
            <Cards />
          </Row>
        </Container>
      </Container>
    </>
  );
}
