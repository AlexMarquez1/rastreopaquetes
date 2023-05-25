import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    // funcionamiento del estado del Menu 
    let [open,setOpen]=useState(false);

    //Hoock para Cerrrar Sesión
    const navigate = useNavigate();

    //Funcion Boton Cerrar sesión
    const onLogout = () => {
        localStorage.removeItem('token');
        navigate('/login', {
            replace: true
        });
    } 

  return (
    <>
    <div className='z-10 shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-[#BE0F34] py-3 md:px-6 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <Link to='/menu'>
                <span className='hover:text-gray-400 duration-500 text-3xl text-slate-50 mr-1 pt-2'>
                <i className="pi pi-home" style={{ fontSize: '2rem' }}></i>
                </span>
                </Link> 
            </div>
            <div onClick={()=>setOpen(!open)} className='text-4xl absolute right-8 top-6 cursor-pointer text-slate-50 md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-[#BE0F34] md:z-auto z-[-1] left-40 w-full md:w-auto md:pl-0 pl-3 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-520px]'}`}>
                <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mr-5">
                    <Link className="nav-link text-slate-50 hover:text-slate-300 text-lg font-semibold" to='/usuarios'>
                        <div className='row'>
                            <div className='col-2 md:hidden'>
                                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg drop-shadow-md">
                                    <img src="src/assets/usuario.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                </div>
                            </div>
                            <div className='col-10 mt-2'>
                                <p className='text-xl font-semibold'>Usuario</p>
                            </div>
                        </div>
                    </Link>
                    <hr size='3' />
                </li>
                <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mr-5">
                    <Link className="nav-link text-slate-50 hover:text-slate-300 text-lg font-semibold" to="/mapa">
                        <div className='row'>
                            <div className='col-2 md:hidden'>
                                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                    <img src="src/assets/mapa.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                </div>
                            </div>
                            <div className='col-10 mt-2'>
                                <p className='text-xl font-semibold'>Mapa</p>
                            </div>
                        </div>
                    </Link>
                    <hr size='3' />
                </li>
                <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mr-5">
                    <Link className="nav-link text-slate-50 hover:text-slate-300 text-lg font-semibold" to="/viajes">
                        <div className='row'>
                            <div className='col-2 md:hidden'>
                                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                    <img src="src/assets/gps.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                </div>
                            </div>
                            <div className='col-10 mt-2'>
                                <p className='text-xl font-semibold'>+Viaje</p>
                            </div>
                        </div>
                    </Link>
                    <hr size='3' />
                </li>
                <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mr-5">
                    <Link className="nav-link text-slate-50 hover:text-slate-300 text-lg font-semibold" to='/conductores'>
                        <div className='row'>
                            <div className='col-2 md:hidden'>
                                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                    <img src="src/assets/conductor2.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                </div>
                            </div>
                            <div className='col-10 mt-2'>
                                <p className='text-xl font-semibold'>Conductores</p>
                            </div>
                        </div>
                    </Link>
                    <hr size='3' />
                </li>
                <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mr-5">
                    <Link className="nav-link text-slate-50 hover:text-slate-300 text-lg font-semibold" to='/empresas'>
                        <div className='row'>
                            <div className='col-2 md:hidden'>
                                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                    <img src="src/assets/empresa3.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                </div>
                            </div>
                            <div className='col-10 mt-2'>
                                <p className='text-xl font-semibold'>Empresas</p>
                            </div>
                        </div>
                    </Link>
                    <hr size='3' />
                </li>
                <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mr-5">
                    <Link className="nav-link text-slate-50 hover:text-slate-300 text-lg font-semibold" to='/vehiculos'>
                        <div className='row'>
                            <div className='col-2 md:hidden'>
                                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                    <img src="src/assets/camion2.png" alt="Descripción de la imagen" className='' viewBox="0 0 20 20" fill="currentColor" />
                                </div>
                            </div>
                            <div className='col-10 mt-2'>
                                <p className='text-xl font-semibold'>Vehículos</p>
                            </div>
                        </div>
                    </Link>
                    <hr size='3' />
                </li>
                <li className="nav-item transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl mr-5">
                    <Link className="nav-link text-slate-50 hover:text-slate-300 text-lg font-semibold" to='/historial'>
                        <div className='row'>
                            <div className='col-2 md:hidden'>
                                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg relative drop-shadow-md">
                                    <img src="src/assets/historia.png" alt="Descripción de la imagen" className='' fill="currentColor" />
                                </div>
                            </div>
                            <div className='col-10 mt-2'>
                                <p className='text-xl font-semibold'>Viajes</p>
                            </div>
                        </div>
                    </Link>
                    <hr size='3' />
                </li>

                <button 
                className='bg-[#BE0F34] text-white border border-white hover:bg-white hover:text-red-600 shadow-md font-[Poppins] py-2 px-3 mt-2 rounded md:ml-3 duration-500 font-bold'
                onClick={onLogout}
                >
                    Cerrar sesión
                </button>
            </ul>
        </div>
    </div>
    </>
  )
}
