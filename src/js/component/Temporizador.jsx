import React, { useState, useEffect } from "react";
import DigitalTimer from "./DigitalTimer/DigitalTimer.jsx";
import ButtonReset from "./ButtonReset.jsx";

const Temporizador = (valor) => {
  const [segundoUno, setSegundoUno] = useState(0);
  const [segundoDos, setSegundoDos] = useState(0);
  const [minutoUno, setMinutoUno] = useState(0);
  const [minutoDos, setMinutoDos] = useState(0);
  const [horaUno, setHoraUno] = useState(0);
  const [horaDos, setHoraDos] = useState(0);
  const [tiempo, setTiempo] = useState(0);

  const reiniciar = () => {
    setSegundoUno(0),
      setSegundoDos(0),
      setMinutoUno(0),
      setMinutoDos(0),
      setHoraUno(0),
      setHoraDos(0);
  };

  const cuentaAtras = () => {
    setSegundoUno({tiempo}), setSegundoDos(0), setMinutoUno(0);
    setMinutoDos(0), setHoraUno(0), setHoraDos();
  };

  return (
    <>
      <DigitalTimer
        secondOne={segundoUno}
        secondsTwo={segundoDos}
        minuteOne={minutoUno}
        minuteTwo={minutoDos}
        hourOne={horaUno}
        hourTwo={horaDos}
      />

      <input  
            type="text"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
          
          />
          
      <>
        {/* boton */}
        <button
          type="button"
          className="btn btn-info mb-5 mx-3 text-capitalize"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          cuenta atrás
        </button>

        {/* modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-capitalize"
                  id="staticBackdropLabel"
                >
                  Añade el tiempo (HH/MM/SS)
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="border-bottom border-0"
                  value={tiempo}
                  onChange={(e) => setTiempo(e.target.value)}
                ></input>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary text-capitalize"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary text-capitalize"
                  onClick={() => cuentaAtras()}
                >
                  Empezar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Temporizador;
