import React from "react";

const ButtonReset = ({ reiniciarCuenta }) => {
  return (
    <button className="btn btn-info" onClick={reiniciarCuenta}>
      Reiniciar
    </button>
  );
};

export default ButtonReset;
