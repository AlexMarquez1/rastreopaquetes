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
      <h1 className="pt-4 text-5xl">Sistema de rastreo</h1>
      <div className='container'>
      <div className="row">
          <div className="col-sm-12 col-md-4 p-4">
            <div className="card" style={styleMenu}>
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
                              className="w-full md:w-14rem"
                              required={true}
                            />
                            <Button className='shadow-indigo-500/50 bg-indigo-500' icon="pi pi-building" type='button' onClick={() => setMostrarEmpresa(true)} disabled={values.viaje.Empresa.rasonSocial === '' ? true : false} />
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
            <div className="card" style={styleMenu}>
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
          <div className="col-sm-12 p-4">
            <div className="card">
              <div className="card-body text-center">
                <i className="pi pi-truck" style={{ fontSize: '3rem' }}></i>
                <br></br>
                <h1 className='text-black text-3xl'>Disponibilidad de vehículos</h1>
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
