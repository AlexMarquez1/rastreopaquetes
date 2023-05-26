import React, { useEffect, useState } from 'react'
import { VehiculoSeleccionado } from './VehiculoSeleccionado';
import useAuth from '../../hooks/useAuth';

export const DisponibilidadVehiculo = ({data}) => {

  const [dataVehiculos, setdataVehiculos] = useState(data)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { userAuth } = useAuth();

  const handleToggle = (item) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };
  
  return (
    <>
        <div className="col-sm-12 p-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="pi pi-truck" style={{ fontSize: '3rem' }}></i>
                <br></br>
                <h1 className='text-black text-3xl pb-4'>Disponibilidad de vehículos</h1>
                <div className='container'>
                  <div className='row justify-center'>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle((dataVehiculos.filter(item => item.tipovehiculo === 'Motocicleta' && item.usuario.idusuario === userAuth.idusuario)))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {dataVehiculos.filter(item => item.tipovehiculo === 'Motocicleta' && item.usuario.idusuario === userAuth.idusuario).length}
                          {/* {dataVehiculos.filter(item => item.tipovehiculo === 'Motocicleta').length} */}
                        </span>
                        <img src="src/assets/iconos_transporte/motorcycle.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Motocicleta</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(dataVehiculos.filter(item => item.tipovehiculo === 'Nissan' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {dataVehiculos.filter(item => item.tipovehiculo === 'Nissan' && item.usuario.idusuario === userAuth.idusuario).length}
                        </span>
                        <img src="src/assets/iconos_transporte/nissan-estaquita-redilas.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Nissan</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(dataVehiculos.filter(item => item.tipovehiculo === 'Camioneta 3 1/2' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {dataVehiculos.filter(item => item.tipovehiculo === 'Camioneta 3 1/2' && item.usuario.idusuario === userAuth.idusuario).length}
                        </span>
                        <img src="src/assets/iconos_transporte/dodge-ram.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Camioneta 3 1/2</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(dataVehiculos.filter(item => item.tipovehiculo === 'Torton' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                          {dataVehiculos.filter(item => item.tipovehiculo === 'Torton' && item.usuario.idusuario === userAuth.idusuario).length}
                        </span>
                        <img src="src/assets/iconos_transporte/torton.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Torton</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(dataVehiculos.filter(item => item.tipovehiculo === 'Rabon' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {dataVehiculos.filter(item => item.tipovehiculo === 'Rabon' && item.usuario.idusuario === userAuth.idusuario).length}
                        </span>
                        <img src="src/assets/iconos_transporte/rabon.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Rabon</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(dataVehiculos.filter(item => item.tipovehiculo === 'Trailer' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center hover:shadow-indigo-500/50 shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {dataVehiculos.filter(item => item.tipovehiculo === 'Trailer' && item.usuario.idusuario === userAuth.idusuario).length}
                        </span>
                        <img src="src/assets/iconos_transporte/trailer.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Trailer</span>
                    </div>
                    {
                      isOpen && (
                        <>
                          <VehiculoSeleccionado selectedItem={selectedItem} handleToggle={handleToggle}/>
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
