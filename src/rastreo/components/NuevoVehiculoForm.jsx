import { Field, Form, Formik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';

const NuevoVehiculoForm = () => {

    const initialValues = {
        tipoVehiculo: '',
        marca: '',
        modelo: '',
        placa: '',
        poliza: '',
        tarjetaDeCirculacion: '',
        numeroserie: '',
        nombreaseguradora: '',
        numeropoliza: '',
        fechaaltaseguro: '',
        fechavencimientoseguro: '',
        horaaltaseguro: '',
        horavencimientoseguro: '',
        telefonoaseguradora: '',
        sitiowebaseguradora: '' 
      };

    const tiposVehiculos = [
        { label: 'Motocicleta', value: 'motocicleta' },
        { label: 'Nissan', value: 'nissan' },
        { label: 'Camioneta 3 1/2', value: 'camioneta' },
        { label: 'Torton', value: 'torton' },
        { label: 'Rabon', value: 'rabon' },
        { label: 'Trailer', value: 'trailer' },
      ];
      
      const onSubmit = (values) => {
        console.log(values);
        resetForm();
      };

  return (
    <>
    <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='container'>
            <h2 className='text-start p-3'>Datos del vehículo</h2>
                <div className='row'>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={Dropdown}
                                    options={tiposVehiculos}
                                    name="tipoVehiculo"
                                    onChange={handleChange}
                                    value={values.tipoVehiculo}
                                    inputid='tipoVehiculo'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-truck"></i>
                                </span>
                                <label htmlFor="tipoVehiculo" className='text-body'>Tipo de vehículo</label>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="marca"
                                    onChange={handleChange}
                                    value={values.marca}
                                    inputid='marca'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-truck"></i>
                                </span>
                                <label htmlFor="marca" className='text-body'>Marca del vehículo</label>
                            </span>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="modelo"
                                    keyfilter="pnum"
                                    maxLength="4"
                                    onChange={handleChange}
                                    value={values.modelo}
                                    inputid='modelo'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-truck"></i>
                                </span>
                                <label htmlFor="modelo" className='text-body'>Modelo del vehículo</label>
                            </span>
                        </div>   
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="placa"
                                    onChange={handleChange}
                                    value={values.placa}
                                    inputid='placa'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-truck"></i>
                                </span>
                                <label htmlFor="placa" className='text-body'>Placas del vehículo</label>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="numeroserie"
                                    keyfilter="pnum"
                                    onChange={handleChange}
                                    value={values.numeroserie}
                                    inputid='numeroserie'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-truck"></i>
                                </span>
                                <label htmlFor="numeroserie" className='text-body'>N° de serie del vehículo</label>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={FileUpload}
                                    mode="basic"
                                    chooseLabel="Subir tarjeta de sirculación" 
                                    url="/api/upload" 
                                    accept=".pdf" 
                                    maxFileSize={1000000}
                                    name="tarjetaDeCirculacion"
                                    onChange={handleChange}
                                    value={values.tarjetaDeCirculacion}
                                    inputid='tarjetaDeCirculacion'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-file-pdf"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <h2 className='text-start p-3'>Datos del seguro</h2>
                <div className='row'>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="nombreaseguradora"
                                    onChange={handleChange}
                                    value={values.nombreaseguradora}
                                    inputid='nombreaseguradora'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-building"></i>
                                </span>
                                <label htmlFor="nombreaseguradora" className='text-body'>Nombre de la aseguradora</label>
                            </span>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="numeropoliza"
                                    keyfilter="pnum"
                                    onChange={handleChange}
                                    value={values.numeropoliza}
                                    inputid='numeropoliza'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-building"></i>
                                </span>
                                <label htmlFor="numeropoliza" className='text-body'>N° de póliza de seguro</label>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="telefonoaseguradora"
                                    keyfilter="pnum"
                                    onChange={handleChange}
                                    value={values.telefonoaseguradora}
                                    inputid='telefonoaseguradora'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-phone"></i>
                                </span>
                                <label htmlFor="telefonoaseguradora" className='text-body'>N° de telefono de aseguradora</label>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={InputText}
                                    name="sitiowebaseguradora"
                                    onChange={handleChange}
                                    value={values.sitiowebaseguradora}
                                    inputid='sitiowebaseguradora'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-globe"></i>
                                </span>
                                <label htmlFor="sitiowebaseguradora" className='text-body'>Sitio web de la aseguradora</label>
                            </span>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={Calendar}
                                    name="fechaaltaseguro"
                                    onChange={handleChange}
                                    value={values.fechaaltaseguro}
                                    inputid='fechaaltaseguro'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-calendar-plus"></i>
                                </span>
                                <label htmlFor="fechaaltaseguro" className='text-body'>Fecha de alta del seguro</label>
                            </span>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={Calendar}
                                    name="fechavencimientoseguro"
                                    onChange={handleChange}
                                    value={values.fechavencimientoseguro}
                                    inputid='fechavencimientoseguro'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-calendar-plus"></i>
                                </span>
                                <label htmlFor="fechavencimientoseguro" className='text-body'>Fecha de vencimiento del seguro</label>
                            </span>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={FileUpload}
                                    mode="basic"
                                    chooseLabel="Subir póliza de seguro" 
                                    url="/api/upload" 
                                    accept=".pdf" 
                                    maxFileSize={1000000}
                                    name="poliza"
                                    onChange={handleChange}
                                    value={values.poliza}
                                    inputid='poliza'
                                    required={true}
                                />
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-file-pdf"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>     
            </div>
            <Button type="submit" label="Submit" className='m-4'/>
          </Form>
        )}
      </Formik>
    </div>
        
    </>
  )
}

export default NuevoVehiculoForm