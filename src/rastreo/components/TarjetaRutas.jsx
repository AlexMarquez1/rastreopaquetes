import React, { useState } from 'react'

const TarjetaRutas = ({idViaje, descripcion, chofer, idVehiculo, partida, destino, cardsData, setCardsData}) => {
  
  const [show, setShow] = useState(null);

  const toggleAccordion = () => {
    setShow(!show);
  };
  
  return (
    <>
    
        <div className='col-sm-6 col-md-6 col-xl-3 pb-4'>
        <div className="card">
            {/* <img src="" className="card-img-top" alt="..." style={{ width: "200px", height: "auto" }}/> */}
            <ion-icon name="chevron-down-circle float-right"></ion-icon>
            <div onClick={toggleAccordion} className="card-body">
                <h5 className="card-title">Id viaje: {idViaje}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
            {
              show &&
                <div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Chofer: {chofer}</li>
                    <li className="list-group-item">Id_Vehículo: {idVehiculo}</li>
                    <li className="list-group-item">Traslado: {partida} - {destino}</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">Seguimiento</a>
                    <a href="#" className="card-link">Ver más detalles</a>
                  </div>
                </div>
            } 
        </div>
        </div>
      
    
    </>
  )
}

export default TarjetaRutas