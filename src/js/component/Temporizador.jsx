import React, { useState, useEffect } from "react";
import DigitalTimer from "./DigitalTimer/DigitalTimer.jsx";


const Temporizador = () => {
  const [segundoUno, setSegundoUno] = useState(0);
  const [segundoDos, setSegundoDos] = useState("");
  const [minutoUno, setMinutoUno] = useState(0);
  const [minutoDos, setMinutoDos] = useState(0);
  const [horaUno, setHoraUno] = useState(0);
  const [horaDos, setHoraDos] = useState(0);
  const [tiempo, setTiempo] = useState("");

  
  const [isActive, setIsActive] = useState(true);
  const [cuenta, setCuenta] = useState([])


  useEffect(() => {
    const interval = setInterval(() => {
      if(!isActive) { 
        setSegundoUno((valor) => valor - 1);
      } 
    }, 1000);
    return () => clearInterval(interval);
  });


  const cuentaAtras = () => {
    setIsActive(!isActive);
    if (tiempo === 0 || tiempo === "" || tiempo.length >2) {
      alert("Introduce un número valido")
      return;
  }

  setSegundoUno(tiempo)

  }

  if(segundoUno<0) {
    setSegundoUno(0), setSegundoDos(0), setMinutoUno(0);
    setMinutoDos(0), setHoraUno(0), setHoraDos(0);
  }

/* let contador = parseInt(tiempo)
let newContador = contador.padStart(6,0)

  console.log(typeof newContador)
  console.log(newContador)
     setSegundoUno(cuenta[5]), setSegundoDos(cuenta[4]), setMinutoUno(cuenta[3]);
    setMinutoDos(cuenta[2]), setHoraUno(cuenta[1]), setHoraDos(cuenta[0]); 
  };

  if(segundoUno<0) {
    setSegundoUno(0), setSegundoDos(0), setMinutoUno(0);
    setMinutoDos(0), setHoraUno(0), setHoraDos(0);
  }
 */
  return (
    <>
    <h2 className="text-center text-capitalize mt-3">temporizador de segundos</h2>
      <DigitalTimer
        secondOne={segundoUno}
        secondsTwo={segundoDos}
        minuteOne={minutoUno}
        minuteTwo={minutoDos}
        hourOne={horaUno}
        hourTwo={horaDos}
      />  
      <>
        {/* boton */}
        <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-info text-capitalize"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          cuenta atrás
        </button>
        </div>
        {/* modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
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
                  Añadir unidad de tiempo en segundos
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
                  data-bs-dismiss="modal"
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
