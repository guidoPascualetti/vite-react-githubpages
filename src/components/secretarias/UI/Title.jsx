export default function Title({ children }) {
  return (
    <div className="p-4">
      {children}
      <div
        className="bg-lila mt-2"
        style={{
          width: "24px",
          height: "5px",
          borderRadius: "0 100px 100px 0",
        }}
      ></div>
    </div>
  );
}
