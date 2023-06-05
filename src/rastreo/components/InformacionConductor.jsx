import { ImagenLoader } from "./ImagenLoader"


export const InformacionConductor = ({ conductorSeleccionado }) => {
  
  const abrirPdf= ()=>{
    const nuevaVentana = window.open(conductorSeleccionado.archivolicencia, '_blank');
    nuevaVentana.opener = null;
  }
  
  const btnLicenciaActivo = conductorSeleccionado.archivolicencia === undefined ? null : conductorSeleccionado.archivolicencia === '';

  return (
    <>
      {conductorSeleccionado && 
        <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-xl-6 p-4 text-center'>
            <ul className="list-group list-group-flush">
              <h1 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">Id Conductor: <span className="font-normal">{conductorSeleccionado.idconductor ?? ''}</span></h1>
              <ImagenLoader src={conductorSeleccionado.foto ?? <p>no hay fotografia</p>}/>
              <li className="mr-auto font-bold text-left pb-2">Nombre completo: <span className="font-normal">{conductorSeleccionado.nombrecompleto ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">Edad: <span className="font-normal">{conductorSeleccionado.edad ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">Numero de contacto: <span className="font-normal">{conductorSeleccionado.telefono ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">Tipo de sangre: <span className="font-normal">{conductorSeleccionado.tiposangre ?? ''}</span></li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-6 col-xl-6 p-4 text-center'>
            <ul className="list-group list-group-flush">
              <li className="mr-auto font-bold text-left pb-2" aria-current="true">Numero de licencia: <span className="font-normal">{conductorSeleccionado.numerolicencia ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">Tipo de licencia: <span className="font-normal">{conductorSeleccionado.tipolicencia ?? ''}</span></li>
              <li className="mr-auto font-bold text-left pb-2">Vigencia: <span className="font-normal">{conductorSeleccionado.fechavencimiento ?? ''}</span></li>
              <button type="button" className="bg-[#BE0F34] text-white border border-white hover:bg-white hover:text-red-600 shadow-md font-[Poppins] py-2 px-3 mt-4 rounded duration-500 font-bold justify-items-start" onClick={()=>{abrirPdf()}} disabled= {btnLicenciaActivo}>
                <i className="pi pi-eye p-2"></i>
                Ver licencia
              </button>
            </ul>
          </div>

        </div>
      </div>}
    </>
  )
}
