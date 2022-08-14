import React from "react";

const ButtonReset = ({ reiniciarCuenta }) => {
  return (
    <button className="btn btn-info mb-5" onClick={reiniciarCuenta}>
      Reiniciar
    </button>
  );
};

export default ButtonReset;
