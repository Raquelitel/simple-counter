import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import SecondsCounter from "./SecondsCounter.jsx";
import SecondReverse from "./SecondReverse.jsx";
import DigitalTimer from "./DigitalTimer/DigitalTimer.jsx";
import Cronometro from "./Cronometro.jsx";
import Temporizador from "./Temporizador.jsx";

const PreHome = () => {
  // Digital Timer
  const [segundoUno, setSegundoUno] = useState(0);
  const [segundoDos, setSegundoDos] = useState(0);
  const [minutoUno, setMinutoUno] = useState(0);
  const [minutoDos, setMinutoDos] = useState(0);
  const [horaUno, setHoraUno] = useState(0);
  const [horaDos, setHoraDos] = useState(0);

  // Funciones
  const [activo, setActivo] = useState("");
  const [visualizar, setVisualizar] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  const elegirReloj = (e) => {
    setFirstTime(false);
    setActivo(e.target.id);
    console.log(activo);
    if (activo === "contador") {
      setVisualizar(<SecondsCounter />);
    }
    if (activo === "reverse") {
      setVisualizar(<SecondReverse />);
    }
    if (activo === "temporizador") {
      setVisualizar(<Temporizador />);
    }
  };

  const reiniciar = () => {
    setVisualizar("");
    setFirstTime(true);
  };

  return (
    <div>
      <Navbar elegirReloj={elegirReloj} reiniciar={reiniciar} />

      {firstTime ? (
        <DigitalTimer
          secondOne={segundoUno}
          secondsTwo={segundoDos}
          minuteOne={minutoUno}
          minuteTwo={minutoDos}
          hourOne={horaUno}
          hourTwo={horaDos}
        />
      ) : (
        visualizar
      )}
    </div>
  );
};

export default PreHome;
