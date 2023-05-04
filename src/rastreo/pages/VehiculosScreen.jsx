import React, { useState } from 'react'
import NuevoVehiculoForm from '../components/NuevoVehiculoForm'
import { useFetchVehiculo } from '../hooks/useFetchVehiculos';
import { DisponibilidadVehiculo } from '../components/DisponibilidadVehiculo';

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
const { data: vehiculos, loading } = useFetchVehiculo(vehiculoActual);

const columns = [
    { field: 'idusuario', head: 'id' },
    { field: 'nombre', head: 'Nombre Usuario' },
    { field: 'telefonocontacto', head: 'Contacto' },
    { field: 'usuario', head: 'Usuario' },
    { field: 'password', head: 'Contraseña' },
];
  return (
    <>
    <h1 className='pt-6 px-6 text-5xl font-bold'>Mis vehículos</h1>
    <div>
        {!loading ? <DisponibilidadVehiculo data={vehiculos} vehiculoActual={vehiculoActual} setVehiculoActual={setVehiculoActual}/> : <div className='text-center pt-4'><i className="pi pi-spin pi-spinner" style={{ fontSize: '4rem' }}></i></div>} 
    </div>
    <div className='bg-white'>
    <section className="section_item flex-container py-6 drop-shadow-md">
        <div className="card form drop-shadow-md" style={styleRegistro}>
            <br />
            <h1 className="text-black text-3xl pb-4">
                Registrar un nuevo vehículo
            </h1>
            <NuevoVehiculoForm />
        </div>
    </section>
    </div>
    
    </>
  )
}

export default VehiculosScreen