import { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import '../../styles/estilos.css'
import { getValidation } from '../../helpers/getUsers';
import { api } from "../../helpers/VariablesGlobales";
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';

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

    const onInputUserChange = ({ target }) => {
        setInputUsuario(target.value);
    }

    const onInputPassChange = ({ target }) => {
        setInputPass(target.value);
    }

    const ingresar = () => {
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
        });
    }


    return (
        <>
        {/* <div className="flex flex-col items-center justify-center h-screen">
      <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
        </div>
      </form>
    </div> */}
    
    <div className="col-sm-12 col-md-8 p-4">
        <div className="card form card m-2 mb-6 drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
            <div className="card-body">
                <div className='text-center'>
                    <h1 className="card-title pb-4 card-title pb-4 text-3xl text-[#BE0F34]">Inicia Sesión</h1>
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



                {/* <section className="section_item flex-container">
                    <div className="card form card m-2 mb-6 drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
                        <h1 className="card-title py-4">Inicia Sesión</h1>
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

                            </div>
                                <Button label='INGRESAR' loading={loading} onClick={ingresar} style={{backgroundColor:  'rgb(244 53 53)', borderColor: 'rgb(255 0 0)'}} />
                        </div>
                    </div>
                </section> */}

            <Dialog header="Error" visible={mensaje} style={{ width: '50vw' }} onHide={() => setMensaje(false)}>
                <p className="m-0">
                   Usuario o contraseña incorrectos
                </p>
            </Dialog>
        </>


    )
}