import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

import { SeleccionarUbicacion } from '../components/SeleccionarUbicacion';
import { Dialog } from 'primereact/dialog';
import { InformacionConductor } from '../components/InformacionConductor';

import { useFetchEmpresas } from '../hooks/useFetchEmpresas';
import { useFetchConductor } from '../hooks/useFetchConductores';
import { useFetchVehiculo } from '../hooks/useFetchVehiculos';

import useAuth from '../../hooks/useAuth';
import { Player } from '@lottiefiles/react-lottie-player';

const styleRegistro = {
  width: '85%'
}

const initialValues = {
    empresas: {
      razonsocial: '',
      direccion: '',
      rfc: '',
      telefono: '',
      email: '',
      giro: '',
    },
    conductores: {
      idconductor: '',
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
      fechaexpedicion: '',
      fechavencimiento: '',
      tiposangre: '',
    },
    vehiculos: {
      idveiculo: '',
      tipovehiculo: '',
      marca: '',
      modelo: '',
      placas: '',
      numeroserie: '',
      archivotarjetacirculacion: '',
      Seguro: {
        nombreseguro: '',
        numeropoliza: '',
        telefonoaseguradora: '',
        webaseguradora: '',
        fechaaltaseguro: '',
        fechavencimientoseguro: '',
        archivopolizaseguro: '',
      }
    },
    descripcionviaje: '',
    tiposervicio: '',
    fechasalida: '',
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
  const conductoresFiltrados = conductoresData.filter(item => item.nombrecompleto && item.usuario.idusuario === userAuth.idusuario);
  const vehiculosFiltrados = vehiculosData.filter(item => item.marca && item.usuario.idusuario === userAuth.idusuario);

  const onSubmit = async (values, {resetForm}) => {
    const viajes = {
      empresa: values.empresas,
      conductor: values.conductores,
      vehiculo: values.vehiculos,
      tiposervicio: values.tiposervicio.tipo,
      descripcion: values.descripcionviaje,
      fechasalida: values.fechasalida,
      direccionpartida: values.direccionPartida,
      direccionllegada: values.direccionLlegada,
      latpartida: values.coordenadasPartida.lat,
      lngpartida: values.coordenadasPartida.lng,
      latllegada: values.coordenadasLlegada.lat,
      lngllegada: values.coordenadasLlegada.lng,
      distanciaaprox: values.ruta.routes[0].legs[0].distance.text,
      estatus: 'programado',
      usuario: userAuth
    }

    fetch('http://192.168.0.6:8080/nuevo/viaje', {
          method: 'POST', // O 'PUT' según el tipo de solicitud que desees realizar
          headers: {
            'Content-Type': 'application/json' // Asegúrate de establecer el tipo de contenido adecuado
          },
          body: JSON.stringify(viajes) // Convierte los valores a JSON antes de enviarlos
        })
          .then(response => response.json())
          .then(responseData => {
            // Lógica adicional después de enviar los datos a la API
            // ...
            console.log('Respuesta de la API:', responseData);
          })
          .catch(error => console.log(error));

    // resetForm();
  };

  return (
    <>
    <h1 className="pt-6 px-6 text-5xl font-bold">Nuevo viaje</h1>
      <section className="section_item flex-container py-6" >
        <div className="card form drop-shadow-md bg-[#FFF]" style={styleRegistro}>
          <br />
          <h1 className="card-title card-title card-title pb-4 text-3xl text-[#BE0F34]">
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
                          name='empresas'
                          as={Dropdown}
                          value={values.empresas}
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
                        style={{ height: '50px', width: '50px' }}
                        />
                        }
                    
                        
                        <Button
                          className='bg-[#BE0F34]'
                          icon="pi pi-building" type='button' onClick={() => setMostrarEmpresa(true)} disabled={values.empresas.razonsocial === '' ? true : false} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        {
                          !loadingConductor ?
                          <Field
                          name='conductores'
                          as={Dropdown}
                          value={values.conductores}
                          onChange={(e)=>{
                            handleChange(e); 
                            setConductorSeleccionado(e.value);
                            console.log(e.value)
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
                        style={{ height: '50px', width: '50px' }}
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
                          icon="pi pi-user" type='button' onClick={() => setMostrarConductor(true)} disabled={values.conductores.nombrecompleto === '' ? true : false} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        {
                          !loadingVehiculo ?
                          <Field
                          name='vehiculos'
                          as={Dropdown}
                          value={values.vehiculos}
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
                        style={{ height: '50px', width: '50px' }}
                        />
                        }
                        
                        <Button
                          className='bg-[#BE0F34]'
                          icon="pi pi-car" type='button' onClick={() => setMostrarVehiculo(true)} disabled={values.vehiculos.tipo === '' ? true : false} />

                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="p-inputgroup flex-1">
                        <Field
                          className="bg-[#BE0F34]"
                          name="fechasalida"
                          as={Calendar}
                          value={values.fechasalida}
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
                          name='tiposervicio'
                          as={Dropdown}
                          value={values.tiposervicio}
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
                          name='descripcionviaje'
                          as={InputTextarea}
                          value={values.descripcionviaje}
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