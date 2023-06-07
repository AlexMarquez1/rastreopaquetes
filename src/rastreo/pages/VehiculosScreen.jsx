import React, { useContext, useEffect, useState } from 'react'
import NuevoVehiculoForm from '../components/NuevoVehiculoForm'
import { useFetchVehiculo } from '../hooks/useFetchVehiculos';
import { DisponibilidadVehiculo } from '../components/DisponibilidadVehiculo';

import { Player } from '@lottiefiles/react-lottie-player';

import { ApiContext } from '../context/ApiProvider';
import useAuth from '../../hooks/useAuth';

const styleRegistro = {
    width: '85%',
}

const VehiculosScreen = () => {

    const [vehiculoActual, setVehiculoActual] = useState({
        idUsuario: 0,
        usuario: '',
        password: '',
        confirPass: '',
        nombre: '',
        telefonocontacto: '',
        perfil: { idPerfil: 1, perfil: 'admin', }
    });

const { userAuth, setUserAuth } = useAuth();

const { data: vehiculos, loading } = useFetchVehiculo(vehiculoActual);

// funcion que hace que al hacer refesh se mantenga el usuario activo
useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserAuth(foundUser);
      console.log(foundUser)
    }
  }, []);

  return (
    <>
    <h1 className='pt-6 px-6 text-5xl font-bold'>Mis vehículos</h1>
    <div>
        {!loading ? <DisponibilidadVehiculo data={vehiculos}/> : 
        <Player src='https://lottie.host/57646f0b-6bba-4428-b49e-f47f4c50d1a2/by0A7ETtTu.json'
            className="player"
            loop
            autoplay
            style={{ height: '300px', width: '300px' }}
        />
        } 
    </div>
    <div className='bg-white'>
    <section className="section_item flex-container py-6 drop-shadow-md">
        <div className="card form drop-shadow-md" style={styleRegistro}>
            <br />
            <h1 className="text-3xl text-[#BE0F34] font-extrabold pb-4">
                Registrar un nuevo vehículo
            </h1>
            <NuevoVehiculoForm data={vehiculos} setVehiculoActual={setVehiculoActual}/>
        </div>
    </section>
    </div>
    
    </>
  )
}

export default VehiculosScreen