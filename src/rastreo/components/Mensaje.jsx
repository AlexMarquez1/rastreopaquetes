import { Dialog } from 'primereact/dialog'
import React from 'react'

export const Mensaje = ({header, visible, setMensaje, contenido}) => {
    return (
        <Dialog header={header} visible={visible} style={{ width: '50vw' }} onHide={() => setMensaje(old=>({...old, visible: false}))}>
            <p className="m-0">
                {contenido}
            </p>
        </Dialog>
    )
}
