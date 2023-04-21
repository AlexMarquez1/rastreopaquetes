import React, { useState, useCallback } from 'react';
import { GoogleMap, InfoWindow, useJsApiLoader, Marker } from '@react-google-maps/api';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useField } from 'formik';

const lib = [["places"]];
const colorTexto = {
    color: 'black',
}
const center = {
    lat: 19.410757,
    lng: -99.134695,
};

export const SeleccionarUbicacion = ({ direccionPartida, handleChange }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [direccionLlegada, setDireccionLlegada] = useState('');
    // const [direccionPartida, setDireccionPartida] = useState('');
    const [partidaSeleccionada, setPartidaSeleccionada] = useState(false);
    const [markerActivo, setMarkerActivo] = useState({});
    const [mostrarInfo, setMostrarInfo] = useState({
        0: {
            isOpen: false,
        },
        1: {
            isOpen: false,
        }
    });
    const [map, setMap] = useState(null);
    const [marcadores, setMarcadores] = useState([
        {
            lat: 0,
            lng: 0,
        }, {
            lat: 0,
            lng: 0,
        }]);

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

    // Función para manejar el cambio en el input de búsqueda de dirección
    const handleLlegadaChange = (value) => {
        setDireccionLlegada(value);
    };

    const handlePartidaChange = (value) => {
        // setDireccionPartida(value);
        if (direccionPartida === '') {
            setPartidaSeleccionada(false);
        } else {
            setPartidaSeleccionada(true);
        }
    };

    // Función para manejar la selección de una dirección de búsqueda
    const handlePartidaSelect = async (value) => {
        // setDireccionPartida(value);
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            setMarcadores([latLng, marcadores[1]]);

        } catch (error) {
            console.error('Error al obtener la ubicación:', error);
        }
        setPartidaSeleccionada(false);
    };
    const handleLlegadaSelect = async (value) => {
        setDireccionLlegada(value);
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            setMarcadores([marcadores[0], latLng]);
        } catch (error) {
            console.error('Error al obtener la ubicación:', error);
        }
    };

    // Función para manejar el evento de clic en el mapa
    const handleMapClick = (event) => {
        const { latLng } = event;
        const lat = latLng.lat();
        const lng = latLng.lng();
        setSelectedLocation({ lat, lng });

    };

    // const [field, meta, helpers] = useField(props.name);
 
    // const { value } = meta;
    // const { setValue } = helpers;
  
    // const isSelected = v => (v === value ? 'selected' : '');

    return isLoaded ? (
        <>
            <div className="container text-start">
                <div className="row">
                    <div className="col">
                        <div className='row'>
                            <div className='col'>
                                <div className="p-inputgroup flex-1">
                                    <span className='p-float-label'>
                                        <InputText/>
                                        <label htmlFor="llegada">Direccion de partida</label>
                                    </span>
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-map-marker"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <PlacesAutocomplete
                                    value={direccionLlegada}
                                    onChange={handleLlegadaChange}
                                    onSelect={handleLlegadaSelect}
                                >
                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                        <div style={{ position: 'relative' }}>
                                            <div className="p-inputgroup flex-1">
                                                <span className='p-float-label'>
                                                    <InputText {...getInputProps({
                                                        inputid: 'llegada',
                                                        name: 'llegada',
                                                    })} />
                                                    <label htmlFor="llegada">Direccion de llegada</label>
                                                </span>
                                                <span className="p-inputgroup-addon">
                                                    <i className="pi pi-map-marker"></i>
                                                </span>
                                            </div>
                                            {
                                                direccionLlegada !== '' ? <div className="autocomplete-dropdown-container">
                                                    {!loading ?
                                                        suggestions.map((suggestion, index) => {
                                                            const className = suggestion.active
                                                                ? 'suggestion-item--active'
                                                                : 'suggestion-item';
                                                            return (
                                                                <div key={index}
                                                                    {...getSuggestionItemProps(suggestion, { className })}
                                                                >
                                                                    <span>{suggestion.description}</span>
                                                                </div>
                                                            );
                                                        }) : 'Cargando...'
                                                    }
                                                </div> : <div />
                                            }
                                        </div>
                                    )}
                                </PlacesAutocomplete>
                            </div>
                        </div>
                        <div className='row'>
                            <InputTextarea rows={5} cols={30} placeholder='Descripcion' />
                        </div>
                    </div>
                    <div className='col'>
                        <GoogleMap
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            mapContainerStyle={{
                                height: '400px',
                                width: '100%',
                            }}
                            center={center}
                            zoom={10} // Nivel de zoom inicial del mapa
                        // onClick={handleMapClick} // Asignamos la función de manejo de clic en el mapa
                        >
                            {
                                marcadores.map((marcador, index) => {
                                    return marcador.lat !== 0 && marcador.lng !== 0 ?
                                        <Marker
                                            key={index}
                                            position={{
                                                lat: marcador.lat,
                                                lng: marcador.lng,
                                            }}

                                            animation={4}
                                            onClick={(props, marker, e) => { setMarkerActivo(marker); setMostrarInfo(true) }}
                                        >
                                            {
                                                // mostrarInfo && <InfoWindow
                                                //     marker={markerActivo}
                                                //     onCloseClick={() => { setMostrarInfo(false) }}
                                                // >
                                                //     <div>
                                                //         <h4>Texto</h4>
                                                //     </div>
                                                // </InfoWindow>
                                            }

                                        </Marker>
                                        : <div key={index} />
                                })
                            }
                        </GoogleMap>
                    </div>
                </div>
            </div>
        </>

    ) : <></>;
};
