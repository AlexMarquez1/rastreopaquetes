import React, { useState } from 'react'
import { NavBarPrincipal } from '../components/NavBarPrincipal'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

import { SeleccionarUbicacion } from '../components/SeleccionarUbicacion';

const styleRegistro = {
  width: '85%',
  background: 'rgba(143, 216, 227, 0.316)',
}

const colorTexto = {
  color: 'black',
}

export const RegistroViajesScreen = () => {

  const [loading, setLoading] = useState(false);

  const registrarViaje = async (e) => {
    e.preventDefault();

  };

  const handleInputChange = () => {

  }

  return (
    <>
      <NavBarPrincipal />

      <section className="section_item flex-container" >
        <div className="card form" style={styleRegistro}>
          <br />
          <h1 className="card-title">
            <p className="fs-4">Nuevo Viaje</p>
          </h1>
          <form onSubmit={registrarViaje}>
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col">
                  <div className="p-inputgroup flex-1">
                    <span className='p-float-label'>
                      <InputText required={true} inputid='nombre' name='nombre' onChange={handleInputChange} />
                      <label htmlFor="nombre" style={colorTexto}>Empresa</label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col">
                  <div className="p-inputgroup flex-1">
                    <span className='p-float-label'>
                      <InputText inputid='telefono' name='telefonocontacto' disabled={true} />
                      <label htmlFor="telefono" style={colorTexto}>Rason social</label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col">
                  <div className="p-inputgroup flex-1">
                    <span className='p-float-label'>
                      <InputText inputid='usuario' name='usuario' disabled={true} />
                      <label htmlFor="usuario" style={colorTexto}>Direccion</label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col">
                  <div className="p-inputgroup flex-1">
                    <span className='p-float-label'>
                      <InputText inputid='usuario' name='usuario' disabled={true} />
                      <label htmlFor="usuario" style={colorTexto}>RFC</label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col">
                  <div className="p-inputgroup flex-1">
                    <span className='p-float-label'>
                      <Calendar inputId='salida' name='salida' showIcon />
                      <label htmlFor="Dia de salida" style={colorTexto}>Dia de salida</label>
                    </span>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">

                <div className='col'>
                  <SeleccionarUbicacion />

                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>


  )
}