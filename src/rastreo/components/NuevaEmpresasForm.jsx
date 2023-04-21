import { Field, Form, Formik } from 'formik';
import React from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



const NuevaEmpresasForm = () => {
    const initialValues = {
        razonsocial: '',
        direccion: '',
        rfc: '',
        telefono: '',
        correo: '',
        girodelaempresa: '',
    };

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
                                                    name="correo"
                                                    onChange={handleChange}
                                                    value={values.correo}
                                                    inputid='telefono'
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
                                                    name="girodelaempresa"
                                                    onChange={handleChange}
                                                    value={values.girodelaempresa}
                                                    inputid='girodelaempresa'
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
                           
                            <Button type="submit" label="Submit" className='m-4'/>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default NuevaEmpresasForm





