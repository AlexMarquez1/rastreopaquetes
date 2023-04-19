import React, { useState } from 'react'
import NuevoVehiculoForm from '../components/NuevoVehiculoForm'
import { useFetchUsers } from '../hooks/useFetchUsers';

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

const VehiculosScreen = () => {

    const [usuarioActual, setusuarioActual] = useState({
        idUsuario: 0,
        usuario: '',
        password: '',
        confirPass: '',
        nombre: '',
        telefonocontacto: '',
        perfil: { idPerfil: 1, perfil: 'admin', }
    });
const { data: usuarios, loading } = useFetchUsers(usuarioActual);

const columns = [
    { field: 'idusuario', head: 'id' },
    { field: 'nombre', head: 'Nombre Usuario' },
    { field: 'telefonocontacto', head: 'Contacto' },
    { field: 'usuario', head: 'Usuario' },
    { field: 'password', head: 'Contraseña' },
];
  return (
    <>
    <h1 className='pt-4'>Mis vehículos</h1>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
            <br />
            <h1 className="card-title pb-4">
                <p className="fs-4">Registrar un nuevo vehículo</p>
            </h1>
            <NuevoVehiculoForm usuarioActual={usuarioActual} setusuarioActual={setusuarioActual}/>
        </div>
    </section>
    </>
  )
}

export default VehiculosScreen