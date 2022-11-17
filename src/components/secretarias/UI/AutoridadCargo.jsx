export default function AutoridadCargo({ autoridad, cargo }) {
  return (
    <div className="text-black">
      <p style={{ fontWeight: "700", fontSize: "22px", lineHeight: "22px" }}>
        {autoridad}
      </p>
      <div style={{ lineHeight: "12px" }}>
        {cargo.map((item) => (
          <p
            className="text-violeta"
            style={{ fontWeight: "600", fontSize: "16px" }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
