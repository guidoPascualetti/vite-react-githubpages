
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Boton({children, bg}) {
  return (
    <Container>
      <Row className={` pt-2 pb-2 d-flex justify-content-between align-items-center  bg-${bg}` }
         
          
      
      >

      <Col xs={10} className=" d-flex align-items-center" style={{height:"50px"}}>
      <div className="d-flex flex-column justify-content-center" style={{lineHeight:"25px"}}>
      { children}
      </div>
      
      </Col >
        <Col xs={2} className=" d-flex  justify-content-end align-items-start" style={{height:"50px"}}>

        <i className={` bi bi-arrow-up-right text-gris-oscuro` } style={{fontSize:"25px"}}></i>
     
        </Col>
      </Row>
    </Container>
  );
}
     
