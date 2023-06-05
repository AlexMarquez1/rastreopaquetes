import React, { useState } from 'react'
import NuevaEmpresasForm from '../components/NuevaEmpresasForm'
import { useFetchEmpresas } from '../hooks/useFetchEmpresas';
import useAuth from '../../hooks/useAuth';
import { TarjetaEmpresa } from '../components/TarjetaEmpresa';
import { Player } from '@lottiefiles/react-lottie-player';

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
    <TarjetaEmpresa data={empresas}/> : 
      <Player src='https://lottie.host/57646f0b-6bba-4428-b49e-f47f4c50d1a2/by0A7ETtTu.json'
        className="player"
        loop
        autoplay
        style={{ height: '300px', width: '300px' }}
      />
    }
    

    <section className="section_item flex-container py-6">
    <div className="card form drop-shadow-md bg-[#FFF]" style={styleRegistro}>
        <br />
        <h1 className="text-3xl text-[#BE0F34] font-extrabold pb-5">
            Registro de nueva empresa
        </h1>
          <NuevaEmpresasForm/>
    </div>
</section>
    
          
    
    </>

    
  )
}

export default EmpresaScreen
