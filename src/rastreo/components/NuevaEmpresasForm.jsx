import { Field, Form, Formik } from 'formik';
import React from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import useAuth from '../../hooks/useAuth';

const NuevaEmpresasForm = ({setEmpresaActual}) => {

    const { userAuth } = useAuth();

    const usuario = userAuth;
   
    const initialValues = {
        idempresa: '',
        razonsocial: '',
        direccion: '',
        rfc: '',
        telefono: '',
        email: '',
        giro: '',
    };

    const onSubmit = (values, { resetForm }) => {
        const empresa = {...values, usuario}
        console.log(empresa)
        fetch('http://192.168.0.191:8080/nueva/empresa', {
          method: 'POST', // O 'PUT' según el tipo de solicitud que desees realizar
          headers: {
            'Content-Type': 'application/json' // Asegúrate de establecer el tipo de contenido adecuado
          },
          body: JSON.stringify(empresa) // Convierte los valores a JSON antes de enviarlos
        })
          .then(response => response.json())
          .then(responseData => {
            // Lógica adicional después de enviar los datos a la API
            // ...
            console.log('Respuesta de la API:', responseData);
          })
          .catch(error => console.log(error));
      
        resetForm();

        setEmpresaActual(values);
      };      

    return (
        <>
            <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className='container'>
                                <div className='row'>
                                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                        <div className='p-inputgroup flex-1'>
                                            <span className='p-float-label'>
                                                <Field
                                                    as={InputText}
                                                    name="razonsocial"
                                                    onChange={handleChange}
                                                    value={values.razonsocial}
                                                    inputid='razonsocial'
                                                    required={true}
                                                />
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-building"></i>
                                                </span>
                                                <label htmlFor="razonsocial" className='text-body'>Razon social de la empresa</label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                        <div className='p-inputgroup flex-1'>
                                            <span className='p-float-label'>
                                                <Field
                                                    as={InputText}
                                                    name="direccion"
                                                    onChange={handleChange}
                                                    value={values.direccion}
                                                    inputid='direccion'
                                                    required={true}
                                                />
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-building"></i>
                                                </span>
                                                <label htmlFor="direccion" className='text-body'>Dirección</label>
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
                                                    <i className="pi pi-building"></i>
                                                </span>
                                                <label htmlFor="rfc" className='text-body'>RFC</label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                        <div className='p-inputgroup flex-1'>
                                            <span className='p-float-label'>
                                                <Field
                                                    as={InputText}
                                                    name="telefono"
                                                    onChange={handleChange}
                                                    value={values.telefono}
                                                    inputid='telefono'
                                                    required={true}
                                                />
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-building"></i>
                                                </span>
                                                <label htmlFor="telefono" className='text-body'>Telefono</label>
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
                                                    <i className="pi pi-building"></i>
                                                </span>
                                                <label htmlFor="correo" className='text-body'>Correo</label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-xl-4 pb-5">
                                        <div className='p-inputgroup flex-1'>
                                            <span className='p-float-label'>
                                                <Field
                                                    as={InputText}
                                                    name="giro"
                                                    onChange={handleChange}
                                                    value={values.giro}
                                                    inputid='giro'
                                                    required={true}
                                                />
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-building"></i>
                                                </span>
                                                <label htmlFor="girodelaempresa" className='text-body'>Giro de la empresa</label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <Button type="submit" label="Registrar" className='text-[#BE0F34] m-4'/>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default NuevaEmpresasForm





