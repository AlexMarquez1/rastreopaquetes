import { Button } from 'primereact/button';
import React, { useState } from 'react'
import '../../styles/estilos.css';
import { NavBarPrincipal } from '../components/NavBarPrincipal';
import { DataTable } from 'primereact/datatable';
import { useFetchUsers } from '../hooks/useFetchUsers';
import { Tabla } from '../components/Tabla';
import { SkeletonTable } from '../components/SkeletonTable';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { NuevoUsuario } from '../components/NuevoUsuario';


const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

export const RegistroUsuariosScreen = () => {

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
            <div className='fondo2'>
                <NuevoUsuario usuarioActual={usuarioActual} setUsuarioActual={setusuarioActual}/>
                <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
                    <div className="card form" style={styleRegistro}>
                        {loading ? <SkeletonTable items={columns} /> : <Tabla data={usuarios} encabezados={columns} id={'idusuario'} tipoDatos={'Usuarios'} editar={false} eliminar={false} />}
                    </div>
                </section>
            </div>
        </>
    )
}
