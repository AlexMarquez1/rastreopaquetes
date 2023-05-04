import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/estilos.css';

export const NavBarPrincipal = () => {
    const navigate = useNavigate();
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
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">

                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: "black" }}>
                            <i className="pi pi-times"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link" to='/usuarios'>
                                    <i className="bi bi-person-circle px-2"></i>
                                    Usuario</Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mapa">
                                    <i className="pi pi-map px-2"></i>
                                    Mapa
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/viajes">
                                    <i className="pi pi-truck px-2"></i>
                                    +Nuevo viaje 
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to='/conductores'>
                                <i className="pi pi-users px-2"></i>
                                    Conductores</Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/empresas'>
                                    <i className="pi pi-building px-2"></i>
                                    Empresas</Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/vehiculos'>
                                <i className="pi pi-car px-2"></i>
                                    Vehículos</Link>
                                <hr size='3' />
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="pi pi-map-marker px-2"></i>
                                    Rastreo</a>
                                <hr size='3' />
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to='/historial'>
                                <i className="pi pi-history px-2"></i>
                                    historial de viajes </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-lock-fill px-2"></i>
                                    cerrar Sesión</a>
                                <hr size='3' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
