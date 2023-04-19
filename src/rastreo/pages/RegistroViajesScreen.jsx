import React, { useState } from 'react'
import { NavBarPrincipal } from '../components/NavBarPrincipal'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

import { SeleccionarUbicacion } from '../components/SeleccionarUbicacion';
import { Dialog } from 'primereact/dialog';

const styleRegistro = {
  width: '85%',
  background: 'rgba(143, 216, 227, 0.316)',
}

const colorTexto = {
  color: 'black',
}

const empresas= [
  { nombre: 'Empresa 1', codigo: 'E1' },
  { nombre: 'Empresa 2', codigo: 'E2' },
  { nombre: 'Empresa 3', codigo: 'E3' },
  { nombre: 'Empresa 4', codigo: 'E4' },
  { nombre: 'Empresa 5', codigo: 'E5' }
];
const conductores= [
  { nombre: 'Conductor 1', codigo: 'C1' },
  { nombre: 'Conductor 2', codigo: 'C2' },
  { nombre: 'Conductor 3', codigo: 'C3' },
  { nombre: 'Conductor 4', codigo: 'C4' },
  { nombre: 'Conductor 5', codigo: 'C5' }
];

export const RegistroViajesScreen = () => {

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(undefined);
  const [conductorSeleccionado, setConductorSeleccionado] = useState(undefined);

  const registrarViaje = async (e) => {
    e.preventDefault();

  };

  const handleInputChange = () => {

  }

  return (
    <>
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
                      <Dropdown value={empresaSeleccionada} onChange={(e) => setEmpresaSeleccionada(e.value)} options={empresas} optionLabel="nombre"
                        showClear filter filterPlaceholder='Buscar por nombre' emptyFilterMessage='Empresa no registrada'  placeholder="Selecciona una empresa" className="w-full md:w-14rem" />
                      <label htmlFor="nombre" style={colorTexto}>Empresa</label>
                    </span>
                    <Button icon="pi pi-building" onClick={() => setMensaje(true)} disabled={empresaSeleccionada === undefined ? true : false} />
                  </div>
                </div>
                <div className="col">
                  <div className="p-inputgroup flex-1">
                    <span className='p-float-label'>
                    <Dropdown value={conductorSeleccionado} onChange={(e) => setConductorSeleccionado(e.value)} options={conductores} optionLabel="nombre"
                        showClear filter filterPlaceholder='Buscar por nombre' emptyFilterMessage='Conductor no registrado' placeholder="Selecciona una empresa" className="w-full md:w-14rem" />
                      <label htmlFor="conductor" style={colorTexto}>Conductor</label>
                    </span>
                    <Button icon="pi pi-user" onClick={() => setMensaje(true)} disabled={conductorSeleccionado === undefined ? true : false} />
                  </div>
                </div>
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

      <Dialog header="Empresa" visible={mensaje} style={{ width: '50vw' }} onHide={() => setMensaje(false)}>
        <p className="m-0">
          Empresa: Nombre de la empresa
        </p>
      </Dialog>
    </>


  )
}