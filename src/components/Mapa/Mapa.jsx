import { GoogleMap, Marker, useJsApiLoader, DirectionsRenderer } from '@react-google-maps/api';
import { Box, Button, Flex, } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react';
import { Conductores } from './Conductores';
import io from 'socket.io-client';
import { Marcador } from './Marcador';
import { PrimeIcons } from 'primereact/api';
import { MarcadorMensaje } from './MarcadorMensaje';
import {socketUrl} from '../../helpers/VariablesGlobales';

const containerStyle = {
    width: '100%',
    height: '100%'
};

// const center = {
//     lat: 19.410757,
//     lng: -99.134695,
// };

const options = {
    minZoom: 5,
    maxZoom: 18,
    // gestureHandling: "greedy" // No permite que se desplace el mapa
    // scrollwheel: false // No permite hacer zoom con el scroll
}

const socket = io.connect(socketUrl, {
    transports: ['websocket']
});
export const Mapa = () => {
    const [conductorSeleccionado, setConductorSeleccionado] = useState(null);
    const [center, setCenter] = useState({
        lat: 19.410757,
        lng: -99.134695,
    });
    const [seguirUbicacion, setSeguirUbicacion] = useState(false)

    const [mensajeMarcadores, setMensajeMarcadores] = useState([]);

    const [direccion, setDireccion] = useState(null);
    const [map, setMap] = useState(null);

    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyAwXqH5JgdnOqOJy8F8_PrkvOqLtHhy60I"
    // });
    
    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        setMap(map)
    }, []);
    
    const onUnmount = useCallback((map) => {
        setMap(null)
    }, []);
    // console.log('Conductor seleccionado: ', conductorSeleccionado);

    const obtenerRuta = (origin, destination) => {
        const directionsService = new google.maps.DirectionsService();

        if (origin !== null && destination !== null) {
            directionsService.route(
                {
                    origin: origin,
                    destination: destination,
                    travelMode: google.maps.TravelMode.DRIVING
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        // this.setState({
                        //     directions: result
                        // });
                        setDireccion(result);
                        console.log(result.routes[0].legs[0]);
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        } else {
            console.log('Please mark your destination in the map first!');
        }

    }

    return  (
        <Flex

            flexDirection='column'
            alignItems='center'
            h='100vh'
            w='100vw'
        >
            <Box position='' h='100%' w='100%'>
                <GoogleMap
                    zoom={5}
                    mapContainerStyle={containerStyle}
                    center={center}
                    options={options}
                    onLoad={onLoad}
                    onUnmount={onUnmount}

                >

                    <Marcador socket={socket} conductorSeleccionado={conductorSeleccionado} setCenter={setCenter} />
                    <MarcadorMensaje mensajes={mensajeMarcadores} setmensaje={setMensajeMarcadores} socket={socket} />
                    {direccion !== null && (<DirectionsRenderer directions={direccion} />)}



                </GoogleMap>
            </Box>
            <Conductores
                socket={socket}
                conductorSeleccionado={conductorSeleccionado}
                setConductorSeleccionado={setConductorSeleccionado}
                obtenerRuta={(origen, destino) => {
                    obtenerRuta(origen, destino);
                }}
                direccion={setDireccion}
                setMensajeMarcadores={setMensajeMarcadores}
            />
        </Flex>

    ) 

    5559252688
}