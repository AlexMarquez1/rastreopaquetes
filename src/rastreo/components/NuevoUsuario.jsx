import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import React, { useState } from 'react'
import { Mensaje } from './Mensaje';

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

export const NuevoUsuario = () => {

    const [nuevoUsuario, setNuevoUsuario] = useState({
        idUsuario: 0,
        usuario: '',
        password: '',
        confirPass: '',
        nombre: '',
        telefonoContacto: '',
        perfil: { idPerfil: 0, perfil: '', }
    });
    const [mensaje, setMensaje] = useState({
        header: '',
        contenido: '',
        visible: false,
    });

    const [loading, setLoading] = useState(false);
    const registrarUsuario = (e) => {
        e.preventDefault();
        setLoading(true);
        // setMensaje({
        //     header: 'Nuevo mensaje',
        //     contenido:'Este es el contenido del mensaje',
        //     visible: true,
        // });
        if (nuevoUsuario.password != nuevoUsuario.confirPass) {
            setMensaje({
                header: 'Error',
                contenido: 'La contraseña que estas ingresando no coincide, favor de confirmar que este correcta',
                visible: true,
            });
            return;
        }
        setMensaje({
            header: 'Correcto',
            contenido: 'Se registro el usuario',
            visible: true,
        });
        console.log('Fuera del if');
    };

    return (
        <>
            <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
                <div className="card form" style={styleRegistro}>
                    <br />
                    <h1 className="card-title">
                        <p className="fs-4">Datos del Registro para Usuarios</p>
                    </h1>
                    <br />
                    <form onSubmit={registrarUsuario}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <InputText required={true} inputid='nombre' value={nuevoUsuario.nombre} name='nombre' onChange={(e) => { setNuevoUsuario(old => ({ ...old, nombre: e.target.value })) }} />
                                            <label htmlFor="nombre">Nombre</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <InputText required={true} inputid='telefono' value={nuevoUsuario.telefonoContacto} name='telefonoContacto' onChange={(e) => { setNuevoUsuario(old => ({ ...old, telefonoContacto: e.target.value })) }} />
                                            <label htmlFor="telefono">Telefono</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <InputText required={true} inputid='usuario' value={nuevoUsuario.usuario} name='usuario' onChange={(e) => { setNuevoUsuario(old => ({ ...old, usuario: e.target.value })) }} />
                                            <label htmlFor="usuario">Usuario</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <Password required={true} toggleMask inputid='passwor' value={nuevoUsuario.password} name='password' onChange={(e) => { setNuevoUsuario(old => ({ ...old, password: e.target.value })) }} />
                                            <label htmlFor="passwor">Contraseña</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <Password required={true} toggleMask inputid='confirpass' value={nuevoUsuario.confirPass} name='confirmpass' onChange={(e) => { setNuevoUsuario(old => ({ ...old, confirPass: e.target.value })) }} />
                                            <label htmlFor="confirpass">Confirmar Contraseña</label>
                                        </span>
                                    </div>
                                </div>
                                <div className='col'>
                                    <br />
                                    <Button type="submit" loading={loading} className="btn btn-danger" label='Regristrar'/>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Mensaje header={mensaje.header} contenido={mensaje.contenido} setMensaje={setMensaje} visible={mensaje.visible} />
        </>

    )
}
