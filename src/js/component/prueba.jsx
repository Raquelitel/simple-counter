import React, { useEffect, useState } from 'react';

const CuentaRegresivaPersonalizada = () =>{

    let tiempo = 0;
    const [backwards, setBackwards] = useState(tiempo);
    const [count, setCount] = useState(0);
        
    const cuantoTiempoQueda = () => {
        setCount(count + 1);
        tiempo = window.prompt("¿Cuantos segundos quieres de cuenta atras?")
        
        if (isNaN(tiempo)) {
            alert("Introduce un número valido")
            return;
        }
        
        tiempo = parseInt(tiempo)
        setBackwards(tiempo)
    }
    
    
setTimeout(() => {
    if (backwards === 0 && count > 0) {
        alert("Tu tiempo ha acabado")
        return;
    }

    if (count > 0) setBackwards(backwards - 1); 

}, 1000);

return(

    <>
    <div>{backwards}</div>
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
              onClick={() => cuantoTiempoQueda()}
            >
              Empezar
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
/*     <body className="m-5 row justify-content-center bg-body">
        <div className="col-4 bg-black text-light">
            <h1 className="text-center mt-5 bg-dark">
                <div>{backwards}</div>
            </h1>
            <div>
                <button className="justify-content-center text-center"  onClick={() => cuantoTiempoQueda()}>Cuenta atras</button>
            </div>
        </div>
    </body> */
)
}

export default CuentaRegresivaPersonalizada;