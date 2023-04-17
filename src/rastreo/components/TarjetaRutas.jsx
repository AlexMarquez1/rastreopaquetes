import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const TarjetaRutas = ({idViaje, descripcion, chofer, idVehiculo, partida, destino, cardsData, setCardsData, setMensaje}) => {

  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const [show, setShow] = useState(null);

  const toggleAccordion = () => {
    setShow(!show);
  };

  const lib = [["places"]];
  const colorTexto = {
    color: 'black',
  }
  
  return (
    <>
    
        <div className='col-sm-6 col-md-6 col-xl-3 pb-4'>
        <div className="card">
          <LoadScript
            googleMapsApiKey="AIzaSyAwXqH5JgdnOqOJy8F8_PrkvOqLtHhy60I"
            
          >
            <GoogleMap
              mapContainerStyle={{
                height: '250px',
                width: '100%',
              }}

              center={{
                  lat: -34.6083, // Latitud inicial del mapa
                  lng: -58.3712, // Longitud inicial del mapa
              }}
              
              zoom={10} // Nivel de zoom inicial del mapa
                // onClick={handleMapClick} // Asignamos la función de manejo de clic en el mapa
              >
                {selectedLocation && ( // Si hay una ubicación seleccionada, mostramos un marcador en el mapa
                    <Marker
                        position={{
                            lat: selectedLocation.lat,
                            lng: selectedLocation.lng,
                        }}
                    />
                )}
            </GoogleMap>
          </LoadScript>
            {/* <img src="" className="card-img-top" alt="..." style={{ width: "200px", height: "auto" }}/> */}
            {/* <ion-icon name="chevron-down-circle float-right"></ion-icon> */}
            <div onClick={toggleAccordion} className="card-body">
              <div style={{float: 'right'}}>
                <i className="pi pi-angle-down"></i>
              </div>
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
                    <a href="#" className="card-link" onClick={() => {setMensaje(true)}}>Ver más detalles</a>
                  </div>
                </div>
            } 
        </div>
        </div>
      
    
    </>
  )
}

export default TarjetaRutas