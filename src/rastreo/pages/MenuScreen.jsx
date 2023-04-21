import '../../styles/estilos.css';
import fondo from '../../assets/Fondo.jpg';
import fondo2 from '../../assets/pai.jpeg';
import { NavBarPrincipal } from '../components/NavBarPrincipal';
const styleMenu = {
  width: '85%',
  background: 'rgba(143, 216, 227, 0.316)',
}

export const MenuScreen = () => {
  return (
    <>
      <br />
      <h1 className="card-title pb-4">
        <p className="fs-4">Bienvenidos al sistema de rastreo</p>
      </h1>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <i className="pi  pi-car " style={{ fontSize: '3rem' }}></i>
                <br></br>
                conductores activos.
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <i className="pi pi-map-marker " style={{ fontSize: '3rem' }}></i>
                <br></br>
                viajes actuales.
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <i className="pi  pi-building " style={{ fontSize: '3rem' }}></i>
                <br></br>
                Empresas
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
