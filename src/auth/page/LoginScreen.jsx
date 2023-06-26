import React from 'react'
import { FormularioLogin } from '../components/FormularioLogin'

import destino from '../../assets/destino.png';
import telefono from '../../assets/telefono-inteligente.png';
import conductor from '../../assets/conductor2.png';
import camiones from '../../assets/camiones.png';
import empresa from '../../assets/empresa.png';

import { Player } from '@lottiefiles/react-lottie-player';

export const LoginScreen = () => {
  return (
    <>
    <div className='flex w-full h-screen'>
      <div className='bg-[#E2E2E2] flex w-full items-center justify-center lg:w-1/2'>
        <FormularioLogin />
      </div>
      <div className='hidden lg:flex h-full w-3/4 bg-[#BE0F34] items-center justify-center'>
        <div className='w-auto h-auto'>
          <div className='text-center items-center justify-center'>
            <h1 className=' text-5xl font-bold text-white'>Rastreo app</h1>
            <Player src='https://lottie.host/e1ddb718-71bd-4f86-867a-186f78d680f6/PgcsqPRRSV.json'
              className="player"
              loop
              autoplay
              style={{ height: '600px', width: '600px' }}
            />
          </div>
        </div>
      </div> 
    </div>
    <div className=''>
        <div className='col bg-[#BE0F34]'>
            <div className="card-body text-center">
              <h1 className='text-3xl py-4 text-white'>Gestiona tus:</h1>
              <div className='container'>
                <div className='row justify-center'>
                  <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                    <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                      
                      <img src={destino} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                    </div>
                    <span className='text-xl font-semibold text-white p-2'>Viajes</span>
                  </div>
                  <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                    <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                      
                      <img src={telefono} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                    </div>
                    <span className='text-xl font-semibold text-white p-2'>Seguimiento en tiempo real</span>
                  </div>
                  <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                    <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                      <img src={conductor} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                    </div>
                    <span className='text-xl font-semibold text-white p-2'>Conductores</span>
                  </div>
                  <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                    <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                      <img src={camiones} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                    </div>
                    <span className='text-xl font-semibold text-white p-2'>Vehículos</span>
                  </div>
                  <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                    <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                      <img src={empresa} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                    </div>
                    <span className='text-xl font-semibold text-white p-2'>Empresas</span>
                  </div>
                  {/* <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center '>
                    <div class="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg">
                      <img src="src/assets/iconos_transporte/trailer.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                    </div>
                    <span className='text-xl font-semibold'>Trailer</span>
                  </div> */}
                </div>
              </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
