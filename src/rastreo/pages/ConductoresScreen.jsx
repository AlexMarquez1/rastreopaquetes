import React from 'react'
import NuevoConductorForm from '../components/NuevoConductorForm'

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

function ConductoresScreen() {
  return (
    <>
    <h1 className='pt-4 text-5xl'>Conductores</h1>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
            <br />
            <h1 className="card-title pb-4">
                <p className="text-3xl">Registrar un nuevo conductor</p>
            </h1>
                <NuevoConductorForm/>
        </div>
    </section>
    </>
  )
}

export default ConductoresScreen