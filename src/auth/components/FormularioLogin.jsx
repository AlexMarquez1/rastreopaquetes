import { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import '../../styles/estilos.css'
import { getValidation } from '../../helpers/getUsers';
import { api } from "../../helpers/VariablesGlobales";
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import { Player } from '@lottiefiles/react-lottie-player';

export const FormularioLogin = () => {
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

    const { userAuth, setUserAuth } = useAuth();

    const onInputUserChange = ({ target }) => {
        setInputUsuario(target.value);
    }

    const onInputPassChange = ({ target }) => {
        setInputPass(target.value);
    }

    const ingresar = () => {

        localStorage.setItem("token", "true");

        setLoading(true);
        const nuevoUsuario = {
            usuario: inputUsuario,
            contrasena: inputPass,
        }
        getValidation(api, nuevoUsuario).then((respuesta) => {
            if(respuesta !== undefined){
                navigate('/menu');
            }else{
                setMensaje(true);
            }
            setLoading(false);
            
            setUserAuth(respuesta);
            
        });
    }

    
    return (
        <>
    
    <div className="col-sm-12 col-md-8 p-4">
        <div className="card form card m-2 mb-6 drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
            <div className="card-body">
                <div className='text-center'>
                    <h1 className="card-title pb-4 card-title text-3xl text-[#BE0F34]">Inicia Sesión</h1>
                    <Player src='https://assets3.lottiefiles.com/packages/lf20_u8yeomaa.json'
        className="player"
        loop
        autoplay
        style={{ height: '150px', width: '150px' }}
      />
                    <div className="p-inputgroup flex-1 pb-6">
                        <span className='p-float-label'>
                            <InputText inputid='usuario' value={inputUsuario} onChange={onInputUserChange} />
                            <label htmlFor="usuario">Usuario</label>
                        </span>
                    </div>
                    <div className="p-inputgroup flex-1 pb-6">
                        <span className='p-float-label'>
                            <Password inputid='password' feedback={false} toggleMask value={inputPass} onChange={onInputPassChange}/>
                            <label htmlFor="password">Contraseña</label>
                        </span>
                    </div>

      
                    <Button type='submit' label='INGRESAR' loading={loading} onClick={ingresar} className='text-[#BE0F34] m-4' />
                </div>
            </div>
        </div>
    </div>

            <Dialog header="Error" visible={mensaje} style={{ width: '50vw' }} onHide={() => setMensaje(false)}>
                <p className="m-0">
                   Usuario o contraseña incorrectos
                </p>
            </Dialog>
        </>


    )
}