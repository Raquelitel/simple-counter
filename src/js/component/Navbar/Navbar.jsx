import React from "react";
import "./navbar.css"

const Navbar = ({elegirReloj, reiniciar}) => {

  return (
    <>
        <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
                <h5 className="text-white h4 text-uppercase">Menú relojes</h5>
                <div className="d-flex flex-wrap justify-content-center">
                <button id="contador" type="button" className="col-5 col-md-auto btn btn-secondary m-1 text-capitalize bg-hover" onClick={elegirReloj}>Contador</button>
                <button id="reverse" type="button" className="col-5 col-md-auto btn btn-secondary m-1 text-capitalize bg-hover" onClick={elegirReloj}>Marcha atrás</button>
                <button id="cronometro" type="button" className="col-5 col-md-auto btn btn-secondary m-1 text-capitalize bg-hover" onClick={elegirReloj}>cronómetro</button>
                <button id="temporizador" type="button" className="col-5 col-md-auto btn btn-secondary m-1 text-capitalize bg-hover" onClick={elegirReloj}>temporizador</button>
                <button id="reiniciar" type="button" className="col-10 col-md-auto btn btn-danger m-1 text-capitalize" onClick={reiniciar}>reiniciar</button>
                </div>

            </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler bg-hover" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <p>Menú</p>
                </button>
            </div>
        </nav>
    </>

  );
};

export default Navbar;
