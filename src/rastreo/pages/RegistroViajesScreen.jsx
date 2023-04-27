import React, { useState } from 'react'
import { Field, Form, Formik, useField } from 'formik';
import { NavBarPrincipal } from '../components/NavBarPrincipal'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

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

const vehiculos = [
  {
    idVeiculo: '',
    tipo: 'Motocicleta',
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
  {
    idVeiculo: '',
    tipo: 'Camion',
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
  }
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
    direccionPartida: '',
    coordenadasPartida: {
      lat: 0,
      lng: 0,
    },
    direccionLlegada: '',
    coordenadasLlegada: {
      lat: 0,
      lng: 0,
    },
    ruta: null
  }
};

export const RegistroViajesScreen = () => {

  const [loading, setLoading] = useState(false);
  const [mostrarEmpresa, setMostrarEmpresa] = useState(false);
  const [mostrarConductor, setMostrarConductor] = useState(false);
  const [mostrarVehiculo, setMostrarVehiculo] = useState(false);
  const [conductorSeleccionado, setConductorSeleccionado] = useState({
    idConductor: '',
    nombreCompleto: '',
    edad: '',
    tipoDeSangre: '',
    numeroContacto: '',
    numeroLicencia: '',
    tipoLicencia: '',
    vigencia: '',
    licencia: '',
  });
  // const [fieldConductor, metaConductor, helpersConductor] = useField('Conductor');
  // const { value: valueConductor } = metaConductor;
  // const { setValue: setValueConductor } = helpersConductor;

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
                <div className="container text-start">
                  <div className="row">
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
                        <Button
                          className='bg-indigo-500'
                          icon="pi pi-building" type='button' onClick={() => setMostrarEmpresa(true)} disabled={values.viaje.Empresa.rasonSocial === '' ? true : false} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        <Field
                          name='viaje.Conductor'
                          as={Dropdown}
                          value={values.viaje.Conductor}
                          onChange={(e)=>{
                            console.log(e.value);
                            handleChange(e); 
                            setConductorSeleccionado(e.value);
                          }}
                          options={conductores}
                          optionLabel="nombreCompleto"
                          filter
                          filterPlaceholder='Buscar por nombre'
                          emptyFilterMessage='Conductor no registrado'
                          placeholder="Selecciona un conductor"
                          className="w-full md:w-14rem"
                          required={true}
                        />
                        {/* <Dropdown 
                          value={valueConductor}
                          onChange={(e)=>{ setValueConductor(e.target.value)}}
                          options={conductores}
                          optionLabel="nombreCompleto"
                          filter
                          filterPlaceholder='Buscar por nombre'
                          emptyFilterMessage='Conductor no registrado'
                          placeholder="Selecciona un conductor"
                          className="w-full md:w-14rem" /> */}
                        <Button
                          className='bg-indigo-500'
                          icon="pi pi-user" type='button' onClick={() => setMostrarConductor(true)} disabled={values.viaje.Conductor.nombreCompleto === '' ? true : false} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-inputgroup flex-1">

                        <Field
                          name='viaje.Vehiculo'
                          as={Dropdown}
                          value={values.viaje.Vehiculo}
                          onChange={handleChange}
                          options={vehiculos}
                          optionLabel="tipo"
                          filter
                          filterPlaceholder='Buscar por tipo'
                          emptyFilterMessage='Vehiculo no registrado'
                          placeholder="Selecciona un vehiculo"
                          className="w-full md:w-14rem"
                          required={true}
                        />
                        <Button
                          className='bg-indigo-500'
                          icon="pi pi-car" type='button' onClick={() => setMostrarVehiculo(true)} disabled={values.viaje.Vehiculo.tipo === '' ? true : false} />

                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        <Field
                          className="bg-indigo-500"
                          name="viaje.diaSalida"
                          as={Calendar}
                          value={values.viaje.diaSalida}
                          onChange={handleChange}
                          inputId='salida'
                          showIcon
                          placeholder="Fecha de salida"
                          dateFormat='dd/mm/yy'
                        />
                      </div>
                    </div>
                    <div className='col'>
                      <div className="p-inputgroup flex-1">
                        <Field
                          name='viaje.tipoServicio'
                          as={Dropdown}
                          value={values.viaje.tipoServicio}
                          onChange={handleChange}
                          options={[{ tipo: 'Consolidado', codigo: 'CONS' }, { tipo: 'Completo', codigo: 'COM' }]}
                          optionLabel="tipo"
                          placeholder="Selecciona un tipo de servicio"
                          className="w-full md:w-14rem"
                          required={true}
                        />
                        <span className="p-inputgroup-addon">
                          <i className="pi pi-truck"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                  <div className='col'>
                      <div className="p-inputgroup flex-1">
                      <Field
                          name='viaje.descripcionViaje'
                          as={InputTextarea}
                          value={values.viaje.descripcionViaje}
                          onChange={handleChange}
                          placeholder="Ingresa una descripcion breve del viaje a realizar"
                          className="w-full md:w-14rem"
                          required={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-center">
                    <div className='col'>
                      <div className="p-inputgroup flex-1">
                        <SeleccionarUbicacion initialValue={initialValues} />
                      </div>

                    </div>
                  </div>
                  <div className="row">
                    <div className='col'>
                      <div className="p-inputgroup flex-1">
                        <Button label='Registrar'/>
                      </div>

                    </div>
                  </div>
                </div>
                <Dialog header="Empresa" visible={mostrarEmpresa} style={{ width: '50vw' }} onHide={() => setMostrarEmpresa(false)}>
                  <p className="m-0">
                    Empresa: Informacion de la empresa
                  </p>
                </Dialog>
                <Dialog header="Vehiculo" visible={mostrarVehiculo} style={{ width: '50vw' }} onHide={() => setMostrarVehiculo(false)}>
                  <p className="m-0">
                    Vehiculo: Informacion del vehiculo
                  </p>
                </Dialog>
                <Dialog header="Conductor" visible={mostrarConductor} style={{ width: '50vw' }} onHide={() => setMostrarConductor(false)}>
                  <InformacionConductor conductorSeleccionado={conductorSeleccionado} />
                </Dialog>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  )
}