import React, { useState } from 'react'
import { css } from '@emotion/react';

const TarjetaMenuHistorial = () => {
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
      className={`relative w-full max-w-md mx-auto rounded-md overflow-hidden transform transition duration-500 ease-in-out ${
        isHovered ? "scale-105 shadow-xl" : "shadow-md"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="bg-gray-200">
        <img
          className="w-full h-48 object-cover"
          src="https://source.unsplash.com/random/800x600"
          alt="Beach"
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">Beach Vacation</h2>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          lorem eu velit ultrices dapibus ac eget mauris.
        </p>
        <button
          className={`mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
            isHovered && "opacity-0"
          }`}
          onClick={handleToggle}
        >
          Learn More
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-md p-4">
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget lorem eu velit ultrices dapibus ac eget mauris. Sed id
                tellus ac eros vulputate rhoncus nec sed urna. Morbi sit amet
                justo nec mauris bibendum vulputate in eget sapien.
              </p>
              <button
                className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleToggle}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>



    {/* <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full h-56 object-cover" src="https://via.placeholder.com/350x200" alt="Card" />
      <div className="px-4 py-2 bg-white">
        <h2 className="font-bold text-xl mb-2">Título de la tarjeta</h2>
        <p className="text-gray-700 text-base mb-4">Este es el texto de la tarjeta. Aquí puedes incluir información adicional sobre el contenido de la tarjeta.</p>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Avatar" />
          <div>
            <p className="text-gray-900 font-bold leading-none">Nombre del autor</p>
            <p className="text-gray-600 text-sm">Fecha de publicación</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 bg-gray-100 flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Botón 1</button>
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Botón 2</button>
      </div>
    </div> */}

    {/* <div className="relative w-full max-w-md rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64 object-cover transform transition duration-500 ease-in-out hover:scale-110" src="https://source.unsplash.com/random/800x600" alt="Random image" />
      <div className="absolute bottom-0 w-full bg-white bg-opacity-75 py-3 px-6">
        <div className="text-xl font-medium mb-2">Card Title</div>
        <p className="text-gray-700 text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transform transition duration-500 ease-in-out hover:scale-110">
          Click Me
        </button>
      </div>
    </div> */}

    {/* <div className="w-full max-w-xs rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img className="w-full h-48 object-cover" src="https://source.unsplash.com/random/800x600" alt="Random image" />
      <div className="px-6 py-4">
        <div className="text-xl font-medium mb-2">Card Title</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag2</span>
      </div>
    </div> */}

    {/* <div className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis culpa eaque, iure maiores nam neque quis repellat sunt ut.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Click me
        </button>
      </div>
      <img className="w-full h-56 object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="https://source.unsplash.com/random/800x600" alt="Random image" />
    </div> */}
    

    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random/800x600" alt="Random image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card subtitle</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card title</a>
          <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim purus vitae nulla maximus, eu dignissim velit porttitor.</p>
        </div>
      </div>
      <div className="p-6 bg-gray-50 transition duration-300 ease-in-out transform hover:-translate-y-2">
        <a href="#" className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Click me
        </a>
      </div>
    </div>

    <div className="relative w-full max-w-md mb-6 mx-auto rounded-md shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative flex items-center justify-center h-64 overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://source.unsplash.com/random/800x600" alt="Random image" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute z-10 p-4 text-center text-white">
          <h1 className="text-4xl font-bold">Card Title</h1>
          <p className="mt-2 text-xl font-medium">Card subtitle</p>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut aliquam nisi, vel venenatis nulla. Maecenas gravida lacus vel elit iaculis dignissim. Nullam malesuada elit ut neque dictum tempor. Curabitur sit amet lacus auctor, luctus mauris id, eleifend ipsum.</p>
        <a href="#" className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">Learn more</a>
      </div>
    </div>

    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-2xl">Card Title</h1>
        <p className="text-gray-600 mt-2">Card subtitle</p>
      </div>
      <img className="h-48 w-full object-cover mt-2" src="https://source.unsplash.com/random/800x600" alt="Random image" />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-lg">$9.99</h1>
        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to Cart</button>
      </div>
    </div>



    

    
    </>
  )
}

export default TarjetaMenuHistorial