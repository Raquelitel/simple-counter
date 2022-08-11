import React from "react";

const ButtonReset = ({ reiniciarCuenta }) => {
  return (
    <button className="btn btn-info mt-2" onClick={reiniciarCuenta}>
      "Reiniciar"
    </button>
  );
};

export default ButtonReset;
