import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        <Col xs={12} >
           <div className="pt-4">
           <h1 className="text-lila secretarias-fino">SECRETARÍA DE <br /><span className="secretarias">POSGRADO</span></h1>
           </div>
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
      </Container>   
       </>
  );
}
