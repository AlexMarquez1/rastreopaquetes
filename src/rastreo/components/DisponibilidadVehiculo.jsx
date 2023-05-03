import React, { useState } from 'react'

export const DisponibilidadVehiculo = ({data}) => {

  const [dataVehiculos, setdataVehiculos] = useState(data)
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
        <div className="col-sm-12 p-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="pi pi-truck" style={{ fontSize: '3rem' }}></i>
                <br></br>
                <h1 className='text-black text-3xl'>Disponibilidad de vehículos</h1>
                <div className='container'>
                  <div className='row justify-center'>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={handleToggle}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">{dataVehiculos.filter(item => item.tipovehiculo === 'Motocicleta').length}</span>
                        <img src="src/assets/iconos_transporte/motorcycle.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Motocicleta</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={handleToggle}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">{dataVehiculos.filter(item => item.tipovehiculo === 'Nissan').length}</span>
                        <img src="src/assets/iconos_transporte/nissan-estaquita-redilas.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Nissan</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={handleToggle}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">{dataVehiculos.filter(item => item.tipovehiculo === 'Camioneta 3 1/2').length}</span>
                        <img src="src/assets/iconos_transporte/dodge-ram.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Camioneta 3 1/2</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={handleToggle}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">{dataVehiculos.filter(item => item.tipovehiculo === 'Torton').length}</span>
                        <img src="src/assets/iconos_transporte/torton.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Torton</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={handleToggle}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">{dataVehiculos.filter(item => item.tipovehiculo === 'Rabon').length}</span>
                        <img src="src/assets/iconos_transporte/rabon.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Rabon</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={handleToggle}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg hover:shadow-indigo-500/50 relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">{dataVehiculos.filter(item => item.tipovehiculo === 'Trailer').length}</span>
                        <img src="src/assets/iconos_transporte/trailer.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Trailer</span>
                    </div>
                    {
                      isOpen && (
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
                      )
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
