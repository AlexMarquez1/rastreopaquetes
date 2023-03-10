import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/estilos.css';

export const NavBarPrincipal = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/menu'>Menu</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">

                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                            <li className="nav-item">
                                <Link className="nav-link" to="/mapa">
                                    <i className="bi bi-person-badge-fill"></i>
                                    Registro
                                </Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to='/usuarios'>
                                    <i className="bi bi-person-circle"></i>
                                    Usuario</Link>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-pc-display-horizontal"></i>
                                    Empresas</a>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    Rastreo</a>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-hourglass-split"></i>
                                    historial de viaje </a>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-car-front-fill"></i>
                                    Viajes </a>
                                <hr size='3' />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-lock-fill"></i>
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
