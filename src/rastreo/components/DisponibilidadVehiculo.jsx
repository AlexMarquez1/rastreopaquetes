import React, { useEffect, useState } from 'react'
import { VehiculoSeleccionado } from './VehiculoSeleccionado';
import moto from '../../assets/iconos_transporte/motorcycle.png';
import mp from '../../assets/iconos_transporte/np300.png';
import dodge from '../../assets/iconos_transporte/dodge-ram.png';
import torton from '../../assets/iconos_transporte/torton.png';
import rabon from '../../assets/iconos_transporte/rabon.png';
import trailer from '../../assets/iconos_transporte/trailer.png';
import useAuth from '../../hooks/useAuth';

export const DisponibilidadVehiculo = ({data, vehiculoactual}) => {

  const [dataVehiculos, setdataVehiculos] = useState(data)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { userAuth } = useAuth();

  const handleToggle = (item) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };

  const vehiculosFiltrados = data.filter(
    vehiculo =>
      vehiculo.idvehiculo !== vehiculoactual?.idvehiculo &&
      vehiculo.usuario.idusuario === userAuth.idusuario
  );
  
  return (
    <>
        <div className="col-sm-12 p-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="pi pi-truck" style={{ fontSize: '3rem' }}></i>
                <br></br>
                <h1 className='text-3xl text-[#BE0F34] font-extrabold pb-4'>Disponibilidad de vehículos <span className='text-black'>'{vehiculosFiltrados.length}'</span></h1>
                <div className='container'>
                  <div className='row justify-center'>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle((vehiculosFiltrados.filter(item => item.tipovehiculo === 'Motocicleta' && item.usuario.idusuario === userAuth.idusuario)))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                          {vehiculosFiltrados.filter(vehiculo => vehiculo.tipovehiculo === 'Motocicleta').length}
                        </span>
                        <img src={moto} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Motocicleta</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculosFiltrados.filter(item => item.tipovehiculo === 'Nissan' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {vehiculosFiltrados.filter(vehiculo => vehiculo.tipovehiculo === 'Nissan').length}
                        </span>
                        <img src={mp} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Nissan</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculosFiltrados.filter(item => item.tipovehiculo === 'Camioneta 3 1/2' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {vehiculosFiltrados.filter(vehiculo => vehiculo.tipovehiculo === 'Camioneta 3 1/2').length}
                        </span>
                        <img src={dodge} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Camioneta 3 1/2</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculosFiltrados.filter(item => item.tipovehiculo === 'Torton' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                          {vehiculosFiltrados.filter(vehiculo => vehiculo.tipovehiculo === 'Torton').length}
                        </span>
                        <img src={torton} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Torton</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculosFiltrados.filter(item => item.tipovehiculo === 'Rabon' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                          {vehiculosFiltrados.filter(vehiculo => vehiculo.tipovehiculo === 'Rabon').length}
                        </span>
                        <img src={rabon} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Rabon</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculosFiltrados.filter(item => item.tipovehiculo === 'Trailer' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 border border-red-700 flex items-center justify-center hover:shadow-indigo-500/50 shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                          {vehiculosFiltrados.filter(vehiculo => vehiculo.tipovehiculo === 'Trailer').length} 
                        </span>
                        <img src={trailer} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
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
