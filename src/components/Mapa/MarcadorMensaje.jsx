import { Marker } from '@react-google-maps/api'
import React, { useEffect } from 'react'

export const MarcadorMensaje = ({mensajes, setmensaje, socket}) => {
    console.log('Mensajes: ', mensajes);
    const marcadores = {
        'Inicio viaje': 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMarcadores%2FMark-Truck.png?alt=media&token=69964d8f-4669-4bbd-a3e2-39f742441f7c',
        'Cambio de chofer': 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMarcadores%2FMark-People.png?alt=media&token=6be4f93f-fc11-4efb-9669-199adb7c91e1',
        'Cargar gasolina': 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMarcadores%2FMark-Gas.png?alt=media&token=5fc9875c-98ed-404b-887d-c7f8bd1565bc',
        'Parada para descansar': 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMarcadores%2FMark-Nigth.png?alt=media&token=890c9c40-67d1-458e-a8e1-d7f098c81270',
        'Parada para comer': 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMarcadores%2FMark-Food.png?alt=media&token=bf9dfdfa-a756-489e-a2dd-3ef018435ca0',
        'Accidente menor': 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMarcadores%2FMark-BusAlert.png?alt=media&token=6b908372-091c-4726-9fd6-98951163f058',
        'Accidente mayor': 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMarcadores%2FMark-Emergency.png?alt=media&token=5513eee7-8c99-4900-9278-044bcd566985',
        'Trafico': 'https://firebasestorage.googleapis.com/v0/b/isae-de6da.appspot.com/o/Imagenes%2FMarcadores%2FMark-Traffic.png?alt=media&token=c9e248fb-b14d-4ada-86b8-152a1360f399',
    };

    useEffect(() => {
        socket.on('recibemensaje', (data) => {
            console.log('Se recibe: ', data);
            setmensaje((old)=> [...old, data ]);
        });
        return () => {
            socket.off('recibemensaje');
        }
    }, [socket]);

  return (
    <>
        {
           mensajes.map((item)=>{
            return <Marker
            key={item.coordenadas.lat}
            position={{
                lat: item.coordenadas.lat,
                lng: item.coordenadas.lng,
            }}
            animation={4}
            icon={{
                url: marcadores[item.tipoMensaje],
                fillColor: '#EB00FF',
                scaledSize: new google.maps.Size(50, 60)
            }}
        />
           }) 
        }

    </>
  )
}
