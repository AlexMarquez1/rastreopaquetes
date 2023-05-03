import { Button } from 'primereact/button';
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'

export const TablaConductoresCrud = ({ data, encabezados, id, tipoDatos = 'conductores', editar = false, eliminar = false, seleccionMultiple = false, toggleNuevoConductorForm }) => {
    console.log(encabezados)
    const [globalFilter, setGlobalFilter] = useState(null);
    const [datoSeleccionado, setDatoSeleccionado] = useState()
    const [lista, setLista] = useState(data)
    const [deleteProjectDialog, setDeleteProyectDialog] = useState(false);
    const [proyecto, setProyecto] = useState();
    const [passwordConfirnacion, setPasswordConfirnacion] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);

    
    const confirmDeleteProduct = (proyecto) => {
        console.log(proyecto);
        setProyecto(proyecto);
        setDeleteProyectDialog(true);
    };
    
    const hideDeleteProjectDialog = () => {
        setPasswordConfirnacion('');
        setDeleteProyectDialog(false);
    }
    
    
    const handleAceptarEliminar = ()=>{
        if (passwordConfirnacion === '') {
            console.log('Contraseña vacia');
            setErrorPassword(true);
        }else if (passwordConfirnacion === 'eliminarproyecto170313'){
            console.log('Contraseña correcta');
            const newLista = lista.filter((item) => item.idproyecto !== proyecto.idproyecto);
            setLista(newLista);
            hideDeleteProjectDialog();     
        }
    }
    
    const onSelection = (event) => {
        console.log(event.value);
        setDatoSeleccionado(event.value);
    }
    
    const onChangePass = (event)=>{
        setPasswordConfirnacion(event.target.value);
        if(passwordConfirnacion != ''){
            setErrorPassword(false);
        }
    }

    const header = (
        <div style={{ alignItems: 'center', justifyContent: 'space-between'}}>
            <h5 className="mx-0 my-1 text-md">Lista de conductores</h5>
            
            <span className="p-input-icon-left m-2">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
            </span>
            <Button type="submit" icon='pi pi-user-plus' label="Agregar conductor" className='bg-indigo-500 hover:bg-indigo-700 m-2' onClick={toggleNuevoConductorForm}/>
        </div>
    );
    const actionBodyTemplate = (rowData) => {
        return (
            <>
            {editar &&
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={()=>{}} />}
            {eliminar &&     
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={()=>{confirmDeleteProduct(rowData)}} />
            }   
            </>
        );
    }
    const deleteProjectDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProjectDialog} />
            <Button label="Si" icon="pi pi-check" className="p-button-text" onClick={handleAceptarEliminar} />
        </>
    );

    const onRowEditComplete = (e) => {
        // let _products = [...products];
        // let { newData, index } = e;

        // _products[index] = newData;

        // setProducts(_products);
        console.log(e);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const contenidoColumna = (rowData)=>{
        return (
            <div className="flex align-items-center gap-2">
                <span>*******</span>
            </div>
        );
    };

    return (
        <>
            <DataTable value={data} selection={datoSeleccionado} onSelectionChange={onSelection}
                onRowEditComplete={onRowEditComplete} editMode="row"
                dataKey={id} paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="p-datatable-striped"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {first} y {last} de {totalRecords} registros"
                globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                {seleccionMultiple && 
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>}
                        {encabezados.map((head, index) => (
                    <Column key={index} field={head.field} header={head.head} sortable editor={head.field === id ? undefined : (options) => textEditor(options)} body={head.field === 'contrasena' ? contenidoColumna : undefined} ></Column>
                ))}
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        {(editar || eliminar) && <Column header='Opciones' body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>}
            </DataTable>

            <Dialog visible={deleteProjectDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProjectDialogFooter} onHide={hideDeleteProjectDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {proyecto && <span>¿Estas seguro de eliminar el proyecto <b>{proyecto.proyecto}</b>?, toda la informacion que contenga sera eliminada permanentemente (Registros, Evidencias, Fotografias, Documentos generados (PDF))</span>}
                    <br />
                    <br />
                    <i>Ingresa la contraseña para poder eliminar el proyecto</i>
                    <br />
                    <br />
                    {/* <InputPassword valor={passwordConfirnacion} onChangevalor={onChangePass} onError={errorPassword} /> */}
                </div>
            </Dialog>
        </>
    )
}