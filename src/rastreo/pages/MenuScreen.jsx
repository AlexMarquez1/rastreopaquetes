import '../../styles/estilos.css';
import TarjeMenuActivas from '../components/TarjeMenuActivas';
import { Dropdown } from 'primereact/dropdown';
import { Field, Formik, Form } from 'formik';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';

const styleMenu = {
  background: 'rgba(143, 216, 227, 0.316)',
}

const empresas = [
  {
    rasonSocial: 'Empresa 1',
    direccion: '',
    rfc: 'EPLDH213',
    telefono: '',
    correo: '',
    giroEmpresa: '',
  },
  {
    rasonSocial: 'Empresa 2',
    direccion: '',
    rfc: 'DHAIUVDN243',
    telefono: '',
    correo: '',
    giroEmpresa: '',
  },
  {
    rasonSocial: 'Empresa 3',
    direccion: '',
    rfc: 'JHOPAJBW1231',
    telefono: '',
    correo: '',
    giroEmpresa: '',
  },
];

const initialValues = {
  viaje: {
    Empresa: {
      rasonSocial: '',
      direccion: '',
      rfc: '',
      telefono: '',
      correo: '',
      giroEmpresa: '',
    },
    Conductor: {
      idConductor: '',
      nombreCompleto: '',
      edad: '',
      tipoDeSangre: '',
      numeroContacto: '',
      numeroLicencia: '',
      tipoLicencia: '',
      vigencia: '',
      licencia: '',
    },
    Vehiculo: {
      idVeiculo: '',
      tipo: '',
      marca: '',
      modelo: '',
      placas: '',
      numeroSerie: '',
      tarjetaCirculacion: '',
      Seguro: {
        aseguradora: '',
        numeroPolisa: '',
        telefono: '',
        web: '',
        fechaAlta: '',
        fechaVencimiento: '',
        poliza: '',
      }
    },
    descripcionViaje: '',
    tipoServicio: '',
    diaSalida: '',
    direccionPartida: 'hola',
    latPartida: '',
    lngPartida: '',
    direccionLlegada: '',
    latLlegada: '',
    lngLlegada: '',
  }
};

export const MenuScreen = () => {

  const [mostrarEmpresa, setMostrarEmpresa] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="pt-6 px-6 text-5xl font-bold">Sistema de rastreo</h1>
      <div className='container'>
      <div className="row">
          <div className="col-sm-12 col-md-4 py-6 p-4">
            <div className="card drop-shadow-md bg-[#FFF]">
              <div className="card-body">
                <div className='text-center'>
                  <i className="pi  pi-building " style={{ fontSize: '3rem' }}></i>
                  <br></br>
                  <h1 className='text-3xl'>Empresas</h1>
                </div>
                <div className='col-sm-12 pt-4'>
                  <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="col">
                          <div className="p-inputgroup flex-1">
                            <Field
                              name='viaje.Empresa'
                              as={Dropdown}
                              value={values.viaje.Empresa}
                              onChange={handleChange}
                              options={empresas}
                              optionLabel="rasonSocial"
                              filter
                              filterPlaceholder='Buscar por nombre'
                              emptyFilterMessage='Empresa no registrada'
                              placeholder="Selecciona una empresa"
                              className="w-full md:w-14rem p-inputtext"
                              required={true}
                              
                            />
                            <Button className='bg-[#BE0F34] botones-estilo' icon="pi pi-building" type='button' onClick={() => setMostrarEmpresa(true)} disabled={values.viaje.Empresa.rasonSocial === '' ? true : false} />
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
                <div className='pt-5 m-4'>
                  <TarjeMenuActivas/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 p-4 bg-[#FFF]">
            <div className="card drop-shadow-md">
              <div className="card-body text-center">
                <i className="pi pi-truck" style={{ fontSize: '3rem' }}></i>
                <br></br>
                <h1 className='text-black text-3xl'>Disponibilidad de vehículos</h1>
                <div className='container'>
                  <div className='row justify-center'>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">5</span>
                        <img src="src/assets/iconos_transporte/motorcycle.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Motocicleta</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">1</span>
                        <img src="src/assets/iconos_transporte/nissan-estaquita-redilas.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Nissan</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">1</span>
                        <img src="src/assets/iconos_transporte/dodge-ram.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Camioneta 3 1/2</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">1</span>
                        <img src="src/assets/iconos_transporte/torton.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Torton</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">3</span>
                        <img src="src/assets/iconos_transporte/rabon.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Rabon</span>
                    </div>
                    <div className='col-sm-6 col-md-3 col-xl-2 m-3 grid justify-items-center'>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-indigo-500 flex items-center justify-center shadow-lg hover:shadow-indigo-500/50 relative">
                        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full h-5 w-5 flex items-center justify-center shadow-sm border border-white">1</span>
                        <img src="src/assets/iconos_transporte/trailer.png" alt="Descripción de la imagen" className='hover:animate-bounce' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>Trailer</span>
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
