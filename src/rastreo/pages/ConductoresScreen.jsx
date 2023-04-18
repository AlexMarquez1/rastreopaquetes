import React from 'react'

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

function ConductoresScreen() {
  return (
    <>
    <h1 className='pt-4'>Conductores</h1>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
            <br />
            <h1 className="card-title">
                <p className="fs-4"></p>
            </h1>
        </div>
    </section>
    </>
  )
}

export default ConductoresScreen