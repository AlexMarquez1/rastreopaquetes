import React, { useEffect, useState } from 'react'
import TarjetaRutas from '../components/TarjetaRutas'
import BarraBusqueda from '../components/BarraBusqueda';

const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

const HistorialViajesScreen = () => {

//     const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, []);

//   console.log(data)


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
    <h1>Historial de rutas</h1>
    <div className='container'>
        <BarraBusqueda handleSearch={handleSearch}/>
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