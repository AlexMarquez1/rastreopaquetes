import '../../styles/estilos.css';
import TarjeMenuActivas from '../components/TarjeMenuActivas';
import { Dropdown } from 'primereact/dropdown';
import { Field, Formik, Form } from 'formik';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { DisponibilidadVehiculo } from '../components/DisponibilidadVehiculo';
import { useFetchVehiculo } from '../hooks/useFetchVehiculos';

import { useFetchEmpresas } from '../hooks/useFetchEmpresas';

import useAuth from '../../hooks/useAuth';
import { Player } from '@lottiefiles/react-lottie-player';
import { useFetchViajes } from '../hooks/useFetchViajes';


const valorInicial = {
  empresas: {
    razonsocial: ''
  }
}

// COMPONENTE //
export const MenuScreen = () => {

  const { userAuth } = useAuth();

  const [empresaActual, setEmpresaActual] = useState({
    idempresa: '',
    razonsocial: '',
    direccion: '',
    rfc: '',
    telefono: '',
    email: '',
    giro: '',
    idusuario: '',
  });

  const [vehiculoActual, setVehiculoActual] = useState({
    idUsuario: '',
    usuario: '',
    password: '',
    confirPass: '',
    nombre: '',
    telefonocontacto: '',
    perfil: { idPerfil: 1, perfil: 'admin', }
});

  // estate del viaje inicial
  const [viajeActual, setViajeActual] = useState({
    idempresa: '',
    razonsocial: '',
    direccion: '',
    rfc: '',
    telefono: '',
    email: '',
    giro: '',
    idusuario: '',
  });

  const [viajesUsuario, setViajesUsuario] = useState([]);

const { data: vehiculos, loading: loadingVehiculo } = useFetchVehiculo(vehiculoActual);
const { data: empresasData, loading: loadingEmpresa } = useFetchEmpresas(empresaActual);
const { data: viajeData, loading: loadingViaje } = useFetchViajes(viajeActual);

const empresasFiltradas = empresasData.filter(item => item.razonsocial && item.usuario.idusuario === userAuth.idusuario);

useEffect(() => {
  if (viajeData) {
    const viajesFiltradas = viajeData.filter(item => item.estatus == 'activo' && item.usuario.idusuario === userAuth.idusuario);
    setViajesUsuario(viajesFiltradas)
  }
}, [viajeData, userAuth]);

// console.log(viajesUsuario);

  const [mostrarEmpresa, setMostrarEmpresa] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const onSubmit = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  console.log(selectedOption);

  return (
    <>
      <h1 className="pt-6 px-6 text-5xl font-bold">Sistema de rastreo</h1>
      <div className='container'>
      <div className="row">
          <div className="col-sm-12 col-md-4 p-4">
            <div className="card drop-shadow-md bg-[#FFF]">
              <div className="card-body">
                <div className='text-center'>
                  <i className="pi pi-building " style={{ fontSize: '3rem' }}></i>
                  <br></br>
                  <h1 className='text-3xl'>Empresas</h1>
                </div>
                <div className='col-sm-12 pt-4'>
                  <Formik initialValues={valorInicial} onSubmit={onSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="col">
                          <div className="p-inputgroup flex-1">
                            {
                              !loadingEmpresa ?
                              <Field
                                name='empresas'
                                as={Dropdown}
                                value={values.empresas}
                                onChange={(e)=>{
                                  handleChange(e); 
                                  setSelectedOption(e.value);
                                }}
                                options={empresasFiltradas}
                                optionLabel="razonsocial"
                                filter
                                filterPlaceholder='Buscar por nombre'
                                emptyFilterMessage='Empresa no registrada'
                                placeholder="Selecciona una empresa"
                                className="w-full md:w-14rem"
                                required={true}  
                              /> :
                            <Player src='https://lottie.host/dd2750b1-c089-4c4a-bf24-1dfb2d704326/suCIibC1KW.json'
                              className="player"
                              loop
                              autoplay
                              style={{ height: '50px', width: '50px' }}
                            />
                            }
                            
                            <Button className='bg-[#BE0F34] botones-estilo' icon="pi pi-building" type='button' onClick={() => setMostrarEmpresa(true)} disabled={values.empresas.razonsocial === '' ? true : false} />
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 p-4">
            <div className="card drop-shadow-md bg-[#FFF]">
              <div className="card-body">
                <div className='text-center'>
                  <i className="pi pi-map-marker " style={{ fontSize: '3rem' }}></i>
                  <br></br>
                  <h1 className='text-3xl'>Viajes activos.</h1>
                </div>
                <div className='m-4'>
                  {
                    !loadingViaje ?
                    <TarjeMenuActivas viajesUsuario={viajesUsuario} loadingViaje={loadingViaje}/>
                    :
                    <Player src='https://lottie.host/7d6dd8ce-b89c-4c97-ae7d-8ec9fe1a5f7b/YLQyRUzCfx.json'
                      className="player"
                      loop
                      autoplay
                      style={{ height: '300px', width: '300px' }}
                    />
                  }
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 p-4 bg-[#FFF]">
          <div className="col-sm-12 p-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="pi pi-truck" style={{ fontSize: '3rem' }}></i>
                <br></br>
                <h1 className='text-black text-3xl pb-4'>Disponibilidad de vehículos</h1>
                <div className='container'>
                  <div className='row justify-center'>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle((vehiculos.filter(item => item.tipovehiculo === 'Motocicleta' && item.usuario.idusuario === userAuth.idusuario)))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 hover:border-white border-2 border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {/* {vehiculos.filter(item => item.tipovehiculo === 'Motocicleta' && item.usuario.idusuario === userAuth.idusuario).length} */}
                        </span>
                        <img src="src/assets/iconos_transporte/motorcycle.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Motocicleta</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculos.filter(item => item.tipovehiculo === 'Nissan' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 hover:border-white border-2 border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {/* {vehiculos.filter(item => item.tipovehiculo === 'Nissan' && item.usuario.idusuario === userAuth.idusuario).length} */}
                        </span>
                        <img src="src/assets/iconos_transporte/nissan-estaquita-redilas.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Nissan</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculos.filter(item => item.tipovehiculo === 'Camioneta 3 1/2' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 hover:border-white border-2 border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {/* {vehiculos.filter(item => item.tipovehiculo === 'Camioneta 3 1/2' && item.usuario.idusuario === userAuth.idusuario).length} */}
                        </span>
                        <img src="src/assets/iconos_transporte/dodge-ram.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Camioneta 3 1/2</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculos.filter(item => item.tipovehiculo === 'Torton' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 hover:border-white border-2 border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                          {/* {vehiculos.filter(item => item.tipovehiculo === 'Torton' && item.usuario.idusuario === userAuth.idusuario).length} */}
                        </span>
                        <img src="src/assets/iconos_transporte/torton.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Torton</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculos.filter(item => item.tipovehiculo === 'Rabon' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 hover:border-white border-2 border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {/* {vehiculos.filter(item => item.tipovehiculo === 'Rabon' && item.usuario.idusuario === userAuth.idusuario).length} */}
                        </span>
                        <img src="src/assets/iconos_transporte/rabon.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Rabon</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center cursor-pointer' onClick={() => handleToggle(vehiculos.filter(item => item.tipovehiculo === 'Trailer' && item.usuario.idusuario === userAuth.idusuario))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 hover:border-white border-2 border-red-700 flex items-center justify-center shadow-lg hover:shadow-indigo-500/50 relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border-2 border-white">
                        {/* {vehiculos.filter(item => item.tipovehiculo === 'Trailer' && item.usuario.idusuario === userAuth.idusuario).length} */}
                        </span>
                        <img src="src/assets/iconos_transporte/trailer.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Trailer</span>
                    </div>
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
          </div>
        </div>
      </div>
      <Dialog header="Empresa" visible={mostrarEmpresa} style={{ width: '50vw' }} onHide={() => setMostrarEmpresa(false)}>
        <p className="m-0">
          Empresa: Informacion de la empresa
        </p>
      </Dialog>
    </>
  )
}
