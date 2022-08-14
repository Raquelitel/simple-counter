import React from "react";

const Navbar = ({elegirReloj, reiniciar}) => {

  return (
    <>
        <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
                <h5 className="text-white h4">Menú relojes</h5>
                <button id="contador" type="button" className="btn btn-secondary m-1 text-capitalize" onClick={elegirReloj}>Contador</button>
                <button id="reverse" type="button" className="btn btn-secondary m-1 text-capitalize" onClick={elegirReloj}>Marcha atrás</button>
                <button id="cronometro" type="button" className="btn btn-secondary m-1 text-capitalize" onClick={elegirReloj}>cronómetro</button>
                <button id="temporizador" type="button" className="btn btn-secondary m-1 text-capitalize" onClick={elegirReloj}>temporizador</button>
                <button id="reiniciar" type="button" className="btn btn-secondary m-1 text-capitalize" onClick={reiniciar}>reiniciar</button>
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
