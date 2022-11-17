export default function AutoridadCargo({ autoridad, cargo }) {
  return (
    <div className="text-black pt-4" style={{ width: "100%" }}>
      <p style={{ fontWeight: "700", fontSize: "22px", lineHeight: "22px" }}>
        {autoridad}
      </p>
      <div style={{}}>
        {cargo.map((item) => (
          <span
            className="text-violeta"
            style={{ fontWeight: "600", fontSize: "16px" }}
          >
            {item}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
