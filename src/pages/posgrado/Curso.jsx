import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../../components/secretarias/UI/Title";
import HeaderSecretaria  from "../../components/secretarias/HeaderSecretaria";
import AutoridadCargo from "../../components/secretarias/UI/AutoridadCargo";
import SubTitle from "../../components/secretarias/UI/SubTitle";
import ContactoCard from "../../components/secretarias/UI/ContactoCard";


import data from "../../api/especializacacion.js"
import { useEffect } from "react";
import { useState } from "react";
export default function Curso() {
  const [destacada, setDestacada] = useState([])
  const [resto, setResto] = useState([])
  
  useEffect(()=>{
  
    setDestacada(data.publicaciones.filter(item => item.destado))
    setResto(data.publicaciones.filter(item => !item.destado))
  
  }, [])
    return (
      <>
      <HeaderSecretaria
        firstT="ESPECIALIZACIÓN EN"
        secondT="CLÍNICA PSICOANALÍTICA PARA ADULTOS"
      >
        <>
        <AutoridadCargo autoridad="Mg. Andrea Berger" cargo={["DIRECTORA DE LA CARRERA"]} />
        <div className="border-start border-4 border-white ps-3 pt-3">
              <SubTitle>INFORMES</SubTitle>

              <ContactoCard
                email="especializaciones@psico.unlp.edu.ar"
               
              />
            </div>
        
        </>
      </HeaderSecretaria>
      <Container>
        <Row>
        <Col className="d-flex justify-content-center pt-3 ">
        <div style={{width:"50%"}}>

        {
          destacada.map(item => (
            <>
          <Title>
              <h3 className="text-lila psico-destacado-fino">
                  {item.title}
              </h3>

            </Title>
            <div
                className="pt-3 pb-3"
                 
                 dangerouslySetInnerHTML={{ __html: item.desc }}
                 ></div>
</>
          ))
        }
        </div>
        </Col>
          
        </Row>
      </Container>



      </>




        
        

    )
}