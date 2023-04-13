import React, { useEffect, useState } from 'react'
import TarjetaRutas from '../components/TarjetaRutas'

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

const HistorialViajesScreen = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data)

  return (
    <>
    <h1>Historial de rutas</h1>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
            <br />
            <h1 className="card-title">
                <p className="fs-4">Rutas activas</p>
            </h1>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-md-6 col-xl-3 pb-4'>
                        <TarjetaRutas 
                            idViaje='93783' 
                            descripcionViaje='Traslado de equipos de computo de la marca apple'
                            nombreChofer='Raul Orduñez Osorio'
                            idVehiculo='m000001'
                            traslado='CDMX - Monterrey'
                        />
                    </div>
                    <div className='col-sm-6 col-md-6 col-xl-3 pb-4'>
                        <TarjetaRutas
                            idViaje='93456' 
                            descripcionViaje='Traslado de equipos de computo de la marca hp'
                            nombreChofer='Orlando Olvera Gomez'
                            idVehiculo='m000009'
                            traslado='CDMX - Guadalajara'
                        />
                    </div>
                    <div className='col-sm-6 col-md-6 col-xl-3 pb-4'>
                        <TarjetaRutas
                            idViaje='93456' 
                            descripcionViaje='Traslado de equipos de computo de la marca hp'
                            nombreChofer='Orlando Olvera Gomez'
                            idVehiculo='m000009'
                            traslado='CDMX - Guadalajara'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
        <br />
            <h1 className="card-title">
                <p className="fs-4">Rutas asignadas</p>
            </h1>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 pb-4'>
                        <TarjetaRutas/>
                    </div>
                    <div className='col-md-3 pb-4'>
                        <TarjetaRutas/>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
        <br />
            <h1 className="card-title">
                <p className="fs-4">Rutas completadas</p>
            </h1>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 pb-4'>
                        <TarjetaRutas/>
                    </div>
                    <div className='col-md-3 pb-4'>
                        <TarjetaRutas/>
                    </div>
                    <div className='col-md-3 pb-4'>
                        <TarjetaRutas/>
                    </div>
                    <div className='col-md-3 pb-4'>
                        <TarjetaRutas/>
                    </div>
                    <div className='col-md-3 pb-4'>
                        <TarjetaRutas/>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    </>
  )
}

export default HistorialViajesScreen