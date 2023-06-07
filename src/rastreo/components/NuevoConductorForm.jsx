import { Field, Form, Formik, useFormik  } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { estados } from '../data/arregloEstados';
import { registrarNuevoConductor } from '../helpers/getConductores';
import { api } from "../../helpers/VariablesGlobales";
import { municipiosPorEstado } from '../data/arregloEstados';
import React, { useState } from 'react'

import useAuth from '../../hooks/useAuth';

export const tiposSangre = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" }
  ];

export const tiposLicencia = [
  { label: "A (Motocicletas y triciclos)", value: "A" },
  { label: "B (Automóviles, pick ups, y vans de hasta 3.5 toneladas)", value: "B" },
  { label: "C (Vehículos de carga de más de 3.5 toneladas)", value: "C" },
  { label: "D (Autobuses)", value: "D" },
  { label: "E (Maquinaria pesada)", value: "E" },
  { label: "F (Taxis)", value: "F" },
  { label: "G (Vehículos de emergencia)", value: "G" },
  { label: "H (Remolques y semirremolques)", value: "H" }
];
  

const NuevoConductorForm = ({toggleNuevoConductorForm, data, setconductorActual}) => {

    const { userAuth } = useAuth();
    const usuario = userAuth;

    const initialValues = {
        nombrecompleto: '',
        fechanacimiento: '',
        email: '',
        telefono: '',
        curp: '',
        rfc: '',
        usuarioconductor: '',
        contrasena: '',
        foto: '',
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
        identificacion: '', 
    };

      const onSubmit = (values, { resetForm }) => {
        const conductor = {...values, usuario}

        fetch('http://192.168.0.191:8080/nuevo/conductor', {
          method: 'POST', // O 'PUT' según el tipo de solicitud que desees realizar
          headers: {
            'Content-Type': 'application/json' // Asegúrate de establecer el tipo de contenido adecuado
          },
          body: JSON.stringify(conductor) // Convierte los valores a JSON antes de enviarlos
        })
          .then(response => response.json())
          .then(responseData => {
            // Lógica adicional después de enviar los datos a la API
            // ...
            console.log('Respuesta de la API:', responseData);
          })
          .catch(error => console.log(error));
      
        resetForm();

        setconductorActual(values);
      }; 
         
  return (
    <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div className='container'>
                    <h2 className='text-start pb-5 text-2xl font-bold'>Datos del conductor</h2>
                        <div className='row'>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="nombrecompleto"
                                            onChange={handleChange}
                                            value={values.nombrecompleto}
                                            inputid='nombrecompleto'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-user-edit"></i>
                                        </span>
                                        <label htmlFor="nombrecompleto" className='text-body fs-6'>Nombre completo</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Calendar}
                                            name="fechanacimiento"
                                            onChange={handleChange}
                                            value={values.fechanacimiento}
                                            inputid='fechanacimiento'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-calendar-plus"></i>
                                        </span>
                                        <label htmlFor="fechanacimiento" className='text-body fs-6'>Fecha de nacimiento</label>
                                    </span>
                                </div>    
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="telefono"
                                    keyfilter="pnum"
                                    maxLength="10"
                                    onChange={handleChange}
                                    value={values.telefono}
                                    inputid='telefono'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-phone"></i>
                                </span>
                                <label htmlFor="telefono" className='text-body fs-6'>Número telefónico</label>
                            </span>
                        </div> 
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="curp"
                                            onChange={handleChange}
                                            onInput={(e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                              }}
                                            value={values.curp}
                                            inputid='curp'
                                            required={true}
                                            style={{ textTransform: 'uppercase' }}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="curp" className='text-body fs-6'>CURP</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="rfc"
                                            onChange={handleChange}
                                            onInput={(e) => {
                                                e.target.value = e.target.value.toUpperCase();
                                              }}
                                            value={values.rfc}
                                            inputid='rfc'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="rfc" className='text-body fs-6'>RFC</label>
                                    </span>
                                </div>
                            </div> 
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="email"
                                            onChange={handleChange}
                                            value={values.email}
                                            inputid='email'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-at"></i>
                                        </span>
                                        <label htmlFor="email" className='text-body fs-6'>E-mail</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="usuarioconductor"
                                            onChange={handleChange}
                                            value={values.usuarioconductor}
                                            inputid='usuarioconductor'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-user"></i>
                                        </span>
                                        <label htmlFor="usuarioconductor" className='text-body fs-6'>Usuario</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Password}
                                            name="contrasena"
                                            onChange={handleChange}
                                            value={values.contrasena}
                                            inputid='contrasena'
                                            required={true}
                                            toggleMask
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-lock"></i>
                                        </span>
                                        <label htmlFor="contrasena" className='text-body fs-6'>Contraseña</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <FileUpload
                                            as={FileUpload}
                                            mode="basic"
                                            chooseLabel="Subir foto del conductor"
                                            customUpload={true}
                                            auto={true}
                                            accept=".jpg" 
                                            maxFileSize={1000000}
                                            required={true}
                                            uploadHandler={({files}) => {
                                                console.log(files)
                                                const [file] = files;
                                                const fileReader = new FileReader();
                                                fileReader.onload= (e) => {
                                                    console.log(e.target.result);
                                                }
                                                fileReader.readAsDataURL(file);
                                            }}
                                           
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-image"></i>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <h2 className='text-start pb-5 text-2xl font-bold'>Datos de la dirección del conductor</h2> 
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="calle"
                                            onChange={handleChange}
                                            value={values.calle}
                                            inputid='direccion.calle'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="calle" className='text-body fs-6'>Calle</label>
                                    </span>
                                </div>
                            </div> 
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="numeroexterior"
                                            onChange={handleChange}
                                            value={values.numeroexterior}
                                            inputid='direccion.numeroexterior'
                                            required={true}
                                            keyfilter="pnum"
                                            maxLength="6"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="numeroexterior" className='text-body fs-6'>Número exterior</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="numerointerior"
                                            onChange={handleChange}
                                            value={values.numerointerior}
                                            inputid='direccion.numerointerior'
                                            keyfilter="pnum"
                                            maxLength="6"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="numerointerior" className='text-body fs-6'>Número Interior</label>
                                    </span>
                                </div>
                            </div> 
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="codigopostal"
                                            onChange={handleChange}
                                            value={values.codigopostal}
                                            inputid='direccion.codigopostal'
                                            required={true}
                                            keyfilter="pnum"
                                            maxLength="5"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="codigopostal" className='text-body fs-6'>Codigo postal</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Dropdown}
                                            options={estados}
                                            name="estado"
                                            onChange={handleChange}
                                            value={values.estado}
                                            inputid='direccion.estado'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="estado" className='text-body fs-6'>Estado</label>
                                    </span>
                                </div>
                            </div>
                            {/* <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Dropdown}
                                            options={values.municipio}
                                            name="direccion.municipio"
                                            onChange={(e) => {
                                                handleChange(e);
                                                onEstadoChange(e);
                                              }}
                                            value={values.direccion.municipio}
                                            inputid='direccion.municipio'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="municipio" className='text-body fs-6'>Estado</label>
                                    </span>
                                </div>
                            </div> */}


                            <h2 className='text-start pb-5 text-2xl font-bold'>Datos de la licencia de conducir</h2>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="numerolicencia"
                                            onChange={handleChange}
                                            value={values.numerolicencia}
                                            inputid='numerolicencia'
                                            required={true}
                                            keyfilter="pnum"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="numerolicencia" className='text-body fs-6'>N° de licencia</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Dropdown}
                                            name="tipolicencia"
                                            onChange={handleChange}
                                            value={values.tipolicencia}
                                            inputid='tipolicencia'
                                            options={tiposLicencia}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="tipolicencia" className='text-body fs-6'>Tipo de licencia</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Calendar}
                                            name="fechaexpedicion"
                                            onChange={handleChange}
                                            value={values.fechaexpedicion}
                                            inputid='fechaexpedicion'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-calendar-plus"></i>
                                        </span>
                                        <label htmlFor="fechaexpedicion" className='text-body fs-6'>Fecha de expedición</label>
                                    </span>
                                </div>    
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Calendar}
                                            name="fechavencimiento"
                                            onChange={handleChange}
                                            value={values.fechavencimiento}
                                            inputid='fechavencimiento'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-calendar-plus"></i>
                                        </span>
                                        <label htmlFor="fechavencimiento" className='text-body fs-6'>Fecha de vencimiento</label>
                                    </span>
                                </div>    
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Dropdown}
                                            options={tiposSangre}
                                            name="tiposangre"
                                            onChange={handleChange}
                                            value={values.tiposangre}
                                            inputid='licenciaConducir.tiposangre'
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="tiposangre" className='text-body fs-6'>Tipo de sangre</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={FileUpload}
                                            mode="basic"
                                            chooseLabel="Subir licencia de conducir" 
                                            url="/api/upload" 
                                            accept=".pdf" 
                                            maxFileSize={1000000}
                                            name="licenciaConducir.archivolicencia"
                                            onChange={handleChange}
                                            value={values.archivolicencia}
                                            inputid='licenciaConducir.archivolicencia'
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-image"></i>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <Button type="submit" label="Registrar" className='text-[#BE0F34] m-4' onClick={toggleNuevoConductorForm}/>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default NuevoConductorForm