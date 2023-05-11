import React, { useState } from 'react'
import NuevaEmpresasForm from '../components/NuevaEmpresasForm'
import { useFetchEmpresas } from '../hooks/useFetchEmpresas';
import useAuth from '../../hooks/useAuth';
import { TarjetaEmpresa } from '../components/TarjetaEmpresa';

const styleRegistro = {
    width: '85%',
}

const EmpresaScreen = () => {

  // const { userAuth } = useAuth();
  
  const [empresaActual, setEmpresaActual] = useState({
    idempresa: '',
    razonsocial: '',
    direccion: '',
    rfc: '',
    telefono: '',
    email: '',
    giro: '',
    idusuario: '',
});

const { data: empresas, loading } = useFetchEmpresas(empresaActual);

// const empresaFiltrada = empresasState.filter(item => item.usuario.idusuario === userAuth.idusuario);


  return (
    
    <> 
    <h1 className="pt-6 px-6 text-5xl font-bold">Empresas relacionadas</h1>
    {!loading ? 
    <TarjetaEmpresa data={empresas}/> : <div className='text-center pt-4'><i className="pi pi-spin pi-spinner" style={{ fontSize: '4rem' }}></i></div>
    }
    

    <section className="section_item flex-container py-6">
    <div className="card form drop-shadow-md bg-[#FFF]" style={styleRegistro}>
        <br />
        <h1 className="card-title card-title pb-4 card-title pb-4 text-3xl text-[#BE0F34]">
            Registro de nueva empresa
        </h1>
          <NuevaEmpresasForm/>
    </div>
</section>
    
          
    
    </>

    
  )
}

export default EmpresaScreen
