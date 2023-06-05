import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "react-multi-carousel/lib/styles.css";
import useAuth from '../../hooks/useAuth';

const TarjetaRutas = ({data, idViaje, descripcion, chofer, idVehiculo, partida, destino, setMensaje, latPartida, latLlegada, lngpartida, lngLlegada, fechaPartida, fechaLlegada, empresa, setTarjetaViajeSeleccionado, tipoVehiculo, marcaVehiculo, modeloVehiculo}) => {

  const latPartidaDecimal = parseFloat(latPartida);
  const lngPartidaDecimal = parseFloat(lngpartida);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [show, setShow] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const toggleAccordion = () => {
    
  };

  const [rotate, setRotate] = useState(false);

  const handleIconClick = () => {
    setRotate(!rotate);
    setShow(!show);
  };

  return (
    <>
      <div className="card m-2 mb-6 drop-shadow-md bg-[#dfdfdf] transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
        <GoogleMap
          mapContainerStyle={{
            height: '250px',
            width: '100%',
          }}

          center={{
            lat: latPartidaDecimal, // Latitud inicial del mapa
            lng: lngPartidaDecimal, // Longitud inicial del mapa
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

        <div className="card-body">
          <div style={{ float: 'right' }} className='flex justify-end cursor-pointer' onClick={handleIconClick}>
            <i className={`pi pi-chevron-down text-xl transform ${rotate ? 'rotate-180' : 'rotate-0'} rounded-full border border-gray-500 hover:border-white p-2 transition duration-300 ease-in-out hover:bg-[#BE0F34] text-[#BE0F34] hover:text-white hover:shadow-md`}></i>
          </div>
          <h5 className="card-title font-bold text-xl text-left">Id viaje: <span className='font-normal text-ms text-gray-700'>{idViaje}</span></h5>
          <h4 className="card-title font-bold text-xl text-left">Empresa: <span className='font-normal text-ms text-gray-700'>{empresa}</span></h4>
          {
            show &&

            <>
            <div className='row'>
            <div className='col'>
              <h5 className="card-title font-bold text-base">
                Partida:
                <span className='font-normal text-ms text-gray-700'><br />{partida}</span>
              </h5>
            </div>
            <div className='col'>
              <h5 className="card-title font-bold text-base">
                destino:
                <span className='font-normal text- text-gray-700'><br />{destino}</span>
              </h5>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <h5 className="card-title font-bold text-base">
                Fecha de salida:
                <span className='font-normal text-ms text-gray-700'><br />{fechaPartida}</span>
              </h5>
            </div>
            <div className='col'>
              <h5 className="card-title font-bold text-base">
                Fecha de llegada:
                <span className='font-normal text-ms'> {fechaLlegada}</span>
              </h5>
            </div>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-left"><span className='font-bold text-lg'>Chofer:</span> {chofer}</li>
              <li className="list-group-item text-left"><span className='font-bold text-lg'>Vehículo:</span> {tipoVehiculo}, {marcaVehiculo}, {modeloVehiculo}</li>
              <li className="list-group-item text-left"><span className='font-bold text-lg'>Descripción del viaje:</span> {descripcion}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link text-[#BE0F34] hover:text-rose-500 text-lg"> <i className="pi pi-map-marker text-[#BE0F34] hover:text-opacity-75"></i> Seguimiento</a>
              <a href="#" className="card-link text-[#BE0F34] hover:text-rose-500 text-lg" onClick={() => { setMensaje(true), setTarjetaViajeSeleccionado(data)}}><i className="pi pi-external-link text-[#BE0F34] hover:text-opacity-75"></i> Ver más
              </a>
            </div>
          </div>
            </>
          }
          
        </div>
      </div>
    </>
  )
}

export default TarjetaRutas