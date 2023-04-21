import '../../styles/estilos.css';
import fondo from '../../assets/Fondo.jpg';
import fondo2 from '../../assets/pai.jpeg';
import { NavBarPrincipal } from '../components/NavBarPrincipal';
import TarjeMenuActivas from '../components/TarjeMenuActivas';
import TablaMenuEmpresas from '../components/TablaMenuEmpresas';

const styleMenu = {
  background: 'rgba(143, 216, 227, 0.316)',
}

export const MenuScreen = () => {
  return (
    <>
      <br />
      <h1 className="card-title pb-4">
        <p className="fs-4">Bienvenidos al sistema de rastreo</p>
      </h1>
      <div class="">
        <div class="row">
          <div class="col-sm-12 col-md-5 p-4">
            <div class="card" style={styleMenu}>
              <div class="card-body">
                <div className='text-center'>
                <i className="pi  pi-building " style={{ fontSize: '3rem' }}></i>
                <br></br>
                <h1>Empresas</h1>
                </div>
                <div className='col-sm-12 pt-4'>
                <TablaMenuEmpresas/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-7 p-4">
            <div class="card" style={styleMenu}>
              <div class="card-body">
                <i className="pi pi-map-marker " style={{ fontSize: '3rem' }}></i>
                <br></br>
                viajes actuales.
                <div className='pt-5 m-4'>
                  <TarjeMenuActivas/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 p-4">
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
