import React, { useState } from 'react'
import NuevoVehiculoForm from '../components/NuevoVehiculoForm'
import { useFetchVehiculo } from '../hooks/useFetchVehiculos';
import { DisponibilidadVehiculo } from '../components/DisponibilidadVehiculo';

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
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
    <h1 className='pt-4 text-5xl'>Mis vehículos</h1>
    <div>
        {!loading ? <DisponibilidadVehiculo data={vehiculos} vehiculoActual={vehiculoActual} setVehiculoActual={setVehiculoActual}/> : <div>cargando</div>} 
    </div>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
            <br />
            <h1 className="card-title pb-2">
                <p className="fs-4">Registrar un nuevo vehículo</p>
            </h1>
            <NuevoVehiculoForm />
        </div>
    </section>
    </>
  )
}

export default VehiculosScreen