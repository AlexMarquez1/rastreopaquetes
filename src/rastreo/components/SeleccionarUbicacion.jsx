import React, { useState, useCallback } from 'react';
import { GoogleMap, InfoWindow, useJsApiLoader, Marker, StandaloneSearchBox, DirectionsRenderer } from '@react-google-maps/api';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useField } from 'formik';

const lib = [["places"]];
const colorTexto = {
    color: 'black',
}

export const SeleccionarUbicacion = ({initialValue}) => {
    const [searchBox, setSearchBox] = useState();
    const [center, setCenter] = useState({
        lat: 19.410757,
        lng: -99.134695,
    });
    const [zoom, setZoom] = useState(10);
    const [marcador, setMarcador] = useState(undefined);
    const [mostrarInfo, setMostrarInfo] = useState(true);
    const [map, setMap] = useState(null);
    const [markerActivo, setMarkerActivo] = useState();
    const [direccionRender, setDireccionRender] = useState(null);
    const [direccionSeleccionada, setDireccionSeleccionada] = useState({ formatted_address: '', geometry: { location: { lat: function lat() { }, lng: function lng() { } } } });
    // const [ruta, setRuta] = useState(undefined);
    const [ fieldPartida, metaPartida, helpersPartida ] = useField({type: "custom", name:"viaje.direccionPartida", value : initialValue});
    const [ fieldLlegada, metaLlegada, helpersLlegada ] = useField({type: "custom", name:"viaje.direccionLlegada", value : initialValue});
    const [ fieldRuta, metaRuta, helpersRuta ] = useField({type: "custom", name:"viaje.ruta", value : initialValue});
    const [ fieldCoordenadasPartida, metaCoordenadasPartida, helpersCoordenadasPartida ] = useField({type: "custom", name:"viaje.coordenadasPartida", value : initialValue});
    const { value: valueCoordenadasPartida } = metaCoordenadasPartida;
    const { setValue: setValueCoordenadasPartida } = helpersCoordenadasPartida;
    const [ fieldCoordenadasLlegada, metaCoordenadasLlegada, helpersCoordenadasLlegada ] = useField({type: "custom", name:"viaje.coordenadasLlegada", value : initialValue});
    const { value: valueCoordenadasLlegada } = metaCoordenadasLlegada;
    const { setValue: setValueCoordenadasLlegada } = helpersCoordenadasLlegada;
    const { value: valuePartida } = metaPartida;
    const { setValue: setValuePartida } = helpersPartida;
    const { value: valueRuta } = metaRuta;
    const { setValue: setValueRuta } = helpersRuta;
    const { value: valueLlegada } = metaLlegada;
    const { setValue: setValueLlegada } = helpersLlegada;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAwXqH5JgdnOqOJy8F8_PrkvOqLtHhy60I",
        libraries: lib,
    });
    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        setMap(map);
    }, []);

    const onUnmount = useCallback((map) => {
        setMap(null)
    }, []);

    // Función para manejar el evento de clic en el mapa
    const handleMapClick = (event) => {
        const { latLng } = event;
        const lat = latLng.lat();
        const lng = latLng.lng();
        setMarcador({ position: { lat: lat, lng: lng } });
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === 'OK') {
                setDireccionSeleccionada(results[0]);
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });

    };

    // const [field, meta, helpers] = useField(props.name);

    // const { value } = meta;
    // const { setValue } = helpers;

    // const isSelected = v => (v === value ? 'selected' : '');


    const handlePlaceChanged = () => {
        const place = searchBox.getPlaces()[0];
        setDireccionSeleccionada(place);
        const { geometry } = place;
        const { location } = geometry;
        setCenter({ lat: location.lat(), lng: location.lng() });
        setZoom(15);
        setMarcador({ position: { lat: location.lat(), lng: location.lng() } });
    }
    const handleClickLocation = (location) => {
        console.log(location);
        setCenter({ lat: location.lat, lng: location.lng });
        setZoom(20);
    }

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
                        handleDirectionsResponse(result);
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        } else {
            console.log('Please mark your destination in the map first!');
        }
    }

    const handleDirectionsResponse = (response) => {
        if (direccionRender) {
          // Si ya hay un DirectionsRenderer, lo eliminamos del mapa
          direccionRender.setMap(null);
          
        }
    
        // Creamos un nuevo DirectionsRenderer con la nueva respuesta
        const newDirectionsRenderer = new window.google.maps.DirectionsRenderer({
          directions: response,
          map: map.current,
        });
    
        // Lo guardamos en el estado
        setDireccionRender(newDirectionsRenderer);
        setValueRuta(response);
      };

      const handleClearDirections = () => {
        if (direccionRender) {
          // Si ya hay un DirectionsRenderer, lo eliminamos del mapa
          direccionRender.setMap(null);
        }
    
        setValueRuta(null);
      };

    return isLoaded ? (
        <>
            <div className="container text-start" style={{ position: 'relative', height: '500px' }}>
                <div className='row'>
                    <div className='col'>
                        <div className="p-inputgroup flex-1">
                            <InputText
                                {...fieldPartida}
                                name="viaje.direccionPartida"
                                placeholder='Direccion de partida'
                                value={valuePartida}
                                disabled={true}
                            />
                            <Button
                                className='bg-indigo-500'
                                icon="pi pi-map-marker"
                                type='button'
                                disabled={valuePartida === '' ? true : false}
                                onClick={() => { handleClickLocation(valueCoordenadasPartida); }}
                            />
                        </div>
                    </div>
                    <div className='col'>
                        <div className="p-inputgroup flex-1">
                            <InputText
                                {...fieldLlegada}
                                name="viaje.direccionLlegada"
                                placeholder='Direccion de llegada'
                                value={valueLlegada}
                                disabled={true}
                            />
                            <Button
                            className='bg-indigo-500'
                                icon="pi pi-map-marker"
                                type='button'
                                disabled={valueLlegada === '' ? true : false}
                                onClick={() => { handleClickLocation(valueCoordenadasLlegada); }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <GoogleMap
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            mapContainerStyle={{
                                height: '400px',
                                width: '100%',
                            }}
                            center={center}
                            zoom={zoom} // Nivel de zoom inicial del mapa
                            onClick={handleMapClick} // Asignamos la función de manejo de clic en el mapa
                        >

                            {
                                //Marcador temporal
                                marcador !== undefined && <Marker

                                    position={{
                                        lat: marcador.position.lat,
                                        lng: marcador.position.lng,
                                    }}

                                    animation={4}
                                    onClick={(props, marker, e) => { setMarkerActivo(marker); setMostrarInfo(!mostrarInfo) }}
                                >
                                    {
                                        mostrarInfo && <InfoWindow
                                            // marker={markerActivo}
                                            position={{
                                                lat: marcador.position.lat,
                                                lng: marcador.position.lng,
                                            }}
                                            onCloseClick={() => { setMostrarInfo(false) }}

                                        >
                                            <div>
                                                <h4>Dirección: {direccionSeleccionada.formatted_address}</h4>
                                                <br />
                                                {/* <h4>Coordenadas: {direccionSeleccionada.geometry.localtion.lat()}</h4> */}
                                                <br />
                                                <h4>Selecciona si esta ubicacion es el punto de partida o el punto de llegada</h4>
                                                <div className="container text-center" >
                                                    <div className='row'>
                                                        <div className='col'>
                                                            <Button
                                                                className='bg-indigo-500'
                                                                icon="pi pi-map-marker"
                                                                label='Punto de partida'
                                                                type='button'
                                                                onClick={() => {
                                                                    setValuePartida(direccionSeleccionada.formatted_address);
                                                                    setValueCoordenadasPartida({
                                                                        lat: direccionSeleccionada.geometry.location.lat(),
                                                                        lng: direccionSeleccionada.geometry.location.lng()
                                                                    });
                                                                    if (valueLlegada !== '') {
                                                                        handleClearDirections();
                                                                        obtenerRuta(direccionSeleccionada.formatted_address,valueLlegada);
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                        <div className='col'>
                                                            <Button
                                                                className='bg-indigo-500'
                                                                icon="pi pi-map-marker"
                                                                label='Punto de llegada'
                                                                type='button'
                                                                onClick={() => {
                                                                    setValueLlegada(direccionSeleccionada.formatted_address);
                                                                    setValueCoordenadasLlegada({
                                                                        lat: direccionSeleccionada.geometry.location.lat(),
                                                                        lng: direccionSeleccionada.geometry.location.lng()
                                                                    });
                                                                    if (valuePartida !== '') {
                                                                        handleClearDirections();
                                                                        obtenerRuta(valuePartida, direccionSeleccionada.formatted_address);
                                                                    }
                                                                }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </InfoWindow>
                                    }

                                </Marker>
                            }

                            {valueRuta !== undefined && (<DirectionsRenderer directions={valueRuta} />)}

                            <StandaloneSearchBox
                                onLoad={(ref) => { setSearchBox(ref); }}
                                onPlacesChanged={handlePlaceChanged}
                            >
                                <div className="p-inputgroup flex-1">
                                    <InputText
                                        type="text"
                                        placeholder="Buscar dirección..."
                                        style={{
                                            boxSizing: 'border-box',
                                            border: '1px solid transparent',
                                            width: '50%',
                                            height: '32px',
                                            padding: '0 12px',
                                            borderRadius: '20px',
                                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                                            fontSize: '14px',
                                            outline: 'none',
                                            textOverflow: 'ellipses',
                                            position: 'absolute',
                                            zIndex: '1',
                                            top: '10px',
                                            left: '25%',
                                        }}
                                    />
                                </div>
                            </StandaloneSearchBox>
                        </GoogleMap>
                        {
                            
                            valueRuta !== undefined &&
                             <div style={{ 
                                position: 'absolute', 
                                top: '75%', 
                                left: '20px',
                                width: '35%', 
                                backgroundColor: 'white', 
                                padding: '10px',
                                border: '1px solid transparent',
                                borderRadius: '20px',
                                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                                 }}>
                            
                            <h3>Distancia aproximada: {valueRuta && valueRuta.routes[0].legs[0].distance.text}</h3>
                            <p>Duracion aproximada: {valueRuta && valueRuta.routes[0].legs[0].duration.text}</p>
                          </div>
                        }
                    </div>
                </div>
            </div>
        </>

    ) : <></>;
};


