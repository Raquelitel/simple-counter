import React, { useState, useEffect } from "react";
import DigitalTimer from "./DigitalTimer/DigitalTimer.jsx";
import ButtonReset from "./ButtonReset.jsx";

const ModalReverse = () => {
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
    setSegundoUno(0), setSegundoDos(0), setMinutoUno(0);
    setMinutoDos(0), setHoraUno(0), setHoraDos();
  };
  /*   let tiempo = 0;
  const [backwards, setBackwards] = useState(tiempo);
  const [count, setCount] = useState(0);

  const cuantoTiempoQueda = () => {
    setCount(count + 1);
    tiempo = window.prompt("¿Cuantos segundos quieres de cuenta atras?");

    if (isNaN(tiempo)) {
      alert("Introduce un número valido");
      return;
    }

    tiempo = parseInt(tiempo);
    setBackwards(tiempo);
  };

  setTimeout(() => {
    if (backwards === 0 && count > 0) {
      alert("Tu tiempo ha acabado");
      return;
    }

    if (count > 0) setBackwards(backwards - 1);
  }, 1000); */

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
      {/* 
      <h1 className="text-center mt-5 bg-dark">
        <div>{backwards}</div>
      </h1> */}

      <ButtonReset reiniciarCuenta={reiniciar} />
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
                  type="number"
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

export default ModalReverse;
