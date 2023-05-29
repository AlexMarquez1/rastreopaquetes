import React, { useEffect, useState } from 'react'
import TarjetaRutas from '../components/TarjetaRutas'
import BarraBusqueda from '../components/BarraBusqueda';
import { Dialog } from 'primereact/dialog';
import TarjetaMenuHistorial from '../components/TarjetaMenuHistorial';
import TarjeMenuActivas from '../components/TarjeMenuActivas';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { useFetchViajes } from '../hooks/useFetchViajes';

// context del usuario que inicio sesion
import useAuth from '../../hooks/useAuth';
import ModalHistorialViajes from '../components/ModalHistorialViajes';
import { ModalHistorial } from '../components/ModalHistorial';

const styleRegistro = {
    width: '85%',
}

const styleRegistroModal = {
    width: '95%',
    background: 'rgb(190,15,52)',
}

//// COMPONENTE ////
const HistorialViajesScreen = () => {

  const [busqueda, setBusqueda] = useState('')
  const [mensaje, setMensaje] = useState(false);
  const [dataViaje, setDataViaje] = useState(null);
  // const [itemCount, setItemCount] = useState(viajesUsuario.length);
  // estate de abrir y cerrar de los acordiones del modal
  const [show, setShow] = useState(null);
  const [show2, setShow2] = useState(null);
  const [show3, setShow3] = useState(null);

  // estate del viaje inicial
  const [viajeActual, setViajeActual] = useState({
    idempresa: '',
    razonsocial: '',
    direccion: '',
    rfc: '',
    telefono: '',
    email: '',
    giro: '',
    idusuario: '',
  });

  const [tarjetaViajeSeleccionado, setTarjetaViajeSeleccionado] = useState(null);

  // obtencion del usuario que inicio sesion
  const { userAuth } = useAuth();

  // obtencion de la data de todos los viajes 
    const { data: viajeData, loading: loadingViaje } = useFetchViajes(viajeActual);

    // flitrado de solo los viajes del usuario que inicio sesion
    const [viajesUsuario, setViajesUsuario] = useState([]);

    useEffect(() => {
      if (viajeData) {
        const viajesFiltrados = viajeData.filter(item => item.usuario.idusuario === userAuth.idusuario);
        setViajesUsuario(viajesFiltrados);
      }
    }, [viajeData, userAuth]);

    // responsive del carusel
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };

    // funciones de abrir y cerra de los acordiones del modal
    const toggleAccordionViaje = () => {
      setMensaje(true);
      setShow(!show); 
    };

    const toggleAccordionConductor = () => {
        setShow2(!show2); 
    };

    const toggleAccordionVehiculo = () => {
        setShow3(!show3); 
    };

  // función que se acciona cada que se escribe en el search
  const handleSearch = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  // función que filtra la entra del search 
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=viajesUsuario.filter((elemento)=>{
       if(elemento.conductor.nombrecompleto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.idviaje.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.empresa.razonsocial.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
       )
      {
        return elemento;
      }
    });
    setViajesUsuario(resultadosBusqueda);
  }

  // estructura para calcular la edad apartir de la fecha de nacimiento
  const [edadActual, setEdadActual] = useState(null);

  useEffect(() => {
    if (tarjetaViajeSeleccionado) {
      const fechaNacimiento = new Date(tarjetaViajeSeleccionado.conductor.fechanacimiento);
      const edad = calculateAge(fechaNacimiento);
      setEdadActual(edad);
    }
  }, [tarjetaViajeSeleccionado]);

  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }


  return (
    <>
    <h1 className='pt-6 px-6 text-5xl font-bold'>Historial de viajes</h1>
    <div className='container py-4'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <BarraBusqueda handleSearch={handleSearch} cardsData={viajesUsuario} setDataViaje={setDataViaje} dataViaje={dataViaje} busqueda={busqueda}/>
        </div>
      <div className='col-sm-12 col-md-6'>
        <div className="card">
          <div className="card-body">  
            <h1 className='text-black text-left text-3xl font-semibold'>
              {/* Total de viajes: {itemCount} */}
            </h1>
            <h1 className='text-black text-left text-2xl'>
              Viajes activos: <span className='font-semibold'>{viajesUsuario.filter(card => card.estatus === 'activo').length}</span>
            </h1>
            <h1 className='text-black text-left text-2xl'>
              Viajes programados: <span className='font-semibold'>{viajesUsuario.filter(card => card.estatus === 'programado').length}</span>
            </h1>
            <h1 className='text-black text-left text-2xl'>
              Viajes completados: <span className='font-semibold'>{viajesUsuario.filter(card => card.estatus === 'completado').length}</span>
            </h1>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='bg-white border-2 border-t-red-600'>
    <section className="section_item flex-container py-6 drop-shadow-md">
        <div className="card form drop-shadow-md"style={styleRegistro}>
            <br />
            <h1 className="card-title">
                <p className="fs-4">Viajes activos: {viajesUsuario.filter(card => card.estatus === 'activo').length}</p>
            </h1>
            <br />
            <div className='container'>
                <div className='text-center'>
                    <Carousel 
                      renderDotsOutside={true} 
                      infinite={true} 
                      swipeable={true}
                      draggable={false}
                      showDots={true}
                      responsive={responsive}
                      autoPlay={false}
                      autoPlaySpeed={3000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={['tablet', 'mobile']}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"                    
                    > 
                        {
                            viajesUsuario.filter(trip => trip.estatus === 'activo').map((data, index)=> ( 
                                <TarjetaRutas
                                  key={index}
                                  data={data}
                                  idViaje={data.idviaje}
                                  descripcion={data.descripcion}
                                  chofer={data.conductor.nombrecompleto}
                                  empresa={data.empresa.razonsocial}
                                  idVehiculo={data.vehiculo.idvehiculo}
                                  tipoVehiculo={data.vehiculo.tipovehiculo}
                                  marcaVehiculo={data.vehiculo.marca}
                                  modeloVehiculo={data.vehiculo.modelo}
                                  partida={data.direccionpartida}
                                  fechaPartida={data.fechasalida}
                                  fechaLlegada={data.fechallegada}
                                  destino={data.direccionllegada}
                                  setMensaje={setMensaje}
                                  latPartida={data.latpartida}
                                  latLlegada={data.latllegada}
                                  lngpartida={data.lngpartida}
                                  lngLlegada={data.lngllegada}
                                  setTarjetaViajeSeleccionado={setTarjetaViajeSeleccionado}
                                /> 
                            ))
                        }
                    </Carousel>   
                </div>
            </div>
        </div>
    </section>
    </div>
    
    <div className='border-double border-2 border-t-red-600'>
    <section className="section_item flex-container py-6 drop-shadow-md">
        <div className="card form" style={styleRegistro}>
        <br />
            <h1 className="card-title">
                <p className="fs-4">Viajes programados: {viajesUsuario.filter(card => card.estatus === 'programado').length}</p>
            </h1>
            <br />
            <div className='container'>
                <div className='text-center'>
                    <Carousel 
                        renderDotsOutside={true} 
                        infinite={true} 
                        swipeable={true}
                      draggable={false}
                      showDots={true}
                      responsive={responsive}
                      autoPlay={false}
                      autoPlaySpeed={3000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={['tablet', 'mobile']}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                    > 
                        {
                        viajesUsuario.filter(trip => trip.estatus === 'programado').map((data, index)=> (
                            <TarjetaRutas
                              key={index}
                              data={data}
                              idViaje={data.idviaje}
                              descripcion={data.descripcion}
                              chofer={data.conductor.nombrecompleto}
                              empresa={data.empresa.razonsocial}
                              idVehiculo={data.vehiculo.idvehiculo}
                              tipoVehiculo={data.vehiculo.tipovehiculo}
                              marcaVehiculo={data.vehiculo.marca}
                              modeloVehiculo={data.vehiculo.modelo}
                              partida={data.direccionpartida}
                              fechaPartida={data.fechasalida}
                              fechaLlegada={data.fechallegada}
                              destino={data.direccionllegada}
                              setMensaje={setMensaje}
                              latPartida={data.latpartida}
                              latLlegada={data.latllegada}
                              lngpartida={data.lngpartida}
                              lngLlegada={data.lngllegada}
                              setTarjetaViajeSeleccionado={setTarjetaViajeSeleccionado}
                            />
                        ))
                        }
                    </Carousel>
                    
                </div>
            </div>
        </div>
    </section>
    </div>
    
    <div className='bg-white border-2 border-t-red-600'>
    <section className="section_item flex-container py-6 drop-shadow-md">
        <div className="card form drop-shadow-md" style={styleRegistro}>
        <br />
            <h1 className="card-title">
                <p className="fs-4">Viajes completados: {viajesUsuario.filter(card => card.estatus === 'completado').length}</p>
            </h1>
            <br />
            <div className='container'>
                <div className='text-center'>
                    <Carousel 
                      renderDotsOutside={true} 
                      infinite={true} 
                      swipeable={true}
                      draggable={true}
                      showDots={false}
                      responsive={responsive}
                      autoPlay={false}
                      autoPlaySpeed={3000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={['tablet', 'mobile']}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                    >
                        {
                        viajesUsuario.filter(trip => trip.estatus === 'completado').map((data, index)=> (
                            <TarjetaRutas
                                key={index}
                                data={data}
                                idViaje={data.idviaje}
                                descripcion={data.descripcion}
                                chofer={data.conductor.nombrecompleto}
                                empresa={data.empresa.razonsocial}
                                idVehiculo={data.vehiculo.idvehiculo}
                                tipoVehiculo={data.vehiculo.tipovehiculo}
                                marcaVehiculo={data.vehiculo.marca}
                                modeloVehiculo={data.vehiculo.modelo}
                                partida={data.direccionpartida}
                                fechaPartida={data.fechasalida}
                                fechaLlegada={data.fechallegada}
                                destino={data.direccionllegada}
                                setMensaje={setMensaje}
                                latPartida={data.latpartida}
                                latLlegada={data.latllegada}
                                lngpartida={data.lngpartida}
                                lngLlegada={data.lngllegada}
                                setTarjetaViajeSeleccionado={setTarjetaViajeSeleccionado}
                            />
                        ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    </section> 
    </div> 
     
    {/* MODAL */}
    <Dialog header="Detalles de viaje" visible={mensaje} style={{ width: '90vw' }} onHide={() => setMensaje(false)}>
        <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
            <div className="card" style={styleRegistroModal} onClick={toggleAccordionViaje}>
            <br />
            <h1 className="card-title">
                <div style={{float: 'right'}} className='px-4 text-white'>
                    <i className="pi pi-angle-down"></i>
                </div>
                <p className="fs-4 text-white">Detalles del viaje</p>
            </h1>   
            </div>
            {show && (
              <div className="container bg-[#dfdfdf] rounded-md">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-xl-4 p-4 border-r-4">
                    <ul>
                      <h2 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">
                        Id viaje: <span className="font-normal">{tarjetaViajeSeleccionado.idviaje}</span>
                      </h2>
                      <li className="mr-auto font-bold text-left pb-2">
                        Estatus: <span className="font-normal">{tarjetaViajeSeleccionado.estatus}</span>
                      </li>
                      <li className="mr-auto font-bold text-left pb-2">
                        Direccion de partida: <span className="font-normal">{tarjetaViajeSeleccionado.direccionpartida}</span>
                      </li>
                      <li className="mr-auto font-bold text-left pb-2">
                        Direccion de destino: <span className="font-normal">{tarjetaViajeSeleccionado.direccionllegada}</span>
                      </li>
                      <li className="mr-auto font-bold text-left pb-2">
                        Hora de partida: <span className="font-normal">{tarjetaViajeSeleccionado.horapartida}</span>
                      </li>
                      <li className="mr-auto font-bold text-left pb-2">
                        Hora de destino: <span className="font-normal">{tarjetaViajeSeleccionado.horallegada}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-xl-4 p-4 border-r-4">
                    <ul>
                      <h2 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">
                        Empresa Relacionada: <span className="font-normal">{tarjetaViajeSeleccionado.empresa.razonsocial}</span>
                      </h2>
                      <li className="mr-auto font-bold text-left pb-2">
                        Direccion de la empresa: <span className="font-normal">{tarjetaViajeSeleccionado.empresa.direccion}</span>
                      </li>
                      <li className="mr-auto font-bold text-left pb-2">
                        RFC de la empresa: <span className="font-normal">{tarjetaViajeSeleccionado.empresa.rfc}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-xl-4 p-4">
                    <ul>
                      <h2 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">
                        Descripcion del viaje:
                      </h2>
                      <li className="mr-auto font-normal text-left pb-2">{tarjetaViajeSeleccionado.descripcion}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
        </section> 
        <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
            <div className="card" style={styleRegistroModal} onClick={toggleAccordionConductor}>
            <br />
            <h1 className="card-title">
                <div style={{float: 'right'}} className='px-4 text-white'>
                    <i className="pi pi-angle-down"></i>
                </div>
                <p className="fs-4 text-white">Detalles del conductor</p>
            </h1>   
            </div>
            {
                show2 &&
                <div className='container bg-[#dfdfdf] rounded-md'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4 border-r-4'>
                          <ul className="">
                            <h2 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">Id Conductor: <span className='font-normal'>{tarjetaViajeSeleccionado.conductor.idconductor}</span></h2>
                            <img className="mr-auto font-bold text-left pb-2 h-48 w-48" src='https://randomuser.me/api/portraits/men/1.jpg' alt=""/>
                            <li className="mr-auto font-bold text-left pb-2">Nombre completo: <span className='font-normal'>{tarjetaViajeSeleccionado.conductor.nombrecompleto}</span></li>
                            <li className="mr-auto font-bold text-left pb-2">Edad: <span className='font-normal'>{edadActual}</span></li>
                            <li className="mr-auto font-bold text-left pb-2">Numero de contacto: <span className='font-normal'>{tarjetaViajeSeleccionado.conductor.telefono}</span></li>
                            <li className="mr-auto font-bold text-left pb-2">Tipo de sangre: <span className='font-normal'>{tarjetaViajeSeleccionado.conductor.tiposangre}</span></li>
                          </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4 border-r-4'>
                          <ul className="">
                            <h2 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">Numero de licencia: <span className='font-normal'>{tarjetaViajeSeleccionado.conductor.numerolicencia}</span></h2>
                            <li className="mr-auto font-bold text-left pb-2">Tipo de licencia: <span className='font-normal'>{tarjetaViajeSeleccionado.conductor.tipolicencia}</span></li>
                            <li className="mr-auto font-bold text-left pb-2">Vigencia: <span className='font-normal'>{tarjetaViajeSeleccionado.conductor.fechavencimiento}</span></li>
                            <div className='text-left'>
                              <button type="button" className="bg-[#BE0F34] text-white border border-white hover:bg-white hover:text-red-600 shadow-md font-[Poppins] py-2 px-3 mt-4 rounded duration-500 font-bold justify-items-start">
                                  <i className="pi pi-eye p-2"></i>
                                      Ver licencia
                              </button>
                            </div> 
                          </ul>
                        </div>

                    </div>
                </div>
            }
            
        </section>
        <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
            <div className="card" style={styleRegistroModal} onClick={toggleAccordionVehiculo}>
            <br />
            <h1 className="card-title">
                <div style={{float: 'right'}} className='px-4 text-white'>
                    <i className="pi pi-angle-down"></i>
                </div>
                <p className="fs-4 text-white">Detalles del vehiculo</p>
            </h1>   
            </div>
            {
                show3 &&
                <div className='container bg-[#dfdfdf] rounded-md'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4 border-r-4'>
                          <ul className="list-group list-group-flush">
                            <h2 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">Id vehículo: <span className='font-normal'>{tarjetaViajeSeleccionado.vehiculo.idvehiculo}</span></h2>
                            <li className="mr-auto font-bold text-left pb-2">Tipo de vehículo: <span className='font-normal'>{tarjetaViajeSeleccionado.vehiculo.tipovehiculo}</span></li>
                            <li className="mr-auto font-bold text-left pb-2">Placas: <span className='font-normal'>{tarjetaViajeSeleccionado.vehiculo.placas}</span></li>
                            <li className="mr-auto font-bold text-left pb-2">Marca: <span className='font-normal'>{tarjetaViajeSeleccionado.vehiculo.marca}</span></li>
                            <li className="mr-auto font-bold text-left pb-2">Modelo: <span className='font-normal'>{tarjetaViajeSeleccionado.vehiculo.modelo}</span></li>
                            <li className="mr-auto font-bold text-left pb-2">Numero de serie: <span className='font-normal'>{tarjetaViajeSeleccionado.vehiculo.numeroserie}</span></li>
                          </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4 border-r-4 ra'>
                          <ul className="list-group list-group-flush">
                            <h2 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">tarjeta de circulación: <span>{tarjetaViajeSeleccionado.vehiculo.numerocirculacion}</span></h2>
                            <div className='text-left'>
                              <button type="button" className="bg-[#BE0F34] text-white border border-white hover:bg-white hover:text-red-600 shadow-md font-[Poppins] py-2 px-3 mt-4 rounded duration-500 font-bold justify-items-start">
                                  <i className="pi pi-eye p-2"></i>
                                      Ver tarjeta de circulación
                              </button>
                            </div>
                          </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                          <ul className="list-group list-group-flush">
                            <h2 className="text-lg mr-auto font-bold text-left pb-3" aria-current="true">Seguro vehicular: <span className='font-normal'>{tarjetaViajeSeleccionado.vehiculo.nombreseguro}</span></h2>
                            <div className='text-left'>
                              <button type="button" className="bg-[#BE0F34] text-white border border-white hover:bg-white hover:text-red-600 shadow-md font-[Poppins] py-2 px-3 mt-4 rounded duration-500 font-bold justify-items-start">
                                  <i className="pi pi-eye p-2"></i>
                                      Ver poliza de seguro
                              </button>
                            </div>
                          </ul>
                        </div>
                    </div>
                </div>
            }  
        </section>   
    </Dialog>

    {/* <TarjetaMenuHistorial/> */}
    </>
  )
}

export default HistorialViajesScreen







// {
//     idViaje: '00001',
//     fechaInicioViaje: '',
//     fechaFinalViaje: '',
//     horaInicioViaje: '',
//     horaFinalViaje: '',
//     direccionPartida: 'CDMX',
//     direccionDestino: 'CDMX',
//     longitudPartida: '123456',
//     latitudPartida: '123456',
//     longitudDestino: '123456',
//     latitudDestino: '123456',
//     estatus: 'activa',
//     descripcionViaje: 'Descripción de la Card 1',
    
//     Empresa: {
//         rasonSocial: 'Aqui va el nombre de la empresa',
//         direccion: 'direccion de la empresa',
//         RFC: 'RFC de la empresa',
//     },
//     Chofer: {
//         idChofer: 'c1',
//         nombreCompleto: 'Andres Uribe Martinez',
//         edad: '30',
//         tipoDeSangre: 'A',
//         numeroContacto: '551234589',
//         foto: 'URL de la foto del chofer',
//         numeroLicencia: '',
//         tipoLicencia: '',
//         archivoLicencia: ''
//         Vehiculo: {
//             idVehiculo: '0001',
//             vehiculoTipo: 'Motocicleta',
//             marca: '',
//             modelo: '',
//             placa: '',
//             tarjetaDeCirculacion: 'URL de la tarjeta de circulacion',
//             seguro: 'URL de la polisa de seguro',
//         }
//     }
// },