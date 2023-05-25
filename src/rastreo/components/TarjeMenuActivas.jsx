import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GoogleMapLoader from '../helpers/GoogleMapLoader';

const styleRegistroModal = {
  width: '95%',
  background: 'rgb(194,103,72)',
}

const TarjeMenuActivas = () => {

  const [show, setShow] = useState(null);

  const toggleAccordionViaje = () => {
    setShow(!show);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
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
      <Carousel 
      renderDotsOutside={true} 
        infinite={true} 
        swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
        <div
          className={`bg-[#dfdfdf] w-full max-w-xxl mx-auto rounded-md overflow-hidden transform transition duration-500 ease-in-out p-2 ${isHovered ? "" : "shadow-md"
            }`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {/* <LoadScript
            googleMapsApiKey="AIzaSyAwXqH5JgdnOqOJy8F8_PrkvOqLtHhy60I"
            libraries={['places']}
          > */}
      
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
          {/* </LoadScript> */}
          {/* <img
    className="w-full h-48 object-cover"
    src="https://source.unsplash.com/random/800x600"
    alt="Beach"
  /> */}
          <div className="p-4 bg-[#dfdfdf]">
            <h2 className="font-bold text-xl mb-2">Beach Vacation</h2>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
              lorem eu velit ultrices dapibus ac eget mauris.
            </p>
            <button
              className={`mt-4 bg-[#FFF] text-[#BE0F34] font-bold py-2 px-4 rounded ${isHovered && "hover:bg-[#BE0F34] hover:text-[#FFF]"
                }`}
              onClick={handleToggle}
            >
              <i className="pi pi-clock px-1"></i>
              historial de viaje
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
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
      </Carousel>

    </>
  )
}

export default TarjeMenuActivas