import React, { useContext, useEffect, useState } from 'react'
import NuevoConductorForm from '../components/NuevoConductorForm'
import { TablaConductoresCrud } from '../components/TablaConductoresCrud'
import { useFetchConductor } from '../hooks/useFetchConductores';
import { Button } from 'primereact/button';

import { ApiContext } from '../context/ApiProvider';

const styleRegistro = {
    width: '85%',
}

function ConductoresScreen() {

  const { dataConductor, setDataConductor } = useContext(ApiContext);

  useEffect(() => {
      // Llamada a la API y actualización de los datos en el estado
      fetch('http://192.168.0.6:8080/consultar/conductores')
        .then(response => response.json())
        .then(apiData => setDataConductor(apiData))
        .catch(error => console.log(error));
    }, []);

    console.log(dataConductor)

  const [show, setShow] = useState(null);
  const [conductorActual, setconductorActual] = useState({
    idConductor: '',
    nombrecompleto: '',
    fechanacimiento: '',
    email: '',
    telefono: '',
    curp: '',
    rfc: '',
    usuario: '',
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
{ field: 'usuario', head: 'Usuario' },
{ field: 'contrasena', head: 'Contraseña' },
];

const toggleNuevoConductorForm = () => {
  setShow(!show);
  const div = document.getElementById('form');
    div.scrollIntoView({ behavior: 'smooth' }); 
};

  return (
    <>
    <h1 className='pt-6 px-6 text-5xl font-bold'>Conductores</h1>
    <div className='pt-4 '>
      <div className='col-sm-12 px-4'>
        <div className='text-right pt-2'>
          {!loading && 
            <TablaConductoresCrud data={conductores} conductorActual={conductorActual} setconductorActual={setconductorActual} encabezados={columns} id={'idusuario'} tipoDatos={'Usuarios'} editar={false} eliminar={false} toggleNuevoConductorForm={toggleNuevoConductorForm}/>
          }
        </div>
      </div>
    </div>
    <section id="form" className="section_item flex-container" style={{ paddingTop: '5%' }}>
      <div className="card form" style={styleRegistro}>
          <br />
          <h1 className="card-title pb-4 card-title pb-4 text-3xl text-[#BE0F34]">
              Registrar un nuevo conductor
          </h1>
              <NuevoConductorForm toggleNuevoConductorForm={toggleNuevoConductorForm}/>
      </div>
    </section>
    </>
  )
}

export default ConductoresScreen