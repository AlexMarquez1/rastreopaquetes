import React, { useEffect, useState } from 'react'
import TarjetaRutas from '../components/TarjetaRutas'
import BarraBusqueda from '../components/BarraBusqueda';
import { Dialog } from 'primereact/dialog';
import TarjetaMenuHistorial from '../components/TarjetaMenuHistorial';
import TarjeMenuActivas from '../components/TarjeMenuActivas';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { useFetchViajes } from '../hooks/useFetchViajes';

const styleRegistro = {
    width: '85%',
}

const styleRegistroModal = {
    width: '95%',
    background: 'rgb(190,15,52)',
}

const HistorialViajesScreen = () => {

  // const { data: viajeData, loading: loadingViaje } = useFetchViajes([]);

    const [show, setShow] = useState(null);
    const [show2, setShow2] = useState(null);
    const [show3, setShow3] = useState(null);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };

    const toggleAccordionViaje = () => {
      setShow(!show); 
    };

    const toggleAccordionConductor = () => {
        setShow2(!show2); 
    };

    const toggleAccordionVehiculo = () => {
        setShow3(!show3); 
    };

const [mensaje, setMensaje] = useState(false);
const [cardsData, setCardsData] = useState([
    { idViaje: '00001', estatus: 'completada', descripcion: 'Descripción de la Card 1', chofer: 'Andres Uribe Martinez', idVehiculo: '0001', vehiculoTipo: 'Motocicleta', partida: 'CDMX', destino: 'Durango'},
    { idViaje: '00002', estatus: 'completada', descripcion: 'Descripción de la Card 2', chofer: 'Jorge Ramirez Santana', idVehiculo: '0008', vehiculoTipo: 'torton', partida: 'CDMX', destino: 'Monterrey'},
    { idViaje: '00003', estatus: 'completada', descripcion: 'Descripción de la Card 3', chofer: 'Raul Chavarria Gudiño', idVehiculo: '0012', vehiculoTipo: 'rabon', partida: 'CDMX', destino: 'Guadalajara'},
    { idViaje: '00004', estatus: 'completada', descripcion: 'Descripción de la Card 4', chofer: 'Andres Pliego Martinez', idVehiculo: '0015', vehiculoTipo: 'nissan', partida: 'CDMX', destino: 'Guadalajara'},
  ]);
  const [itemCount, setItemCount] = useState(cardsData.length);

  const handleSearch = (searchTerm) => {
    const filteredCards = cardsData.filter((card) =>
      card.idViaje.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCardsData(filteredCards);
  };

    // const handleItemCount = (previousSlide, currentSlide) => {
    //   const newCount = cardsData.length - currentSlide;
    //   setItemCount(newCount);
    // };


  return (
    <>
    <h1 className='pt-6 px-6 text-5xl font-bold'>Historial de viajes</h1>
    <div className='container py-4'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <BarraBusqueda handleSearch={handleSearch} cardsData={cardsData}/>
        </div>
      <div className='col-sm-12 col-md-6'>
        <div className="card">
          <div className="card-body">  
            <h1 className='text-black text-left text-3xl font-semibold'>
              Total de viajes: {itemCount}
            </h1>
            <h1 className='text-black text-left text-2xl'>
              Viajes activos: <span className='font-semibold'>{cardsData.filter(card => card.estatus === 'activa').length}</span>
            </h1>
            <h1 className='text-black text-left text-2xl'>
              Viajes asignados: <span className='font-semibold'>{cardsData.filter(card => card.estatus === 'asignada').length}</span>
            </h1>
            <h1 className='text-black text-left text-2xl'>
              Viajes completados: <span className='font-semibold'>{cardsData.filter(card => card.estatus === 'completada').length}</span>
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
                <p className="fs-4">Viajes activos: {cardsData.filter(card => card.estatus === 'activa').length}</p>
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
                            cardsData.filter(trip => trip.estatus === 'activa').map((data, index)=> ( 
                                <TarjetaRutas
                                    key={index}
                                    idViaje={data.idViaje}
                                    descripcion={data.descripcion}
                                    chofer={data.chofer}
                                    idVehiculo={data.idVehiculo}
                                    partida={data.partida}
                                    destinio={data.destino}
                                    setMensaje={setMensaje}
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
                <p className="fs-4">Viajes asignados: {cardsData.filter(card => card.estatus === 'asignada').length}</p>
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
                        cardsData.filter(trip => trip.estatus === 'asignada').map((data, index)=> (
                            <TarjetaRutas
                                key={index}
                                idViaje={data.idViaje}
                                descripcion={data.descripcion}
                                chofer={data.chofer}
                                idVehiculo={data.idVehiculo}
                                partida={data.partida}
                                destinio={data.destino}
                                setMensaje={setMensaje}
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
                <p className="fs-4">Viajes completados: {cardsData.filter(card => card.estatus === 'completada').length}</p>
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
                        cardsData.filter(trip => trip.estatus === 'completada').map((data, index)=> (
                            <TarjetaRutas
                                key={index}
                                idViaje={data.idViaje}
                                descripcion={data.descripcion}
                                chofer={data.chofer}
                                idVehiculo={data.idVehiculo}
                                partida={data.partida}
                                destino={data.destino}
                                setMensaje={setMensaje}
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
            {
                show &&
                <div className='container bg-[#dfdfdf]'>
                <div className='row'>
                    <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                      <ul className="list-group list-group-flush">
                        <p className="list-group-item-dark btn mr-auto" aria-current="true">Id viaje: {'00001'}</p>
                        <li className="list-group-item btn mr-auto">Estatus: {''}</li>
                        <li className="list-group-item btn mr-auto">Direccion de partida: {''}</li>
                        <li className="list-group-item btn mr-auto">Direccion de destino: {''}</li>
                        <li className="list-group-item btn mr-auto">Hora de partida: {''}</li>
                        <li className="list-group-item btn mr-auto">Hora de destino: {''}</li>
                      </ul>
                    </div>
                    <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                      <ul className="list-group list-group-flush">
                        <p className="list-group-item-dark btn mr-auto" aria-current="true">Empresa Relacionada: {''}</p>
                        <li className="list-group-item mr-auto">Direccion de la empresa: {''}</li>
                        <li className="list-group-item mr-auto">RFC de la empresa: {''}</li>
                      </ul>
                    </div>
                    <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                      <ul className="list-group list-group-flush">
                        <p className="list-group-item-dark btn mr-auto" aria-current="true">descripcion del viaje: {''}</p>
                        <p className="list-group-item mr-auto">Nuestro viaje de carga comenzó en el puerto de origen, donde cargamos un contenedor de 40 pies lleno de mercancías diversas, incluyendo maquinarias pesadas y piezas de repuesto. Una vez que el contenedor fue asegurado correctamente, partimos hacia nuestro destino final, que estaba ubicado en una ciudad a 500 km de distancia.</p>
                      </ul>
                    </div>
                </div>
            </div>
            } 
        </section> 
        <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
            <div className="card" style={styleRegistroModal} onClick={toggleAccordionConductor}>
            <br />
            <h1 className="card-title">
                <div style={{float: 'right'}} className='px-4 text-white'>
                    <i className="pi pi-angle-down"></i>
                </div>
                <p className="fs-4 text-white">Detalles del Conductor</p>
            </h1>   
            </div>
            {
                show2 &&
                <div className='container bg-[#dfdfdf]'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                          <ul className="list-group list-group-flush">
                            <p className="list-group-item-dark btn mr-auto" aria-current="true">Id Conductor: {'00001'}</p>
                            <img className="list-group-item mr-auto h-48 w-48" src='https://randomuser.me/api/portraits/men/1.jpg' alt=""/>
                            <li className="list-group-item mr-auto">Nombre completo: {''}</li>
                            <li className="list-group-item mr-auto">Edad: {''}</li>
                            <li className="list-group-item mr-auto">Numero de contacto: {''}</li>
                            <li className="list-group-item mr-auto">Tipo de sangre: {''}</li>
                          </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                          <ul className="list-group list-group-flush">
                            <p className="list-group-item-dark btn mr-auto" aria-current="true">Numero de licencia: {''}</p>
                            <li className="list-group-item mr-auto">Tipo de licencia: {''}</li>
                            <li className="list-group-item mr-auto">Vigencia: {''}</li>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="pi pi-eye p-2"></i>
                                    Ver licencia
                            </button>
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
                <div className='container bg-[#dfdfdf]'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                          <ul className="list-group list-group-flush">
                            <p className="list-group-item-dark btn mr-auto" aria-current="true">Id vehículo: {'00001'}</p>
                            <li className="list-group-item btn mr-auto">Tipo de vehículo: {''}</li>
                            <li className="list-group-item btn mr-auto">Placas: {''}</li>
                            <li className="list-group-item btn mr-auto">Marca: {''}</li>
                            <li className="list-group-item btn mr-auto">Modelo: {''}</li>
                          </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                          <ul className="list-group list-group-flush">
                            <p className="list-group-item-dark btn mr-auto" aria-current="true">Numero de circulacion: {''}</p>
                            <li className="list-group-item mr-auto">QR: {''}</li>
                          </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                          <ul className="list-group list-group-flush">
                            <p className="list-group-item-dark btn mr-auto" aria-current="true">Seguro vehicular: {''}</p>
                            <li className="list-group-item mr-auto">QR: {''}</li>
                          </ul>
                        </div>
                    </div>
                </div>
            }  
        </section>   
    </Dialog>
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