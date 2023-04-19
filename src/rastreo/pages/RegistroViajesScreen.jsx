import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { NavBarPrincipal } from '../components/NavBarPrincipal'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

import { SeleccionarUbicacion } from '../components/SeleccionarUbicacion';
import { Dialog } from 'primereact/dialog';
import { InformacionConductor } from '../components/InformacionConductor';
import { addScaleCorrector } from 'framer-motion';

const styleRegistro = {
  width: '85%',
  background: 'rgba(143, 216, 227, 0.316)',
}

const colorTexto = {
  color: 'black',
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
const conductores = [
  {
    idConductor: 'C2',
    foto: 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Sesion%2FUsuarios%2Falondra.santiago%2F7904-alondra.santiago.png?alt=media&token=7904-alondra.santiago.png.png',
    nombreCompleto: 'Alondra Santiago Bernabe',
    edad: '54',
    tipoDeSangre: 'O+',
    numeroContacto: '123456789',
    numeroLicencia: '98736541232',
    tipoLicencia: 'A',
    vigencia: '12/03/26',
    licencia: 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Proyectos%2F66-FIRMAS%2F72-FIRMA%2FEvidencias%2F72-FIRMA?alt=media&token=.pdf',
  },
  {
    idConductor: 'C3',
    foto: 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Sesion%2FUsuarios%2Fc.alejandromarquez%2F5803-c.alejandromarquez.png?alt=media&token=5803-c.alejandromarquez.png.png',
    nombreCompleto: 'Carlos Alejandro Marquez Martinez',
    edad: '76',
    tipoDeSangre: 'A',
    numeroContacto: '123456789',
    numeroLicencia: '98736541232',
    tipoLicencia: 'A',
    vigencia: '12/03/26',
    licencia: 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Proyectos%2F66-FIRMAS%2F72-FIRMA%2FEvidencias%2F72-FIRMA?alt=media&token=.pdf',
  },
  {
    idConductor: 'C4',
    foto: 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Sesion%2FUsuarios%2Fgeovani.rubio%2F4737-geovani.rubio.png?alt=media&token=4737-geovani.rubio.png.png',
    nombreCompleto: 'Geovanni Rubio',
    edad: '64',
    tipoDeSangre: 'A',
    numeroContacto: '123456789',
    numeroLicencia: '98736541232',
    tipoLicencia: 'A',
    vigencia: '12/03/26',
    licencia: 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Proyectos%2F66-FIRMAS%2F72-FIRMA%2FEvidencias%2F72-FIRMA?alt=media&token=.pdf',
  },
  {
    idConductor: 'C5',
    foto: 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Sesion%2FUsuarios%2Fgerardo.felman%2F8552-gerardo.felman.png?alt=media&token=8552-gerardo.felman.png.png',
    nombreCompleto: 'Gerardo Gonzales Felman',
    edad: '32',
    tipoDeSangre: 'A',
    numeroContacto: '123456789',
    numeroLicencia: '98736541232',
    tipoLicencia: 'A',
    vigencia: '12/03/26',
    licencia: '',
  },
];

const initialValues = {
  viaje:{
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
    diaSalida: '',
    direccionPartida: '',
    latPartida: '',
    lngPartida: '',
    direccionLlegada: '',
    latLlegada: '',
    lngLlegada: '',
  }
};

export const RegistroViajesScreen = () => {

  const [loading, setLoading] = useState(false);
  const [mostrarEmpresa, setMostrarEmpresa] = useState(false);
  const [mostrarConductor, setMostrarConductor] = useState(false);
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(undefined);
  const [conductorSeleccionado, setConductorSeleccionado] = useState(undefined);
  const [diaSalida, setDiaSalida] = useState('');

  const registrarViaje = async (e) => {
    e.preventDefault();

  };

  const onSubmit = (values) => {
    console.log(values);
    // resetForm();
  };

  return (
    <>
      <section className="section_item flex-container" >
        <div className="card form" style={styleRegistro}>
          <br />
          <h1 className="card-title">
            <p className="fs-4">Nuevo Viaje</p>
          </h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="container text-center">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        <span className='p-float-label'>
                          <Field
                          name='viaje.Empresa'
                          as= {Dropdown}
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
                          <label className='fs-6' htmlFor="nombre" style={colorTexto}>Empresa</label>
                        </span>
                        <Button icon="pi pi-building" type='button' onClick={() => setMostrarEmpresa(true)} disabled={values.viaje.Empresa.rasonSocial === '' ? true : false} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        <span className='p-float-label'>
                          <Dropdown value={conductorSeleccionado}  onChange={(e) => setConductorSeleccionado(e.value)} options={conductores} optionLabel="nombreCompleto"
                            showClear filter filterPlaceholder='Buscar por nombre' emptyFilterMessage='Conductor no registrado' placeholder="Selecciona una empresa" className="w-full md:w-14rem" />
                          <label className='fs-6' htmlFor="conductor" style={colorTexto}>Conductor</label>
                        </span>
                        <Button icon="pi pi-user" onClick={() => setMostrarConductor(true)} disabled={conductorSeleccionado === undefined ? true : false} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        <span className='p-float-label'>
                          <Calendar inputId='salida' name='salida' showIcon value={diaSalida} onChange={(e) => { setDiaSalida(e.value) }} />
                          <label htmlFor="Dia de salida" style={colorTexto}>Dia de salida</label>
                        </span>
                      </div>
                    </div>
                    <div className="col">
                      <Button label='Registrar'/>
                    </div>
                  </div>

                  <div className="row align-items-center">

                    <div className='col'>
                      <SeleccionarUbicacion />

                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <Dialog header="Empresa" visible={mostrarEmpresa} style={{ width: '50vw' }} onHide={() => setMostrarEmpresa(false)}>
        <p className="m-0">
          Empresa: Nombre de la empresa
        </p>
      </Dialog>
      <Dialog header="Conductor" visible={mostrarConductor} style={{ width: '50vw' }} onHide={() => setMostrarConductor(false)}>
        <InformacionConductor conductorSeleccionado={conductorSeleccionado} />
      </Dialog>
    </>
  )
}