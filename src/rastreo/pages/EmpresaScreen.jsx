import React from 'react'
import NuevaEmpresasForm from '../components/NuevaEmpresasForm'
const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

const EmpresaScreen = () => {
  return (
    
    <> 
    <h1 className="pt-4 text-5xl">Empresas relacionadas</h1>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
    <div className="card form" style={styleRegistro}>
        <br />
        <h1 className="card-title pb-4">
            <p className="fs-4">Registro de nueva empresa</p>
        </h1>
          <NuevaEmpresasForm/>
    </div>
</section>
    
          
    
    </>

    
  )
}

export default EmpresaScreen
