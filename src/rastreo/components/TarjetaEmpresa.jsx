import React from 'react'
import useAuth from '../../hooks/useAuth';

export const TarjetaEmpresa = ({data}) => {

    const { userAuth } = useAuth();

    const empresasFiltradas = data.filter(item => item.razonsocial && item.usuario.idusuario === userAuth.idusuario);
    console.log(empresasFiltradas)
  return (
    <>
    <div className="col-sm-12 p-4">
      <div className="card">
        <div className="card-body text-center">
        <h1 className='text-black text-3xl pb-4'>Empresas dadas de alta</h1>
          <div className='container'>
            <div className='row justify-center'>
                {
                   empresasFiltradas.map((item) => (
                    <div key={item.idempresa} className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle((vehiculos.filter(item => item.tipovehiculo === 'Motocicleta' && item.usuario.idusuario === userAuth.idusuario)))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 hover:border-white border-2 border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">                        
                        <img src="" alt={item.razonsocial} className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>
                      {item.razonsocial}
                      </span>
                    </div>
                   )) 
                }
              
              {
                // isOpen && (
                //   <>
                //     <VehiculoSeleccionado selectedItem={selectedItem} handleToggle={handleToggle}/>
                //   </>
                // )
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
