import { Field, Form, Formik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import React from 'react'

const NuevoConductorForm = () => {

    const initialValues = {
        idConductor: '',
        nombreCompleto: '',
        fechaNacimiento: '',
        numeroContacto: '',
        curp: '',
        rfc: '',
        direccion : {
            calle: '',
            numeroExterior: '',
            numeroInterior: '',
            codigoPostal: '',
            delegacion: '',
            municipi: ''
        },
        nacionalidad: '',
        tipoDeSangre: '',
        foto: '',
        numeroLicencia: '',
        tipoCafe: '',
        tipoLicencia: '',
        archivoLicencia: '' 
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
                    <h2 className='text-start p-3'>Datos del chofer</h2>
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
                                            <i className="pi pi-truck"></i>
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
                        </div>
                    </div>
                    <Button type="submit" label="Submit" className='m-4'/>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default NuevoConductorForm