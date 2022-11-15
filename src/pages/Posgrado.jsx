import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../components/UI/Title";
import SubTitle from "../components/UI/SubTitle";
import AutoridadCargo from "../components/UI/AutoridadCargo";
import ContactoCard from "../components/UI/ContactoCard";
import Cards from "../components/group/Cards";

import Boton from "../components/UI/Boton";

export default function Posgrado() {
  return (
    // <PagesLayout nombre="Posgrado" descripcion=" desc de la sec" imagen="" />
    <> 
      <Container>
       <Row>
        <Col xs={12} style={{height:"400px"}} 
          className="bg-lila"
        >

         
        </Col>
        <Col xs={12} className="pt-4" >
          <Title>
          <h1 className="text-lila secretarias-fino">
            SECRETARÍA DE 
            <br />
            <span className="secretarias">
            POSGRADO
            </span>
          </h1>

          </Title>
        </Col>
        <Col xs={12} >
        <div className="p-4">
        <p className="psico-p-destacado">
          La Secretaría de Posgrado es el área que tiene a su cargo la gestión de las carreras de grados académicos de postgrado y de las actividades formativas de actualización, profundización y perfeccionamiento que ofrece la Facultad.
        
            
          </p>
          <p className="psico-p-destacado">
          Las propuestas que se imparten en la actualidad son las carreras de Doctorado en Psicología, la Especialización en Clínica Psicoanalítica con Adultos y la Especialización en Evaluación y Diagnóstico Psicológico. A esto se suman los programas de actualización profesional y los cursos y seminarios no conducentes a título.
          </p>
        </div>
        </Col>
        </Row>
        <Row className="bg-gris-claro">
     
         
     
          <Col xs={12}>
                
          <SubTitle>
            AUTORIDADES
            
          </SubTitle>
          <AutoridadCargo autoridad="Dra. Verónica Zabaleta" cargo={["SECRETARIA DE POSGRADO"]} />
          <AutoridadCargo autoridad="Lic. Martín Sosa" cargo={["PROSECRETARIO DE POSGRADO"]} />
          <AutoridadCargo autoridad="Dr. Luis Sanfelippo" cargo={["PROSECRETARIO DE PLANIFICACIÓN","ESTRATÉGICA DE POSGRADO"]} />


          </Col>
          <Col xs={12}>
          <SubTitle>
            CONTACTO
            
          </SubTitle>

            <ContactoCard
            email="postgrado@psico.unlp.edu.ar" 
            direccion="Calle 51 entre 123 y 124, Ensenada."
            lugar="Tercer Piso."
            horario="Lunes a Viernes de 8 a 14hs."
            
            />

          </Col>
        </Row>   
        <Row>
          <Col xs={12}>
            <Boton bg="lila">
              <p className="psico-destacado text-white p-0 m-0 " >
              Carreras de <br></br> 
                <span className="psico-destacado-fino text-white p-0 m-0">
                POSGRADO
                </span>
              </p>
            </Boton>
          </Col>
          <Col xs={12}>
            <Boton bg="lila">
              <p className="psico-destacado text-white p-0 m-0 " >
                PROGRAMAS DE<br></br> 
                <span className="psico-destacado-fino text-white p-0 m-0">
                ACTUALIZACIÓN
                </span>
              </p>
            </Boton>
          </Col>
          <Col xs={12}>
            <Boton bg="lila">
              <p className="psico-destacado text-white p-0 m-0 " >
              CURSOS Y<br></br> 
                <span className="psico-destacado-fino text-white p-0 m-0">
                SEMINARIOS
                </span>
              </p>
            </Boton>
          </Col>
          <Col xs={12}>
            <Boton bg="gris-claro">
              <p className="psico-destacado text-gris-intermedio p-0 m-0 " >
              INSCRIPCIÓN  <span className="psico-destacado-fino text-gris-intermedio p-0 m-0">A LAS ACTIVIDADES DE POSGRADO 
               
               
                </span>
              </p>
            </Boton>
          </Col>
        </Row>

        <Row>

        <Col xs={12} className="pt-4" >
          <Title>

          <h3 className="text-gris-intermedio psico-destacado-fino">
            NOTICIAS &nbsp;
        
            <span className="psico-destacado">
             POSGRADO
            </span>
          </h3>
          </Title>
        </Col>
        </Row>
        <Row>
        <Cards />
        </Row>
      </Container>   
       </>
  );
}
