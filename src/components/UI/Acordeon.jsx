const accordionTitle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  cursor: "pointer",
};

const acordionContainer = {
  maxHeight: "0px",
  transition: "max-height .3s ease-out",
  overflow: "hidden",
};

const acordionContainerA = {
  maxHeight: "500px",
  transition: "max-height .3s ease-in",
  overflow: "hidden",
};

export default function Acordion({
  title,
  children,
  isActive,
  clickHandler,
  titleStyle,
}) {
  return (
    <>
      <div className="">
        <div style={accordionTitle} onClick={clickHandler}>
          <div className={`${titleStyle}`}>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        <div style={isActive ? acordionContainerA : acordionContainer}>
          {children}
        </div>
      </div>
    </>
  );
}
