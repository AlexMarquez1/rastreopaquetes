import React, { useEffect, useRef, useState } from 'react'
import { ListBox } from 'primereact/listbox';
import { Box } from '@chakra-ui/react';
import driver from '../../assets/user.png';
import { confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

export const Conductores = ({ socket, conductorSeleccionado, setConductorSeleccionado, obtenerRuta, setDireccion }) => {
    const [lista, setLista] = useState([]);
    const [conductorDesconectado, setConductorDesconectado] = useState(null);
    const toast = useRef(null);

    useEffect(() => {
        socket.on('conductor', (data) => {
            const isFound = lista.some(element => {
                if (element.ubicacion.Nombre === data.ubicacion.Nombre) {
                    return true;
                }
                return false;
            });

            if (isFound) {
                console.log('Dato ya guardado');
            } else {
                console.log('leyendo datos');
                setLista((old) => [...old, data]);

            }
        });

        socket.on('desconectado', (data) => {
            console.log('Desconectado: ', data);
            const conductoresAux = [];
            let desconectado;
            lista.forEach((item, index) => {
                if (item.idConexion === data.idConexion) {
                    desconectado = item.ubicacion.Nombre
                    console.log(desconectado);
                } else {
                    conductoresAux.push(item);
                }
            });
            setLista(conductoresAux);
            mensaje(`El conductor ${desconectado} ha dejado de transmitir su ubicacion`, 'warn');
        });

        return () => {
            socket.off('conductor');
            socket.off('desconectado');
        }

    }, [socket]);

    const mensaje = (contenido, tipo) => {
        toast.current.show({ severity: tipo, summary: 'Desconectado', detail: contenido, life: 3000 });
    };
    return (
        <>

            <Box position='absolute'
                right={0}
                top={50}
                w='30%'
                p={4}
                m={4}
            >
                <Toast ref={toast} />
                <div className="card" style={{ background: '#ffffff94' }}>
                    <div className="card-body">
                        <label className="form-label">Conductores conectados: </label>
                        {/* <Dropdown value={conductorSeleccionado} options={conductores} onChange={onDriverChange} optionLabel="Nombre" placeholder="Selecciona un conductor" /> */}
                        <ListBox
                            value={conductorSeleccionado}
                            filter={true}
                            options={lista}
                            optionLabel='ubicacion.Nombre'
                            itemTemplate={(e) => e.ubicacion.Nombre}
                            optionDisabled={(e) => false}
                            emptyMessage={(e) => 'Sin conductores activos'}
                            emptyFilterMessage={(e) => 'Conductor no encontrado'}
                            onChange={(e) => {
                                setConductorSeleccionado(e.value);
                                if (e.value !== null) {
                                    obtenerRuta(e.value.ubicacion.origin, e.value.ubicacion.destination);
                                } else {
                                    setDireccion(null);
                                }
                            }} />
                    </div>
                </div>
            </Box>

            {conductorSeleccionado != null ? <Box position='absolute'
                left={10}
                bottom={0}
                w='30%'
                p={4}
                m={4}
            >
                <div className="card animate__animated animate__zoomIn" style={{ background: '#ffffff94' }}>
                    <div className="card-body">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    Informacion del conductor
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {conductorSeleccionado.ubicacion.Foto === '' ? <img src={driver} className="img-thumbnail" alt="Conductor"  style={{width: '150px'}} /> : <img src={conductorSeleccionado.ubicacion.Foto} className="img-thumbnail" alt="Conductor" width="150" />}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Nombre:
                                </div>
                                <div className="col">
                                    {conductorSeleccionado.ubicacion.Nombre}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Numero de licencia:
                                </div>
                                <div className="col">
                                    {conductorSeleccionado.ubicacion.NumeroDeLicencia}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Tipo de licencia:
                                </div>
                                <div className="col">
                                    {conductorSeleccionado.ubicacion.TipodeLicencia}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Punto de partida:
                                </div>
                                <div className="col">
                                    {conductorSeleccionado.ubicacion.puntoDePartida}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Punto de llegada:
                                </div>
                                <div className="col">
                                    {conductorSeleccionado.ubicacion.PuntoDeLlegada}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Box> : <div />}
        </>
    )
}
