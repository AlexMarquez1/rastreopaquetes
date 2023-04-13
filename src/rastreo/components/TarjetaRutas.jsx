import React from 'react'

const TarjetaRutas = ({idViaje, descripcionViaje, nombreChofer, idVehiculo, traslado}) => {
  return (
    <>
        <div className="card">
            <img src="./src/assets/cdmxestado.png" className="card-img-top" alt="..." style={{ width: "200px", height: "auto" }}/>
            <div className="card-body">
                <h5 className="card-title">Id viaje: {idViaje}</h5>
                <p className="card-text">{descripcionViaje}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Chofer: {nombreChofer}</li>
              <li className="list-group-item">Id_Vehículo: {idVehiculo}</li>
              <li className="list-group-item">Traslado: {traslado}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Seguimiento</a>
              <a href="#" className="card-link">Ver más detalles</a>
            </div>
        </div>
    </>
  )
}

export default TarjetaRutas