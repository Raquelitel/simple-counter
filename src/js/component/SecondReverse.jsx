import React, { useState, useEffect } from "react";
import DigitalTimer from "./DigitalTimer/DigitalTimer.jsx";
import ButtonReset from "./ButtonReset.jsx";


const SecondReverse = () => {
  const [segundoUno, setSegundoUno] = useState(9);
  const [segundoDos, setSegundoDos] = useState(5);
  const [minutoUno, setMinutoUno] = useState(9);
  const [minutoDos, setMinutoDos] = useState(5);
  const [horaUno, setHoraUno] = useState(4);
  const [horaDos, setHoraDos] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setSegundoUno((valor) => valor - 1);
    }, 1000);
  }, []);

  if (segundoUno < 0) {
    setSegundoUno(9);
    setSegundoDos(segundoDos - 1);
  }
  if (segundoDos === 0 && segundoUno < 1) {
    setSegundoDos(5);
    setMinutoUno(minutoUno - 1);
  }
  if (minutoUno < 0) {
    setMinutoUno(9);
    setMinutoDos(minutoDos - 1);
  }

  if (minutoDos === 0 && minutoUno < 1) {
    setMinutoDos(5);
    setHoraUno(horaUno - 1);
  }
  if (horaUno < 0) {
    setHoraUno(9);
    setHoraDos(horaDos - 1);
  }
  if (horaDos === 0 && horaUno < 1) {
    setHoraDos(2);
  }

  const reiniciar = () => {
    setSegundoUno(9),
      setSegundoDos(5),
      setMinutoUno(9),
      setMinutoDos(5),
      setHoraUno(4),
      setHoraDos(2);
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
    </>
  );
};

export default SecondReverse;
