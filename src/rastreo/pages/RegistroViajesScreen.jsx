import React from 'react'
import { NavBarPrincipal } from '../components/NavBarPrincipal'
import '../../styles/estilos.css';

const styleRegistro = {
  width: '85%',
  background: 'rgba(143, 216, 227, 0.316)',
}

export const RegistroViajesScreen = () => {

  const registrarViaje = async (e) => {
    e.preventDefault();
   
};



  return (
    <>
      <NavBarPrincipal />

      <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
          <br />
          <h1 className="card-title">
            <p className="fs-4">Registrar nuevo viaje</p>

            <form onSubmit={registrarViaje}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="p-inputgroup flex-1">
                      <span className='p-float-label'>
                        <InputText required={true} inputid='nombre' value={nuevoUsuario.nombre} name='nombre' onChange={handleInputChange} />
                        <label htmlFor="nombre">Nombre</label>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-inputgroup flex-1">
                      <span className='p-float-label'>
                        <InputText required={true} inputid='telefono' value={nuevoUsuario.telefonoContacto} name='telefonocontacto' onChange={handleInputChange} />
                        <label htmlFor="telefono">Telefono</label>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-inputgroup flex-1">
                      <span className='p-float-label'>
                        <InputText required={true} inputid='usuario' value={nuevoUsuario.usuario} name='usuario' onChange={handleInputChange} />
                        <label htmlFor="usuario">Usuario</label>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="p-inputgroup flex-1">
                      <span className='p-float-label'>
                        <Password required={true} toggleMask inputid='passwor' value={nuevoUsuario.password} name='password' onChange={handleInputChange} />
                        <label htmlFor="passwor">Contraseña</label>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="p-inputgroup flex-1">
                      <span className='p-float-label'>
                        <Password required={true} toggleMask inputid='confirPass' value={nuevoUsuario.confirPass} name='confirPass' onChange={handleInputChange} />
                        <label htmlFor="confirPass">Confirmar Contraseña</label>
                      </span>
                    </div>
                  </div>
                  <div className='col'>
                    <br />
                    <Button type="submit" loading={loading} className="btn btn-danger" label='Regristrar' />

                  </div>
                </div>
              </div>
            </form>
          </h1>
          <br />
        </div>
      </section>
    </>


  )
}