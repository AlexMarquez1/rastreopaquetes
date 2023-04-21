import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Slider from "react-slick";

const TarjeMenuActivas = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };

    const [selectedLocation, setSelectedLocation] = useState(null);

    const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
<div
  className={`hover:border-4 border-green-400 relative w-full max-w-xxl mx-auto rounded-md overflow-hidden transform transition duration-500 ease-in-out ${
    isHovered ? "scale-105 shadow-md" : "shadow-md"
  }`}
  onMouseEnter={handleHover}
  onMouseLeave={handleLeave}
  onClick={handleToggle}
>
<LoadScript
            googleMapsApiKey="AIzaSyAwXqH5JgdnOqOJy8F8_PrkvOqLtHhy60I"
            
          >
            <GoogleMap
              mapContainerStyle={{
                height: '300px',
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
  {/* <img
    className="w-full h-48 object-cover"
    src="https://source.unsplash.com/random/800x600"
    alt="Beach"
  /> */}
  <div className="p-4 bg-white">
    <h2 className="font-bold text-xl mb-2">Beach Vacation</h2>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
      lorem eu velit ultrices dapibus ac eget mauris.
    </p>
    <button
      className={`mt-4 bg-green-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded ${
        isHovered && "opacity-80 hover:bg-green-600"
      }`}
      onClick={handleToggle}
    >
      Más detalles
    </button>
    {isOpen && (
        <>
        
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 items-center justify-center">
        
        <div className="bg-white rounded-md p-4 m-3">
        <button
            className="bg-white hover:bg-red-700 text-gray-700 hover:text-white font-bold px-2 rounded-full mr-auto"
            onClick={handleToggle}
          >
            <i className="pi pi-times-circle"></i>
          </button>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            eget lorem eu velit ultrices dapibus ac eget mauris. Sed id
            tellus ac eros vulputate rhoncus nec sed urna. Morbi sit amet
            justo nec mauris bibendum vulputate in eget sapien.
          </p>
        </div>
        
      </div>
        </>
      
    )}
  </div>
</div>
    </>
    

    
  )
}

export default TarjeMenuActivas