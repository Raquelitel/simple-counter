import React from "react";
import "./DigitalTimer.css";

const DigitalTimer = ({
  secondOne,
  secondsTwo,
  minuteOne,
  minuteTwo,
  hourOne,
  hourTwo,
}) => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center align-items-center bg-secondary  borderRadius containerShadow container-size">
        <div className="text-info bg-dark d-flex flex-wrap justify-content-center borderRadius bgSize">
          <p className="numberSize">{hourTwo}</p>
          <p className="numberSize">{hourOne}</p>
        </div>
        <p className="my-2">:</p>
        <div className="text-info bg-dark d-flex flex-wrap justify-content-center borderRadius bgSize">
          <p className="numberSize">{minuteTwo}</p>
          <p className="numberSize">{minuteOne}</p>
        </div>
        <p className="my-2">:</p>
        <div className="text-info bg-dark d-flex flex-wrap justify-content-center borderRadius bgSize">
          <p className="numberSize">{secondsTwo}</p>
          <p className="numberSize">{secondOne}</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalTimer;
