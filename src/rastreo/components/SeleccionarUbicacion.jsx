import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';
import { InputText } from 'primereact/inputtext';

const lib = [["places", "geocoding"]];
const colorTexto = {
    color: 'black',
}

export const SeleccionarUbicacion = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [direccionLlegada, setDireccionLlegada] = useState('');
    const [direccionPartida, setDireccionPartida] = useState('');
    const [marcadores, setMarcadores] = useState([
        {
            lat: 0,
            lng: 0,
        }, {
            lat: 0,
            lng: 0,
        }]);

    // Función para manejar el cambio en el input de búsqueda de dirección
    const handleLlegadaChange = (value) => {
        setDireccionLlegada(value);
    };

    const handlePartidaChange = (value) => {
        setDireccionPartida(value);
    };

    // Función para manejar la selección de una dirección de búsqueda
    const handlePartidaSelect = async (value) => {
        setDireccionPartida(value);
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            setMarcadores([ latLng, marcadores[1]]);

        } catch (error) {
            console.error('Error al obtener la ubicación:', error);
        }
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

    return (
        <>
            <LoadScript
                googleMapsApiKey="AIzaSyAwXqH5JgdnOqOJy8F8_PrkvOqLtHhy60I"
                libraries={lib}
            >

                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col">
                            <PlacesAutocomplete
                                value={direccionPartida}
                                onChange={handlePartidaChange}
                                onSelect={handlePartidaSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div style={{ position: 'relative' }}>
                                        <div className="p-inputgroup flex-1">
                                            <span className='p-float-label'>
                                                <InputText {...getInputProps({
                                                    inputid: 'partida', name: 'partida',
                                                    'aria-expanded': false
                                                })} />
                                                <label htmlFor="partida">Direccion de Partida</label>
                                            </span>
                                        </div>
                                        {
                                            direccionPartida !== '' ? <div className="autocomplete-dropdown-container">
                                                {
                                                    !loading ?
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
                                                        }) : 'Cargando...'}
                                            </div> : <div />
                                        }
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col">
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
                </div>
                <GoogleMap
                    mapContainerStyle={{
                        height: '400px',
                        width: '100%',
                    }}
                    center={{
                        lat: 19.435078316766443, // Latitud inicial del mapa
                        lng: -99.14111102877096 // Longitud inicial del mapa
                    }}
                    zoom={10} // Nivel de zoom inicial del mapa
                    onClick={handleMapClick} // Asignamos la función de manejo de clic en el mapa
                >

                    {
                        marcadores[0].lat != 0 && marcadores[0].lng != 0 ?
                            <Marker
                                position={{
                                    lat: marcadores[0].lat,
                                    lng: marcadores[0].lng,
                                }}
                                animation={4}
                            />
                            : ''
                    }
                    {
                        marcadores[1].lat != 0 && marcadores[1].lng != 0 ?
                            <Marker
                                position={{
                                    lat: marcadores[1].lat,
                                    lng: marcadores[1].lng,
                                }}
                                animation={4}
                            />
                            : ''
                    }

                </GoogleMap>
            </LoadScript>
        </>

    );
};
