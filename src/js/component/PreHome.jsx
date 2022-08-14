import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import SecondsCounter from "./SecondsCounter.jsx";
import SecondReverse from "./SecondReverse.jsx";
import DigitalTimer from "./DigitalTimer/DigitalTimer.jsx";

const PreHome = () => {
  // Digital Timer
  const [segundoUno, setSegundoUno] = useState(0);
  const [segundoDos, setSegundoDos] = useState(0);
  const [minutoUno, setMinutoUno] = useState(0);
  const [minutoDos, setMinutoDos] = useState(0);
  const [horaUno, setHoraUno] = useState(0);
  const [horaDos, setHoraDos] = useState(0);

  // Funciones
  const [contador, setContador] = useState(false);
  const [reverse, setReverse] = useState(false);

  const elegirContador = (e) => {
    setContador(!contador);
    setReverse(false);
  };

  const elegirReverse = (e) => {
    setReverse(!reverse);
    setContador(false);
  };

  return (
    <div>
      <Navbar elegirContador={elegirContador} elegirReverse={elegirReverse} />

      {contador ? (
        <SecondsCounter />
      ) : (
        <DigitalTimer
          secondOne={segundoUno}
          secondsTwo={segundoDos}
          minuteOne={minutoUno}
          minuteTwo={minutoDos}
          hourOne={horaUno}
          hourTwo={horaDos}
        />
      )}
{/*       {reverse ? (
        <SecondReverse />
      ) : (
        <DigitalTimer
          secondOne={segundoUno}
          secondsTwo={segundoDos}
          minuteOne={minutoUno}
          minuteTwo={minutoDos}
          hourOne={horaUno}
          hourTwo={horaDos}
        />
      )} */}
    </div>
  );
};

export default PreHome;
