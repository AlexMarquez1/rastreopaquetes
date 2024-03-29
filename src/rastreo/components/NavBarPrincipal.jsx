import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import '../../styles/estilos.css';
import conductor from '../../assets/conductor2.png';
import usuario from '../../assets/usuario.png';
import mapa from '../../assets/mapa.png';
import gps from '../../assets/gps.png';
import camion from '../../assets/camion2.png';
import historia from '../../assets/historia.png';

export const NavBarPrincipal = () => {

    const navigate = useNavigate();

    const cerrarSesion = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar bg-[#BE0F34] fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/menu'>
                    <i className="pi pi-home text-light p-2 " style={{ fontSize: '2rem' }}></i>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <i className="pi pi-bars text-light" style={{ fontSize: '2rem' }}></i>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i className="pi pi-times text-[#BE0F34] hover:bg-[#BE0F34] hover:text-white border-2 border-[#BE0F34] rounded-full h-14 w-14 flex items-center justify-center"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="">
                            <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <Link className="nav-link hover:text-[#BE0F34] text-lg font-semibold" to='/usuarios'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg drop-shadow-md">
                                                <img src={usuario} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <p>Usuario</p>
                                        </div>
                                    </div>
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <Link className="nav-link hover:text-[#BE0F34] text-lg font-semibold" to="/mapa">
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                                <img src={mapa} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <p>Mapa</p>
                                        </div>
                                    </div>
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <Link className="nav-link hover:text-[#BE0F34] text-lg font-semibold" to="/viajes">
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                                <img src={gps} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <p>+Nuevo viaje</p>
                                        </div>
                                    </div>
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <Link className="nav-link hover:text-[#BE0F34] text-lg font-semibold" to='/conductores'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                                <img src={conductor} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <p>Conductores</p>
                                        </div>
                                    </div>
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <Link className="nav-link hover:text-[#BE0F34] text-lg font-semibold" to='/empresas'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                                <img src="src/assets/empresa3.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <p>Empresas</p>
                                        </div>
                                    </div>
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <Link className="nav-link hover:text-[#BE0F34] text-lg font-semibold" to='/vehiculos'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                                <img src={camion} alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <p>Vehículos</p>
                                        </div>
                                    </div>
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
                                <Link className="nav-link hover:text-[#BE0F34] text-lg font-semibold" to='/historial'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                                <img src={historia} alt="Descripción de la imagen" className='' fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <p className='text-xl font-semibold'>historial de viajes</p>
                                        </div>
                                    </div>
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item" onClick={cerrarSesion}>
                                <Link className="nav-link hover:text-[#BE0F34] text-xl font-semibold">
                                    cerrar
                                    {/* <div className='row'>
                                        <div className='col-2'>
                                            <div className="bg-white rounded-full h-14 w-14 items-center justify-center shadow-lg relative drop-shadow-md">
                                                <img src="src/assets/cerrar-sesion.png" alt="Descripción de la imagen" className='' fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className='col-10 mt-2'>
                                            <p>Cerrar sesión</p>
                                        </div>
                                    </div> */}
                                </Link>
                                <hr size='3' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}


{/* <div className="card m-2 mb-6 drop-shadow-md bg-[#dfdfdf] transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">    
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-left"><span className='font-bold text-lg'>Chofer:</span> {chofer}</li>
        <li className="list-group-item text-left"><span className='font-bold text-lg'>Id vehículo:</span> {idVehiculo}</li>
        <li className="list-group-item text-left"><span className='font-bold text-lg'>Descripción:</span> {descripcion}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link text-[#BE0F34] hover:text-rose-500 text-lg"> <i className="pi pi-map-marker text-[#BE0F34] hover:text-opacity-75"></i> Seguimiento</a>
        <a href="#" className="card-link text-[#BE0F34] hover:text-rose-500 text-lg" onClick={() => {setMensaje(true)}}><i className="pi pi-external-link text-[#BE0F34] hover:text-opacity-75"></i> Ver más 
        </a>
      </div>
    </div>           
</div> */}