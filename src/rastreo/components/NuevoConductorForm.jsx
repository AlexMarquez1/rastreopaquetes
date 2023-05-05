import { Field, Form, Formik } from 'formik';
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

const NuevoConductorForm = ({toggleNuevoConductorForm}) => {

    const initialValues = {
        idConductor: '',
        nombreCompleto: '',
        fechaNacimiento: '',
        numeroContacto: '',
        curp: '',
        rfc: '',
        usuario: '',
        contrasena: '',
        foto: '',
        direccion : {
            calle: '',
            numeroExterior: '',
            numeroInterior: '',
            codigoPostal: '',
            estado: '',
            delegacion: '',
            municipio: ''
        },
        licenciaConducir: {
            numeroLicencia: '',
            tipoLicencia: '',
            fechaExpedicion: '',
            fechaVencimiento: '',
            tipoDeSangre: '',
            archivoLicencia: '' 
        }  
    };

    const onSubmit = (values) => {
        console.log(values);
        resetForm();
      };
         
  return (
    <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div className='container'>
                    <h2 className='text-start pb-5 text-2xl'>Datos del conductor</h2>
                        <div className='row'>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="nombreCompleto"
                                            onChange={handleChange}
                                            value={values.nombreCompleto}
                                            inputid='nombreCompleto'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-user-edit"></i>
                                        </span>
                                        <label htmlFor="nombreCompleto" className='text-body fs-6'>Nombre completo</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Calendar}
                                            name="fechaNacimiento"
                                            onChange={handleChange}
                                            value={values.fechaNacimiento}
                                            inputid='fechaNacimiento'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-calendar-plus"></i>
                                        </span>
                                        <label htmlFor="fechaNacimiento" className='text-body fs-6'>Fecha de nacimiento</label>
                                    </span>
                                </div>    
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="numeroContacto"
                                    keyfilter="pnum"
                                    maxLength="10"
                                    onChange={handleChange}
                                    value={values.numeroContacto}
                                    inputid='numeroContacto'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-phone"></i>
                                </span>
                                <label htmlFor="numeroContacto" className='text-body fs-6'>Número telefónico</label>
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
                                            value={values.curp}
                                            inputid='curp'
                                            required={true}
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
                                            name="usuario"
                                            onChange={handleChange}
                                            value={values.usuario}
                                            inputid='usuario'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="usuario" className='text-body fs-6'>Usuario</label>
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
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="contrasena" className='text-body fs-6'>Contraseña</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={FileUpload}
                                            mode="basic"
                                            chooseLabel="Subir foto del conductor" 
                                            url="/api/upload" 
                                            accept=".jpg" 
                                            maxFileSize={1000000}
                                            name="foto"
                                            onChange={handleChange}
                                            value={values.foto}
                                            inputid='foto'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-image"></i>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <h2 className='text-start pb-5 text-2xl'>Datos de la dirección del conductor</h2> 
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="direccion.calle"
                                            onChange={handleChange}
                                            value={values.direccion.calle}
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
                                            name="direccion.numeroExterior"
                                            onChange={handleChange}
                                            value={values.direccion.numeroExterior}
                                            inputid='direccion.numeroExterior'
                                            required={true}
                                            keyfilter="pnum"
                                            maxLength="6"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="numeroExterior" className='text-body fs-6'>Número exterior</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="direccion.numeroInterior"
                                            onChange={handleChange}
                                            value={values.direccion.numeroInterior}
                                            inputid='direccion.numeroInterior'
                                            required={true}
                                            keyfilter="pnum"
                                            maxLength="6"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="numeroInterior" className='text-body fs-6'>Número Interior</label>
                                    </span>
                                </div>
                            </div> 
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="direccion.codigoPostal"
                                            onChange={handleChange}
                                            value={values.direccion.codigoPostal}
                                            inputid='direccion.codigoPostal'
                                            required={true}
                                            keyfilter="pnum"
                                            maxLength="5"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="codigoPostal" className='text-body fs-6'>Codigo postal</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Dropdown}
                                            options={estados}
                                            name="direccion.estado"
                                            onChange={handleChange}
                                            value={values.direccion.estado}
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


                            <h2 className='text-start pb-5 text-2xl'>Datos de la licencia de conducir</h2>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="licenciaConducir.numeroLicencia"
                                            onChange={handleChange}
                                            value={values.licenciaConducir.numeroLicencia}
                                            inputid='numeroLicencia'
                                            required={true}
                                            keyfilter="pnum"
                                            maxLength="5"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="numeroLicencia" className='text-body fs-6'>N° de licencia</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={InputText}
                                            name="licenciaConducir.tipoLicencia"
                                            onChange={handleChange}
                                            value={values.licenciaConducir.tipoLicencia}
                                            inputid='tipoLicencia'
                                            required={true}
                                            keyfilter="pnum"
                                            maxLength="5"
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="tipoLicencia" className='text-body fs-6'>Tipo de licencia</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Calendar}
                                            name="licenciaConducir.fechaExpedicion"
                                            onChange={handleChange}
                                            value={values.licenciaConducir.fechaExpedicion}
                                            inputid='fechaExpedicion'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-calendar-plus"></i>
                                        </span>
                                        <label htmlFor="fechaExpedicion" className='text-body fs-6'>Fecha de expedición</label>
                                    </span>
                                </div>    
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Calendar}
                                            name="licenciaConducir.fechaVencimiento"
                                            onChange={handleChange}
                                            value={values.licenciaConducir.fechaVencimiento}
                                            inputid='fechaVencimiento'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-calendar-plus"></i>
                                        </span>
                                        <label htmlFor="fechaVencimiento" className='text-body fs-6'>Fecha de vencimiento</label>
                                    </span>
                                </div>    
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                <div className='p-inputgroup flex-1'>
                                    <span className='p-float-label'>
                                        <Field
                                            as={Dropdown}
                                            options={estados}
                                            name="licenciaConducir.tipoDeSangre"
                                            onChange={handleChange}
                                            value={values.licenciaConducir.tipoDeSangre}
                                            inputid='licenciaConducir.tipoDeSangre'
                                            required={true}
                                        />
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-desktop"></i>
                                        </span>
                                        <label htmlFor="tipoDeSangre" className='text-body fs-6'>Tipo de sangre</label>
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
                                            name="licenciaConducir.archivoLicencia"
                                            onChange={handleChange}
                                            value={values.licenciaConducir.archivoLicencia}
                                            inputid='licenciaConducir.archivoLicencia'
                                            required={true}
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