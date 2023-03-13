import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Skeleton } from 'primereact/skeleton';
import React from 'react'

export const SkeletonTable = ({items}) => {

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    return (
        <DataTable value={items} className="p-datatable-striped">
            {items.map((item, i) =>{
                return <Column key={i} field={item.head} header={item.head} style={{ width: '25%' }} body={bodyTemplate}></Column>
            }
            )}
        </DataTable>
    )
}
