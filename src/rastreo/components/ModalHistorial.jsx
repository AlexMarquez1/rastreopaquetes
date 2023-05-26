import { Dialog } from 'primereact/dialog'
import { useState } from 'react';

const styleRegistroModal = {
    width: '95%',
    background: 'rgb(190,15,52)',
}

export const ModalHistorial = (abrirModal, setAbrirModal, mensaje, setMensaje) => {

    const [show, setShow] = useState(null);
    const [show2, setShow2] = useState(null);
  const [show3, setShow3] = useState(null);

    // funciones de abrir y cerra de los acordiones del modal
    const toggleAccordionViaje = () => {
        setAbrirModal(true);
        setShow(!show);
    };

    const toggleAccordionConductor = () => {
        setShow2(!show2);
    };

    const toggleAccordionVehiculo = () => {
        setShow3(!show3); 
    };

    return (
        <>
            <Dialog header="Detalles de viaje.." visible={mensaje} style={{ width: '90vw' }} onHide={() => setMensaje(false)}>
                <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
                    <div className="card" style={styleRegistroModal} onClick={toggleAccordionViaje}>
                        <br />
                        <h1 className="card-title">
                            <div style={{ float: 'right' }} className='px-4 text-white'>
                                <i className="pi pi-angle-down"></i>
                            </div>
                            <p className="fs-4 text-white">Detalles del viaje</p>
                        </h1>
                    </div>
                    {
                        show && (
                            <div className='container bg-[#dfdfdf]'>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                                        <ul className="list-group list-group-flush">
                                            <p className="list-group-item-dark btn mr-auto" aria-current="true">Id viaje: {''}</p>
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
                                            <li className="list-group-item mr-auto">RFC de la empresa: {viajeActual.rfc}</li>
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
                        )}
                </section>
                <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
                    <div className="card" style={styleRegistroModal} onClick={toggleAccordionConductor}>
                        <br />
                        <h1 className="card-title">
                            <div style={{ float: 'right' }} className='px-4 text-white'>
                                <i className="pi pi-angle-down"></i>
                            </div>
                            <p className="fs-4 text-white">Detalles del Conductor</p>
                        </h1>
                    </div>
                    {
                        show2 &&
                        <div className='container bg-[#dfdfdf]'>
                            <div className='row'>
                                <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                                    <ul className="list-group list-group-flush">
                                        <p className="list-group-item-dark btn mr-auto" aria-current="true">Id Conductor: {'00001'}</p>
                                        <img className="list-group-item mr-auto h-48 w-48" src='https://randomuser.me/api/portraits/men/1.jpg' alt="" />
                                        <li className="list-group-item mr-auto">Nombre completo: {''}</li>
                                        <li className="list-group-item mr-auto">Edad: {''}</li>
                                        <li className="list-group-item mr-auto">Numero de contacto: {''}</li>
                                        <li className="list-group-item mr-auto">Tipo de sangre: {''}</li>
                                    </ul>
                                </div>
                                <div className='col-sm-6 col-md-6 col-xl-4 p-4'>
                                    <ul className="list-group list-group-flush">
                                        <p className="list-group-item-dark btn mr-auto" aria-current="true">Numero de licencia: {''}</p>
                                        <li className="list-group-item mr-auto">Tipo de licencia: {''}</li>
                                        <li className="list-group-item mr-auto">Vigencia: {''}</li>
                                        <button type="button" className="btn btn-outline-secondary">
                                            <i className="pi pi-eye p-2"></i>
                                            Ver licencia
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
                            <div style={{ float: 'right' }} className='px-4 text-white'>
                                <i className="pi pi-angle-down"></i>
                            </div>
                            <p className="fs-4 text-white">Detalles del vehiculo</p>
                        </h1>
                    </div>
                    {
                        show3 &&
                        <div className='container bg-[#dfdfdf]'>
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
        </>
    )
}
