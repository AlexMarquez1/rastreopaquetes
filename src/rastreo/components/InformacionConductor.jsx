import { ImagenLoader } from "./ImagenLoader"


export const InformacionConductor = ({ conductorSeleccionado }) => {

  const abrirPdf= ()=>{
    const nuevaVentana = window.open(conductorSeleccionado.licencia, '_blank');
    nuevaVentana.opener = null;
  }
  const btnLicenciaActivo = conductorSeleccionado.licencia === undefined ? null : conductorSeleccionado.licencia === '';

  return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-xl-6 p-4 text-center'>
            <ul className="list-group list-group-flush">
              <p className="list-group-item-dark btn" aria-current="true">Id Conductor: {conductorSeleccionado.idConductor ?? ''}</p>
              <ImagenLoader src={conductorSeleccionado.foto ?? ''}/>
              <li className="list-group-item ">Nombre completo:<br/> {conductorSeleccionado.nombreCompleto ?? ''}</li>
              <li className="list-group-item ">Edad: {conductorSeleccionado.edad ?? ''}</li>
              <li className="list-group-item ">Numero de contacto:<br/> {conductorSeleccionado.numeroContacto ?? ''}</li>
              <li className="list-group-item ">Tipo de sangre:<br/> {conductorSeleccionado.tipoDeSangre ?? ''}</li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-6 col-xl-6 p-4 text-center'>
            <ul className="list-group list-group-flush">
              <p className="list-group-item-dark btn " aria-current="true">Numero de licencia: {conductorSeleccionado.numeroLicencia ?? ''}</p>
              <li className="list-group-item ">Tipo de licencia: {conductorSeleccionado.tipoLicencia ?? ''}</li>
              <li className="list-group-item ">Vigencia: {conductorSeleccionado.vigencia ?? ''}</li>
              <button type="button" className="btn btn-outline-secondary" onClick={()=>{abrirPdf()}} disabled= {btnLicenciaActivo}>
                <i className="pi pi-eye p-2"></i>
                Ver licencia
              </button>
            </ul>
          </div>

        </div>
      </div>
  )
}
