import { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import '../../styles/estilos.css'
import { getValidation } from '../../helpers/getUsers';
import { api } from "../../helpers/VariablesGlobales";
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
    const navigate = useNavigate();
    // const [nuevoUsuario, setNuevoUsuario] = useState({
    //     idUsuario: 0,
    //     usuario: '',
    //     password: '',
    //     nombre: '',
    //     telefonoContacto: '',
    //     perfil: { idPerfil: 0, perfil: '', }
    // });
    const [inputUsuario, setInputUsuario] = useState('');
    const [inputPass, setInputPass] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState(false);

    const onInputUserChange = ({ target }) => {
        setInputUsuario(target.value);
    }

    const onInputPassChange = ({ target }) => {
        setInputPass(target.value);
    }

    const ingresar = () => {
        setLoading(true);
        const nuevoUsuario = {
            idUsuario: 0,
            usuario: inputUsuario,
            password: inputPass,
            nombre: '',
            telefonoContacto: '',
            perfil: { idPerfil: 0, perfil: '', }
        }
        getValidation(api, nuevoUsuario).then((respuesta) => {
            if(respuesta !== undefined){
                navigate('/menu');
            }else{
                setMensaje(true);
            }
            setLoading(false);
        });
    }


    return (
        <>
            <div className='fondo2'>
                <section className="section_item flex-container ">
                    <div className="card form" style={{ width: '30rem', background: 'rgba(244, 145, 53, 0.045)', marginTop: '10%' }}>

                        <h1 className="card-title">Inicia Sesión</h1>
                        <div className="card-body w-75 p-3" style={{ marginLeft: '12%' }}>
                            <div className="mb-3">
                                <div className="p-inputgroup flex-1">
                                    <span className='p-float-label'>
                                        <InputText inputid='usuario' value={inputUsuario} onChange={onInputUserChange} />
                                        <label htmlFor="usuario">Usuario</label>
                                    </span>
                                </div>
                                <br />
                                <div className="p-inputgroup flex-1">
                                    <span className='p-float-label'>
                                        <Password inputid='password' feedback={false} toggleMask value={inputPass} onChange={onInputPassChange}/>
                                        <label htmlFor="password">Contraseña</label>
                                    </span>
                                </div>
                                <br />
                                {/* <p className="card-title texto">¿Olvidaste tu contraseña?</p> */}

                            </div>
                                <Button label='INGRESAR' loading={loading} onClick={ingresar} style={{backgroundColor:  'rgb(244 53 53)', borderColor: 'rgb(255 0 0)'}} />
                        </div>
                    </div>
                </section>
            </div>

            <Dialog header="Error" visible={mensaje} style={{ width: '50vw' }} onHide={() => setMensaje(false)}>
                <p className="m-0">
                   Usuario o contraseña incorrectos
                </p>
            </Dialog>
        </>


    )
}
