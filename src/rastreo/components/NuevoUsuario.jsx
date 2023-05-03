import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import React, {useState } from 'react'
import { registrarNuevoUsuario } from '../../helpers/getUsers';
import { api } from "../../helpers/VariablesGlobales";
import { Mensaje } from './Mensaje';

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

export const NuevoUsuario = ({usuarioActual, setUsuarioActual}) => {

    const [nuevoUsuario, setNuevoUsuario] = useState(usuarioActual);
    const [mensaje, setMensaje] = useState({
        header: '',
        contenido: '',
        visible: false,
    });
    const handleInputChange = (event) => {
        setNuevoUsuario({
            ...nuevoUsuario,
            [event.target.name] : event.target.value
        })
    };

    const [loading, setLoading] = useState(false);
    const registrarUsuario = async (e) => {
        e.preventDefault();
        setLoading(true);
        // setMensaje({
        //     header: 'Nuevo mensaje',
        //     contenido:'Este es el contenido del mensaje',
        //     visible: true,
        // });
        if (nuevoUsuario.contrasena != nuevoUsuario.confirPass) {
            setMensaje({
                header: 'Error',
                contenido: 'La contraseña que estas ingresando no coincide, favor de confirmar que este correcta',
                visible: true,
            });
            return;
        }
        registrarNuevoUsuario(api,nuevoUsuario).then(respuesta=>{
            console.log('obtenido: ', respuesta);
            setLoading(false);
            if(respuesta === 'Usuario existente'){
                setMensaje({
                    header: 'Usuario existente',
                    contenido: 'El usuario que estas intentando guardar ya se encuentra registrado',
                    visible: true,
                });        
            }
            if(respuesta === 'Nombre de usuario existente'){
                setMensaje({
                    header: 'Nombre existente',
                    contenido: 'El nombre que estas intentando guardar ya se encuentra registrado',
                    visible: true,
                });   
            }
            if(respuesta === 'usuario guardado'){
                e.target.reset();
                setNuevoUsuario({
                    idUsuario: '',
                    usuario: '',
                    contrasena: '',
                    confirPass: '',
                    nombre: '',
                    telefono: '',
                    perfil: '',
                });
                setUsuarioActual(nuevoUsuario);
            }
        });
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
                                            <InputText required={true} inputid='nombre' value={nuevoUsuario.nombre} name='nombre' onChange={handleInputChange} />
                                            <label htmlFor="nombre">Nombre</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <InputText required={true} inputid='telefono' value={nuevoUsuario.telefono} name='telefono' onChange={handleInputChange} />
                                            <label htmlFor="telefono">Telefono</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <InputText required={true} inputid='usuario' value={nuevoUsuario.usuario} name='usuario' onChange={handleInputChange} />
                                            <label htmlFor="usuario">Usuario</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <Password required={true} toggleMask inputid='contrasena' value={nuevoUsuario.contrasena} name='contrasena' onChange={handleInputChange} />
                                            <label htmlFor="contrasena">Contraseña</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-inputgroup flex-1">
                                        <span className='p-float-label'>
                                            <Password required={true} toggleMask inputid='confirPass' value={nuevoUsuario.confirPass} name='confirPass' onChange={handleInputChange} />
                                            <label htmlFor="confirPass">Confirmar Contraseña</label>
                                        </span>
                                    </div>
                                </div>
                                <div className='col'>
                                    <br />
                                    <Button type="submit" loading={loading} className="btn btn-danger bg-indigo-500" label='Regristrar'/>

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




