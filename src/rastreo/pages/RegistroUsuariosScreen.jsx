import { Button } from 'primereact/button';
import React from 'react'
import '../../styles/estilos.css';
import { NavBarPrincipal } from '../components/NavBarPrincipal';
import { DataTable } from 'primereact/datatable';


const styleRegistro = {
    width: '85%',
    background: 'rgba(143, 216, 227, 0.316)',
}

export const RegistroUsuariosScreen = () => {

    return (
        <>
            <NavBarPrincipal />
            <div className='fondo2'>
                <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
                    <div className="card form" style={styleRegistro}>
                        <br />
                        <h1 className="card-title">
                            <p className="fs-4">Datos del Registro para Usuarios</p>
                        </h1>
                        <br />
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="col">
                                    <label className="form-label">Telefono:</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="col">
                                    <label className="form-label">Usuario:</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="col">
                                    <label className="form-label">Contraseña:</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <br />
                                    <Button type="button" className="btn btn-danger">Regristrar</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_item flex-container" style={{ paddingTop: '5%' }}>
                    <div className="card form" style={styleRegistro}>
                        <br />
                        <h1 className="card-title">
                            <p className="fs-4">Usuarios registrados</p>
                        </h1>
                        <br />
                        <div className="container">
                            <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id"
                                filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
                                emptyMessage="No customers found.">
                                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                                    filter filterPlaceholder="Search by country" filterClear={filterClearTemplate}
                                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                                <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                                <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
                            </DataTable>
                        </div>
                    </div>
                </section>
                <h1>HOla</h1>
            </div>
        </>
    )
}
