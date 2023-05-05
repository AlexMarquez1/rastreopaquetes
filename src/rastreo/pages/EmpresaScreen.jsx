import React from 'react'
import NuevaEmpresasForm from '../components/NuevaEmpresasForm'
const styleRegistro = {
    width: '85%',
}

const EmpresaScreen = () => {
  return (
    
    <> 
    <h1 className="pt-6 px-6 text-5xl font-bold">Empresas relacionadas</h1>
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
