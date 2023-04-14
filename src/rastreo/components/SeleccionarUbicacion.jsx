import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';
import { InputText } from 'primereact/inputtext';

const lib = [["places"]];
const colorTexto = {
    color: 'black',
}

export const SeleccionarUbicacion = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [direccionLlegada, setDireccionLlegada] = useState('');
    const [direccionPartida, setDireccionPartida] = useState('');

    // Función para manejar el cambio en el input de búsqueda de dirección
    const handleLlegadaChange = (value) => {
        setDireccionLlegada(value);
    };

    const handlePartidaChange = (value) => {
        setDireccionLlegada(value);
    };

    // Función para manejar la selección de una dirección de búsqueda
    const handlePartidaSelect = async (value) => {
        setDireccionPartida(value);
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            setSelectedLocation(latLng);
        } catch (error) {
            console.error('Error al obtener la ubicación:', error);
        }
    };
    const handleLlegadaSelect = async (value) => {
        setDireccionLlegada(value);
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            setSelectedLocation(latLng);
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
                                value={direccionLlegada}
                                onChange={handleLlegadaChange}
                                onSelect={handlePartidaSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                                    <div>
                                        <div className="p-inputgroup flex-1">
                                            <span className='p-float-label'>
                                                <InputText {...getInputProps({
                                                    inputid: 'partida', name: 'partida',
                                                })} />
                                                <label htmlFor="partida">Direccion de Partida</label>
                                            </span>
                                        </div>
                                        <div className="autocomplete-dropdown-container">
                                            {suggestions.map((suggestion) => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, { className })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
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
                                onSelect={handlePartidaSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                                    <div>
                                        <div className="p-inputgroup flex-1">
                                            <span className='p-float-label'>
                                                <InputText {...getInputProps({
                                                    inputid: 'llegada',
                                                    name: 'llegada',
                                                })} />
                                                <label htmlFor="llegada">Direccion de llegada</label>
                                            </span>
                                        </div>
                                        <div className="autocomplete-dropdown-container">
                                            {suggestions.map((suggestion) => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, { className })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
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
                        lat: -34.6083, // Latitud inicial del mapa
                        lng: -58.3712, // Longitud inicial del mapa
                    }}
                    zoom={10} // Nivel de zoom inicial del mapa
                    onClick={handleMapClick} // Asignamos la función de manejo de clic en el mapa
                >
                    {selectedLocation && ( // Si hay una ubicación seleccionada, mostramos un marcador en el mapa
                        <Marker
                            position={{
                                lat: selectedLocation.lat,
                                lng: selectedLocation.lng,
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </>

    );
};
