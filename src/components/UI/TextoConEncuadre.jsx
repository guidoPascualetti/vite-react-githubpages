export default function TextoConEncuadre({ tax, color = "lila" }) {
  return (
    <div>
      <span className={`p-1 border border-1 border-${color} text-${color}`}>
        <b> {tax}</b>
      </span>
    </div>
  );
}
