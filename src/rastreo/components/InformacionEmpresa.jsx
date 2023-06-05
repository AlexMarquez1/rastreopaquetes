import React from 'react'

export const InformacionEmpresa = ({empresaSeleccionada}) => {
  return (
        <ul>
          <li className="text-lg mr-auto font-bold text-left pb-2" aria-current="true">
            <i className="pi pi-map-marker" style={{ fontSize: '1rem' }}></i> Direccion: <span className="font-normal">{empresaSeleccionada.direccion}</span>
          </li>
          <li className="text-lg mr-auto font-bold text-left pb-2">
            <i className="pi pi-phone" style={{ fontSize: '1rem' }}></i> Telefono: <span className="font-normal">{empresaSeleccionada.telefono}</span>
          </li>
          <li className="text-lg mr-auto font-bold text-left pb-2">
            <i className="pi pi-desktop" style={{ fontSize: '1rem' }}></i> RFC: <span className="font-normal">{empresaSeleccionada.rfc}</span>
          </li>
          <li className="text-lg mr-auto font-bold text-left pb-2">
            <i className="pi pi-at" style={{ fontSize: '1rem' }}></i> E-mail: <span className="font-normal">{empresaSeleccionada.email}</span>
          </li>
          <li className="text-lg mr-auto font-bold text-left pb-2">
            <i className="pi pi-building" style={{ fontSize: '1rem' }}></i> Giro: <span className="font-normal">{empresaSeleccionada.giro}</span>
          </li>
        </ul>
     
  )
}
