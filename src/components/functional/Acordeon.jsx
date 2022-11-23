import React, { useContext } from "react";
const AcordionContext = React.createContext({});

// Style Objects
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
  maxHeight: "1400px",
  transition: "max-height .3s ease-in",
  overflow: "hidden",
};

function Button({ children }) {
  const context = useContext(AcordionContext);
  console.log(context);
  return <div onClick={context.clickHandler}>{children}</div>;
  //   return "hola";
}
function Content({ children, styled }) {
  const context = useContext(AcordionContext);
  console.log({ context });
  return (
    <div
      style={context.isActive ? acordionContainerA : acordionContainer}
      className={styled}
    >
      {children}
    </div>
  );
}

function Acordion({ children, isActive, clickHandler }) {
  return (
    <>
      <AcordionContext.Provider
        value={{
          isActive,
          clickHandler,
        }}
      >
        <div className="">{children}</div>
      </AcordionContext.Provider>
    </>
  );
}

Acordion.Content = Content;
Acordion.Button = Button;
export default Acordion;
