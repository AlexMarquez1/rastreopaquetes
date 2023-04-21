import React, { useEffect, useState } from 'react'
import TarjetaRutas from '../components/TarjetaRutas'
import BarraBusqueda from '../components/BarraBusqueda';
import { Dialog } from 'primereact/dialog';
import TarjetaMenuHistorial from '../components/TarjetaMenuHistorial';
import TarjeMenuActivas from '../components/TarjeMenuActivas';

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

const styleRegistroModal = {
    width: '95%',
    background: 'rgb(194,103,72)',
}

const HistorialViajesScreen = () => {

    const [show, setShow] = useState(null);
    const [show2, setShow2] = useState(null);
    const [show3, setShow3] = useState(null);

    const toggleAccordionViaje = () => {
      setShow(!show); 
    };

    const toggleAccordionConductor = () => {
        setShow2(!show2); 
    };

    const toggleAccordionVehiculo = () => {
        setShow3(!show3); 
    };

//     const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, []);

//   console.log(data)

const [mensaje, setMensaje] = useState(false);
const [cardsData, setCardsData] = useState([
    { idViaje: '00001', estatus: 'activa', descripcion: 'Descripción de la Card 1', chofer: 'Andres Uribe Martinez', idVehiculo: '0001', vehiculoTipo: 'Motocicleta', partida: 'CDMX', destino: 'Durango'},
    { idViaje: '00002', estatus: 'activa', descripcion: 'Descripción de la Card 2', chofer: 'Jorge Ramirez Santana', idVehiculo: '0008', vehiculoTipo: 'torton', partida: 'CDMX', destino: 'Monterrey'},
    { idViaje: '00003', estatus: 'asignada', descripcion: 'Descripción de la Card 3', chofer: 'Raul Chavarria Gudiño', idVehiculo: '0012', vehiculoTipo: 'rabon', partida: 'CDMX', destino: 'Guadalajara'},
    { idViaje: '00004', estatus: 'completada', descripcion: 'Descripción de la Card 4', chofer: 'Andres Pliego Martinez', idVehiculo: '0015', vehiculoTipo: 'nissan', partida: 'CDMX', destino: 'Guadalajara'},
    { idViaje: '00005', estatus: 'completada', descripcion: 'Descripción de la Card 5', chofer: 'Andres Uribe Martinez', idVehiculo: '0009', vehiculoTipo: 'nissan', partida: 'CDMX', destino: 'Yucatan'},
    { idViaje: '00004', estatus: 'completada', descripcion: 'Descripción de la Card 4', chofer: 'Andres Pliego Martinez', idVehiculo: '0015', vehiculoTipo: 'nissan', partida: 'CDMX', destino: 'Guadalajara'},
    { idViaje: '00005', estatus: 'completada', descripcion: 'Descripción de la Card 5', chofer: 'Andres Uribe Martinez', idVehiculo: '0009', vehiculoTipo: 'nissan', partida: 'CDMX', destino: 'Yucatan'},
    { idViaje: '00004', estatus: 'completada', descripcion: 'Descripción de la Card 4', chofer: 'Andres Pliego Martinez', idVehiculo: '0015', vehiculoTipo: 'nissan', partida: 'CDMX', destino: 'Guadalajara'},
    { idViaje: '00005', estatus: 'completada', descripcion: 'Descripción de la Card 5', chofer: 'Andres Uribe Martinez', idVehiculo: '0009', vehiculoTipo: 'nissan', partida: 'CDMX', destino: 'Yucatan'},
  ]);

  const handleSearch = (searchTerm) => {
    const filteredCards = cardsData.filter((card) =>
      card.idViaje.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCardsData(filteredCards);
  };

  return (
    <>
    <h1 className='pt-4'>Historial de rutas</h1>
    <div className='container'>
        <BarraBusqueda handleSearch={handleSearch} cardsData={cardsData}/>
    </div>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
            <br />
            <h1 className="card-title">
                <p className="fs-4">Rutas activas</p>
            </h1>
            <br />
            <div className='container'>
                <div className='row'>
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
                </div>
            </div>
        </div>
    </section>
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
        <br />
            <h1 className="card-title">
                <p className="fs-4">Rutas asignadas</p>
            </h1>
            <br />
            <div className='container'>
                <div className='row'>
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
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </section> 
    <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
        <div className="card form" style={styleRegistro}>
        <br />
            <h1 className="card-title">
                <p className="fs-4">Rutas completadas</p>
            </h1>
            <br />
            <div className='container'>
                <div className='row'>
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
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </section> 
    {/* MODAL */}
    <Dialog header="Detalles de viaje" visible={mensaje} style={{ width: '90vw' }} onHide={() => setMensaje(false)}>
        <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
            <div className="card" style={styleRegistroModal} onClick={toggleAccordionViaje}>
            <br />
            <h1 className="card-title">
                <div style={{float: 'right'}} className='px-4'>
                    <i className="pi pi-angle-down"></i>
                </div>
                <p className="fs-4">Detalles del viaje</p>
            </h1>   
            </div>
            {
                show &&
                <div className='container'>
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
                <div style={{float: 'right'}} className='px-4'>
                    <i className="pi pi-angle-down"></i>
                </div>
                <p className="fs-4">Detalles del Conductor</p>
            </h1>   
            </div>
            {
                show2 &&
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                          <ul className="list-group list-group-flush">
                            <p className="list-group-item-dark btn mr-auto" aria-current="true">Id Conductor: {'00001'}</p>
                            <img className="list-group-item btn mr-auto h-7 w-7 rounded-full" src='https://randomuser.me/api/portraits/men/1.jpg' alt=""/>
                            <li className="list-group-item btn mr-auto">Nombre completo: {''}</li>
                            <li className="list-group-item btn mr-auto">Edad: {''}</li>
                            <li className="list-group-item btn mr-auto">Numero de contacto: {''}</li>
                            <li className="list-group-item btn mr-auto">Tipo de sangre: {''}</li>
                          </ul>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                          <ul className="list-group list-group-flush">
                            <p className="list-group-item-dark btn mr-auto" aria-current="true">Numero de licencia: {''}</p>
                            <li className="list-group-item mr-auto">Tipo de licencia: {''}</li>
                            <li className="list-group-item mr-auto">Vigencia: {''}</li>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="pi pi-download p-2"></i>
                                    Descargar licencia
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
                <div style={{float: 'right'}} className='px-4'>
                    <i className="pi pi-angle-down"></i>
                </div>
                <p className="fs-4">Detalles del vehiculo</p>
            </h1>   
            </div>
            {
                show3 &&
                <div className='container'>
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
    <div className='container p-4'>
    <TarjeMenuActivas/>
    </div>
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