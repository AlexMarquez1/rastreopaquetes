import { Field, Form, Formik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import React, { useState } from 'react'

const NuevoVehiculoForm = () => {

    const initialValues = {
        tipoVehiculo: '',
        marca: '',
        modelo: '',
        placa: '',
        polisa: '',
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
      };

  return (
    <>
    <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='container'>
                <div className='row'>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-4">
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
                                <label htmlFor="tipoVehiculo">Tipo de vehículo</label>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-4">
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
                                    <i className="pi pi-building"></i>
                                </span>
                                <label htmlFor="marca">Marca del vehículo</label>
                            </span>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-4">
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
                                <label htmlFor="modelo">Modelo del vehículo</label>
                            </span>
                        </div>   
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-4">
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
                                <label htmlFor="placa">Placas del vehículo</label>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-4 pb-4">
                        <div className='p-inputgroup flex-1'>
                            <span className='p-float-label'>
                                <Field
                                    as={FileUpload}
                                    mode="basic"
                                    chooseLabel="Subir polisa de seguro" 
                                    url="/api/upload" 
                                    accept=".pdf" 
                                    maxFileSize={1000000}
                                    name="polisa"
                                    onChange={handleChange}
                                    value={values.polisa}
                                    inputid='polisa'
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
            
            
            <Button type="submit" label="Submit" />
          </Form>
        )}
      </Formik>
    </div>
        
    </>
  )
}

export default NuevoVehiculoForm