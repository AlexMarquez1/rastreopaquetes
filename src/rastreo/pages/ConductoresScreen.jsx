import React, { useState } from 'react'
import NuevoConductorForm from '../components/NuevoConductorForm'
import { TablaConductoresCrud } from '../components/TablaConductoresCrud'
import { useFetchUsers } from '../hooks/useFetchUsers';
import { Button } from 'primereact/button';

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

function ConductoresScreen() {

  const [show, setShow] = useState(null);
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
{ field: 'nombre', head: 'Nombre conductor' },
{ field: 'fechaNacimiento', head: 'Fecha de nacimiento' },
{ field: 'telefonocontacto', head: 'N° telefono' },
{ field: 'curp', head: 'CURP' },
{ field: 'rfc', head: 'RFC' },
{ field: 'usuario', head: 'Usuario' },
{ field: 'password', head: 'Contraseña' },
];

const toggleNuevoConductorForm = () => {
  setShow(!show);
  const div = document.getElementById('form');
    div.scrollIntoView({ behavior: 'smooth' }); 
};

  return (
    <>
    <h1 className='pt-4 text-5xl'>Conductores</h1>
    <div className='pt-4 '>
      <div className='col-sm-12 px-4'>
      <TablaConductoresCrud data={usuarios} encabezados={columns} id={'idusuario'} tipoDatos={'Usuarios'} editar={false} eliminar={false} toggleNuevoConductorForm={toggleNuevoConductorForm}/>
        <div className='text-right pt-2'>
        </div>
      </div>
    </div>
    <section id="form" className="section_item flex-container" style={{ paddingTop: '5%' }}>
      <div className="card form" style={styleRegistro}>
          <br />
          <h1 className="card-title pb-4">
              <p className="text-3xl">Registrar un nuevo conductor</p>
          </h1>
              <NuevoConductorForm toggleNuevoConductorForm={toggleNuevoConductorForm}/>
      </div>
    </section>
    </>
  )
}

export default ConductoresScreen