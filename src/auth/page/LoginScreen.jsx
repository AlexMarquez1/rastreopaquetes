import React from 'react'
import { FormularioLogin } from '../components/FormularioLogin'

export const LoginScreen = () => {
  return (
    <>
    <div className='flex w-full h-screen'>
      <div className='bg-[#E2E2E2] flex w-full items-center justify-center lg:w-1/2'>
        <FormularioLogin />
      </div>
      <div className='hidden lg:flex h-full w-3/4 bg-[#BE0F34]'>
        <div className='w-auto h-auto'>
        {/* <img className="" src="src/assets/isae.png" alt="Your Company"/> */}
        <h1 className='pt-6 px-6 text-5xl font-bold text-white'>Rastreo app</h1>
        </div>
      </div> 
    </div>
    <div className=''>
        <div className='col bg-[#BE0F34]'>
        
            
              <div className="card-body text-center">
                <h1 className='text-black text-3xl py-4 text-white'>Gestiona tus:</h1>
                <div className='container'>
                  <div className='row justify-center'>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                        
                        <img src="src/assets/destino.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold text-white p-2'>Viajes</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                        
                        <img src="src/assets/telefono-inteligente.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold text-white p-2'>Seguimiento en tiempo real</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                        <img src="src/assets/conductor.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold text-white p-2'>Conductores</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                        <img src="src/assets/camiones.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold text-white p-2'>Vehículos</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl">
                        <img src="src/assets/empresa.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
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
