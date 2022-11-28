export default function ContactoCard({ email, direccion, lugar, horario }) {
  return (
    <div
      className="pt-3"
      style={{ fontWeight: "700", lineHeight: "12px", paddingBottom: "3em" }}
    >
      <p className="text-lila pb-3">
        <i className="bi bi-envelope"></i> &nbsp;
        {email}
      </p>
      <p className="" style={{ fontWeight: "400" }}>
        {direccion}
      </p>
      <p className="" style={{ fontWeight: "400" }}>
        {lugar}
      </p>
     {
      horario 
      ? (     <> <p className="" style={{ fontWeight: "700" }}>
      HORARIO DE ATENCIÓN:
    </p>
    <p className="" style={{ fontWeight: "400" }}>
      {horario}
    </p> </>
    )
      :""
     }
    </div>
  );
}
