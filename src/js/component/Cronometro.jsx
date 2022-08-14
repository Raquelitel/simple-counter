import React, { useState, useEffect } from "react";
import DigitalTimer from "./DigitalTimer/DigitalTimer.jsx";
import ButtonReset from "./ButtonReset.jsx";

const Cronometro = () => {
  const [segundoUno, setSegundoUno] = useState(0);
  const [segundoDos, setSegundoDos] = useState(0);
  const [minutoUno, setMinutoUno] = useState(0);
  const [minutoDos, setMinutoDos] = useState(0);
  const [horaUno, setHoraUno] = useState(0);
  const [horaDos, setHoraDos] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const start = () => {
    setIsActive(!isActive);

    useEffect(() => {
      let intervalId;
      if (isActive) {
        intervalId = setInterval(() => {
          setSegundoUno((valor) => valor + 1);
        }, 1000);

        if (segundoUno > 9) {
          setSegundoUno(0);
          setSegundoDos(segundoDos + 1);
        }
        if (segundoDos === 5 && segundoUno > 9) {
          setSegundoDos(0);
          setMinutoUno(minutoUno + 1);
        }
        if (minutoUno > 9) {
          setMinutoUno(0);
          setMinutoDos(minutoDos + 1);
        }

        if (minutoDos === 5 && minutoUno > 9) {
          setMinutoDos(0);
          setHoraUno(horaUno + 1);
        }
        if (horaUno > 9) {
          setHoraUno(0);
          setHoraDos(horaDos + 1);
        }
        if (horaDos === 2 && horaUno > 4) {
          setHoraDos(0);
        }
      }
    }, [isActive, segundoUno]);
  };


  console.log(reiniciar);
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
      <div className="buttons">
        <button onClick={start} >
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={() => null} className="start">
          Start
        </button>
        <button onClick={() => null} className="reset">
          Reset
        </button>
      </div>
    </>
  );
};

export default Cronometro;
