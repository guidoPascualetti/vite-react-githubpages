export default function AutoridadCargo({ autoridad, cargo }) {
  return (
    <div className="text-black pt-4" style={{ width: "100%" }}>
      <p className="psico-boton">{autoridad}</p>
      <div style={{}}>
        {cargo.map((item) => (
          <span className="text-violeta psico-boton-fino">{item} </span>
        ))}
      </div>
    </div>
  );
}
