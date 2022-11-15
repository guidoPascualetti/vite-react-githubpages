
export default function ContactoCard({email, direccion, lugar, horario}) {
    return (
        <div>
            <h3 className="text-lila pb-3" style={{fontWeight:"700"}}>
                {email}
            </h3>
        <h3 className="" style={{fontWeight:"400"}}>
        {direccion}
      </h3>
      <h3 className="" style={{fontWeight:"400"}}>
      {lugar}
    </h3>
    <h3 className="" style={{fontWeight:"700"}}>
      HORARIO DE ATENCIÓN:
    </h3>
    <h3 className="" style={{fontWeight:"400"}}>
      {horario}
    </h3>
        </div>
    );
  }
  