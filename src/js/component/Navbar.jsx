import React, { useState } from "react";

const Navbar = ({elegirContador, elegirReverse}) => {

  return (
    <>
    <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4">
    <h5 className="text-white h4">Menú relojes</h5>
    <button id="contador" type="button" className="btn btn-secondary m-1" onClick={elegirContador}>Contador</button>
    <button id="contador" type="button" className="btn btn-secondary m-1" onClick={elegirReverse}>Marcha atrás</button>


  </div>
</div>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    </>

  );
};

export default Navbar;
