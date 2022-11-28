const data = {
    tituloFino: "SECRETARÍA de",
    titleAncho: "POSGRADO",
    bajada:` <p className="psico-p-destacado" style={{lineHeight:"25px",textAlign: "justify"}}>
    La Secretaría de Posgrado es el área que tiene a su cargo la
    gestión de las carreras de grados académicos de postgrado y
    de las actividades formativas de actualización,
    profundización y perfeccionamiento que ofrece la Facultad.
  </p>
  <p className="psico-p-destacado" style={{lineHeight:"25px",textAlign: "justify"}}>
    Las propuestas que se imparten en la actualidad son las
    carreras de Doctorado en Psicología, la Especialización en
    Clínica Psicoanalítica con Adultos y la Especialización en
    Evaluación y Diagnóstico Psicológico. A esto se suman los
    programas de actualización profesional y los cursos y
    seminarios no conducentes a título.
  </p>`,
    autoridades : [
        {
          autoridad: "Dra. Verónica Zabaleta",
          cargo: ["SECRETARIA DE POSGRADO"],
        },
      
        {
          autoridad: "Lic. Martín Sosa",
          cargo: ["PROSECRETARIO DE POSGRADO"],
        },
        {
          autoridad: "Dr. Luis Sanfelippo",
          cargo: ["PROSECRETARIO DE PLANIFICACIÓN", "ESTRATÉGICA DE POSGRADO"],
        },
      ],
    email:"postgrado@psico.unlp.edu.ar", 
    direccion:"Calle 51 entre 123 y 124, Ensenada.", 
    lugar:" Tercer Piso.", 
    horario:"Horario de atención: Lunes a viernes de 8 a 14 hs.",
    acordeon: [
       { id:"1",title: "Autoridades" , titleBold:"POSGRADO", type:"acordeon", bg:"lila", color:"white", content:`
      
    `},
      { id:"2",title: "CARRERAS DE" , titleBold:"POSGRADO", type:"acordeon", bg:"lila", color:"white", content:`
      <p class="psico-p-destacado">
      La Secretaría de Posgrado tiene a su cargo la gestión de las carreras de grados académicos, especializaciones y doctorado y los seminarios y cursos de posgrado de actualización, profundización y perfeccionamiento que ofrece la Facultad.
      Los seminarios y cursos de posgrado de las diferentes carreras de grados académicos pueden estar dirigidos exclusivamente a los alumnos inscriptos en dichas carreras o incluir a los interesados en una temática particular.
      Las carreras se rigen por el reglamento de funcionamiento de las actividades formativas de posgrado y de las carreras de grados académicos de especialización, maestría y doctorado.</p>
      <h3 class="text-lila">Las carreras de posgrados académicos son las siguientes: </h3>
      
      <p class="psico-p-destacado">> Doctorado en Psicología </p>
<p class="psico-p-destacado">
      > Especialización en Clínica Psicoanalítica con Adultos</p>
<p class="psico-p-destacado">
      > Especialización en Evaluación y Diagnóstico Psicológico</p>
      
      `},
      { id:"3",title: "PROGRAMAS DE" , titleBold:"ACTUALIZACIÓN", type:"acordeon", bg:"lila", color:"white", content:`
      
    `},
      { id:"4",title: "CURSOS Y " , titleBold:"SEMINARIOS", type:"acordeon", bg:"lila", color:"white", content:`
      
    `},
      { id:"5",title: "INSCRIPCIÓN A" , titleBold:"ACTIVIDADES", type:" LINK", bg:"lila", color:"white", content:`
      
    `},
    ]  

     
      

    
}

export default data