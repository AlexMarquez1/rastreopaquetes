import React, { useContext, useEffect, useState } from 'react'
import NuevoConductorForm from '../components/NuevoConductorForm'
import { TablaConductoresCrud } from '../components/TablaConductoresCrud'
import { useFetchConductor } from '../hooks/useFetchConductores';
import { Button } from 'primereact/button';

import { ApiContext } from '../context/ApiProvider';
import { Player } from '@lottiefiles/react-lottie-player';
import useAuth from '../../hooks/useAuth';

const styleRegistro = {
    width: '85%',
}

function ConductoresScreen() {

  const { userAuth, setUserAuth } = useAuth();

  // const { dataConductor, setDataConductor } = useContext(ApiContext);

  useEffect(() => {
      // Llamada a la API y actualización de los datos en el estado
      fetch('http://192.168.0.6:8080/consultar/conductores')
        .then(response => response.json())
        .then(apiData => setDataConductor(apiData))
        .catch(error => console.log(error));
    }, []);

  const [show, setShow] = useState(null);
  const [conductorActual, setconductorActual] = useState({
    idConductor: '',
    nombrecompleto: '',
    fechanacimiento: '',
    email: '',
    telefono: '',
    curp: '',
    rfc: '',
    usuarioconductor: '',
    contrasena: '',
    calle: '',
    numeroexterior: '',
    numerointerior: '',
    codigopostal: '',
    estado: '',
    municipio: '',
    numerolicencia: '',
    tipolicencia: '',
    archivolicencia: '',
    fechaexpediciaon: '',
    fechavencimiento: '',
    tiposangre: '',
    foto: '',
    licencia: '',
    identificacion: '',
    idusuario: '',

});
const { data: conductores, loading } = useFetchConductor(conductorActual);

const columns = [
{ field: 'idconductor', head: 'id' },
{ field: 'nombrecompleto', head: 'Nombre conductor' },
{ field: 'foto', head: 'Foto'},
{ field: 'fechanacimiento', head: 'Fecha de nacimiento' },
{ field: 'telefono', head: 'N° telefono' },
{ field: 'curp', head: 'CURP' },
{ field: 'rfc', head: 'RFC' },
{ field: 'usuarioconductor', head: 'Usuario' },
{ field: 'contrasena', head: 'Contraseña' },
];

const toggleNuevoConductorForm = () => {
  setShow(!show);
  const div = document.getElementById('form');
    div.scrollIntoView({ behavior: 'smooth' }); 
};

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
    <h1 className='pt-6 px-6 text-5xl font-bold'>Conductores</h1>
    <div className='pt-4 '>
      <div className='col-sm-12 px-4'>
        <div className='text-right pt-2'>
          {!loading ? 
            <TablaConductoresCrud data={conductores} conductorActual={conductorActual} setconductorActual={setconductorActual} encabezados={columns} id={'idusuario'} tipoDatos={'Usuarios'} editar={false} eliminar={false} toggleNuevoConductorForm={toggleNuevoConductorForm}/>
            :
            <Player src='https://lottie.host/57646f0b-6bba-4428-b49e-f47f4c50d1a2/by0A7ETtTu.json'
            className="player"
            loop
            autoplay
            style={{ height: '300px', width: '300px' }}
          />
          }
        </div>
      </div>
    </div>
    <section id="form" className="section_item flex-container" style={{ paddingTop: '5%' }}>
      <div className="card form" style={styleRegistro}>
          <br />
          <h1 className="text-3xl text-[#BE0F34] font-extrabold pb-4">
              Registrar un nuevo conductor
          </h1>
              <NuevoConductorForm data={conductores} setconductorActual={setconductorActual} toggleNuevoConductorForm={toggleNuevoConductorForm}/>
      </div>
    </section>
    </>
  )
}

export default ConductoresScreen