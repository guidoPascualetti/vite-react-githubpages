import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AutoridadCargo from "./UI/AutoridadCargo";
import SubTitle from "./UI/SubTitle";
import ContactoCard from "./UI/ContactoCard";
export default function ({
  autoridades = [],
  email,
  direccion,
  lugar,
  horario,
}) {
  return (
    <Container fluid className="bg-gris-claro">
      <Container>
        <Row className="bg-gris-claro pb-5">
          <Col xs={12} lg={8} className=" pt-4">
            <SubTitle>AUTORIDADES</SubTitle>
            {autoridades.map((item) => (
              <AutoridadCargo
                key={item.autoridad}
                autoridad={item.autoridad}
                cargo={item.cargo}
              />
            ))}
          </Col>
          <Col xs={12} lg={4} className=" pt-4">
            <SubTitle>CONTACTO</SubTitle>

            <ContactoCard
              email={email}
              direccion={direccion}
              lugar={lugar}
              horario={horario}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
