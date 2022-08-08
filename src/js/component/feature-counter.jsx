import React from "react";


const Counter = () => {
    return (
      <div className="container text-center">
        <div className="d-flex flex-row justify-content-center align-items-center bg-secondary rounded" >
            <div className="text-info bg-dark rounded my-2" id="hours">00</div>
            <div className="my-2">:</div>
            <div className="text-info bg-dark rounded my-2" id="minutes">00</div>
            <div className="my-2">:</div>
            <div className="text-info bg-dark rounded my-2" id="seconds">00</div>
        </div>
      </div>

       

    )
}

export default Counter;