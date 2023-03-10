import { Marker } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'

export const Marcador = ({ socket, conductorSeleccionado, setCenter }) => {
    const [coordenadas, setCoordenadas] = useState({ lat: 0, lng: 0 })

    useEffect(() => {
        socket.on('recibeubicacion', (data) => {
            console.log('Conductor seleccionado: ',conductorSeleccionado);
            if(conductorSeleccionado !== null){
                console.log(data);
                if(conductorSeleccionado.ubicacion.Nombre === data.ubicacion.Nombre){
                    // setCenter({ lat: data.ubicacion.lat, lng: data.ubicacion.lng });
                    setCoordenadas({ lat: data.ubicacion.lat, lng: data.ubicacion.lng });
                }
            }
        });
        return () => {
            socket.off('recibeubicacion');
        }
    }, [socket,conductorSeleccionado])

    return (
        <>
            {conductorSeleccionado != null ? <Marker
                position={{
                    lat: coordenadas.lat,
                    lng: coordenadas.lng,
                }}
                animation={4}
                icon={{
                    url: 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMark-Car.png?alt=media&token=902220d3-11b2-4a59-80ec-8b554c8fab06',
                    fillColor: '#EB00FF',
                    scaledSize: new google.maps.Size(50, 60)
                }}
            /> : <div />}</>
    )
}
