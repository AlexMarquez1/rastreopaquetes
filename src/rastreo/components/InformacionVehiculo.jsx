import React from 'react'

export const InformacionVehiculo = ({vehiculoSeleccionado}) => {

    const abrirPdf= ()=>{
        const nuevaVentana = window.open(vehiculoSeleccionado.archivopolizaseguro, '_blank');
        nuevaVentana.opener = null;
      }
    
      const btnLicenciaActivo = vehiculoSeleccionado.archivopolizaseguro === undefined ? null : vehiculoSeleccionado.archivopolizaseguro === '';

  return (
    <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-xl-6 p-4 text-center'>
            <ul className="list-group list-group-flush">
              <h1 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">Id vehículo: <span className="font-normal">{vehiculoSeleccionado.idvehiculo ?? ''}</span></h1>
              {/* <ImagenLoader src={vehiculoSeleccionado.foto ?? ''}/> */}
              <li className="mr-auto font-bold text-left pb-2">Tipo de vehículo: <span className="font-normal">{vehiculoSeleccionado.tipovehiculo ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">Marca: <span className="font-normal">{vehiculoSeleccionado.marca ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">Modelo: <span className="font-normal">{vehiculoSeleccionado.modelo ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">Placas: <span className="font-normal">{vehiculoSeleccionado.placas ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">N° serie: <span className="font-normal">{vehiculoSeleccionado.numeroserie ?? ''}</span></li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-6 col-xl-6 p-4 text-center'>
            <ul className="list-group list-group-flush">
              <li className="mr-auto font-bold text-left pb-2" aria-current="true">Seguro: <span className="font-normal">{vehiculoSeleccionado.nombreseguro ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2" aria-current="true">Vencimiento del seguro: <span className="font-normal">{vehiculoSeleccionado.fechavencimientoseguro ?? ''}</span></li> 
              <button type="button" className="bg-[#BE0F34] text-white border border-white hover:bg-white hover:text-red-600 shadow-md font-[Poppins] py-2 px-3 mt-4 rounded duration-500 font-bold justify-items-start" onClick={()=>{abrirPdf()}} disabled= {btnLicenciaActivo}>
                <i className="pi pi-eye p-2"></i>
                Ver poliza de seguro
              </button>
              <button type="button" className="bg-[#BE0F34] text-white border border-white hover:bg-white hover:text-red-600 shadow-md font-[Poppins] py-2 px-3 mt-4 rounded duration-500 font-bold justify-items-start" onClick={()=>{abrirPdf()}} disabled= {btnLicenciaActivo}>
                <i className="pi pi-eye p-2"></i>
                Ver tarjeta de circulación
              </button>
            </ul>
          </div>
        </div>
      </div>
  )
}
