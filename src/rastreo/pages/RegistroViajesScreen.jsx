import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

import { SeleccionarUbicacion } from '../components/SeleccionarUbicacion';
import { Dialog } from 'primereact/dialog';
import { InformacionConductor } from '../components/InformacionConductor';
import { addScaleCorrector } from 'framer-motion';

import { useFetchEmpresas } from '../hooks/useFetchEmpresas';
import { useFetchConductor } from '../hooks/useFetchConductores';

import useAuth from '../../hooks/useAuth';
import { useFetchVehiculo } from '../hooks/useFetchVehiculos';
import { Player } from '@lottiefiles/react-lottie-player';

const styleRegistro = {
  width: '85%'
}

const initialValues = {
  viaje: {
    Empresa: {
      rasonsocial: '',
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

 const [conductorActual, setconductorActual] = useState({
  idConductor: '',
  nombrecompleto: '',
  fechanacimiento: '',
  email: '',
  telefono: '',
  curp: '',
  rfc: '',
  usuarioconductor: '',
  contrasena: '',
  calle: '',
  numeroexterior: '',
  numerointerior: '',
  codigopostal: '',
  estado: '',
  municipio: '',
  numerolicencia: '',
  tipolicencia: '',
  archivolicencia: '',
  fechaexpediciaon: '',
  fechavencimiento: '',
  tiposangre: '',
  foto: '',
  licencia: '',
  identificacion: '',
  idusuario: '',
});

const [vehiculoActual, setVehiculoActual] = useState({
  idvehiculo: '',
  tipovehiculo: '',
  marca: '',
  modelo: '',
  placas: '',
  numeroserie: '',
  nombreseguro: '',
  numeropoliza: '',
  telefonoaseguradora: '',
  webaseguradora: '',
  fechaaltaseguro: '',
  fechavencimientoseguro: '',
  archivotarjetacirculacion: '',
  archivopolizaseguro: '',
});

const { userAuth } = useAuth();

  const { data: empresasData, loading: loadingEmpresa } = useFetchEmpresas(empresaActual);
  const { data: conductoresData, loading: loadingConductor } = useFetchConductor(conductorActual);
  const { data: vehiculosData, loading: loadingVehiculo } = useFetchVehiculo(vehiculoActual);
  
  const empresasFiltradas = empresasData.filter(item => item.razonsocial && item.usuario.idusuario === userAuth.idusuario);
  const conductoresFiltrados = conductoresData.filter(item => item.nombrecompleto && item.us.idusuario === userAuth.idusuario);
  const vehiculosFiltrados = vehiculosData.filter(item => item.marca && item.usuario.idusuario === userAuth.idusuario);

  const onSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
    <h1 className="pt-6 px-6 text-5xl font-bold">Nuevo viaje</h1>
      <section className="section_item flex-container py-6" >
        <div className="card form drop-shadow-md bg-[#FFF]" style={styleRegistro}>
          <br />
          <h1 className="card-title card-title pb-4 card-title pb-4 text-3xl text-[#BE0F34]">
            Registra un nuevo viaje
          </h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="container text-start">
                  <div className="row">
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        {
                          !loadingEmpresa?
                          <Field
                          name='viaje.Empresa'
                          as={Dropdown}
                          value={values.viaje.Empresa}
                          onChange={handleChange}
                          options={empresasFiltradas}
                          optionLabel="razonsocial"
                          filter
                          filterPlaceholder='Buscar por nombre'
                          emptyFilterMessage='Empresa no registrada'
                          placeholder="Selecciona una empresa"
                          className="w-full md:w-14rem"
                        /> :
                        <Player src='https://lottie.host/dd2750b1-c089-4c4a-bf24-1dfb2d704326/suCIibC1KW.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '70px', width: '70px' }}
                        />
                        }
                    
                        
                        <Button
                          className='bg-[#BE0F34]'
                          icon="pi pi-building" type='button' onClick={() => setMostrarEmpresa(true)} disabled={values.viaje.Empresa.rasonSocial === '' ? true : false} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        {
                          !loadingConductor ?
                          <Field
                          name='viaje.Conductor'
                          as={Dropdown}
                          value={values.viaje.Conductor}
                          onChange={(e)=>{
                            console.log(e.value);
                            handleChange(e); 
                            setConductorSeleccionado(e.value);
                          }}
                          options={conductoresFiltrados}
                          optionLabel="nombrecompleto"
                          filter
                          filterPlaceholder='Buscar por nombre'
                          emptyFilterMessage='Conductor no registrado'
                          placeholder="Selecciona un conductor"
                          className="w-full md:w-14rem"
                          required={true}
                        /> : 
                        <Player src='https://lottie.host/dd2750b1-c089-4c4a-bf24-1dfb2d704326/suCIibC1KW.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '70px', width: '70px' }}
                        />
                        }
                        
                          
                       
                        
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
                          className='bg-[#BE0F34]'
                          icon="pi pi-user" type='button' onClick={() => setMostrarConductor(true)} disabled={values.viaje.Conductor.nombreCompleto === '' ? true : false} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        {
                          !loadingVehiculo ?
                          <Field
                          name='viaje.Vehiculo'
                          as={Dropdown}
                          value={values.viaje.Vehiculo}
                          onChange={handleChange}
                          options={vehiculosFiltrados}
                          optionLabel="marca"
                          filter
                          filterPlaceholder='Buscar por tipo'
                          emptyFilterMessage='Vehiculo no registrado'
                          placeholder="Selecciona un vehiculo"
                          className="w-full md:w-14rem"
                          required={true}
                        />
                        : 
                        <Player src='https://lottie.host/dd2750b1-c089-4c4a-bf24-1dfb2d704326/suCIibC1KW.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '70px', width: '70px' }}
                        />
                        }
                        
                        <Button
                          className='bg-[#BE0F34]'
                          icon="pi pi-car" type='button' onClick={() => setMostrarVehiculo(true)} disabled={values.viaje.Vehiculo.tipo === '' ? true : false} />

                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        <Field
                          className="bg-[#BE0F34]"
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
                          className="w-full md:w-14rem "
                          required={true}
                        />
                        <span className="p-inputgroup-addon bg-[#BE0F34] text-white">
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
                    <div className="p-inputgroup flex-1 items-center">
                      <Button type="submit" label='Registrar' className='text-[#BE0F34] m-4'/>
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