import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar.jsx";
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

/*     let active = e.target.id
    switch(active) {
      case "contador": setVisualizar(<SecondsCounter />);
      break;
      case "reverse": setVisualizar(<SecondReverse />);
      break;
      case "cronometro": setVisualizar(<Cronometro/>);
      break;
      case "temporizador": setVisualizar(<Temporizador />);
      break;
    } */
  };


  useEffect(()=> {
    switch(activo) {
      case "contador": setVisualizar(<SecondsCounter />);
      break;
      case "reverse": setVisualizar(<SecondReverse />);
      break;
      case "cronometro": setVisualizar(<Cronometro/>);
      break;
      case "temporizador": setVisualizar(<Temporizador />);
      break;
    }
  }, [activo])


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
