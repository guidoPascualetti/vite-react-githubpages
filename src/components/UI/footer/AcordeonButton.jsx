import "./Acordion.scss";

export default function AcordeonButton({ title, isActive }) {
  return (
    <>
      <div className="acordion">
        <div className="accordion-title">
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
      </div>
    </>
  );
}
