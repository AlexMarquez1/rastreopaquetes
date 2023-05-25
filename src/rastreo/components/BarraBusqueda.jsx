import { Field, Formik } from 'formik';
import { InputText } from 'primereact/inputtext';

const BarraBusqueda = ({handleSearch, cardsData, busqueda}) => {

  return (
    <>
    <Formik>
    <div className="col-sm-6 col-md-12 col-xl-12 pb-5">
        <div className='p-inputgroup flex-1'>
            <span className='p-float-label'>
                <Field
                    as={InputText}
                    onChange={handleSearch}
                    value={busqueda}
                />
                <span className="p-inputgroup-addon">
                    <i className="pi pi-search"></i>
                </span>
                <label htmlFor="razonsocial" className='text-body'>ingrese: Id viaje, Nombre chofer o Empresa</label>
            </span>
        </div>
    </div>
    </Formik>
    
  
    {/* <div className="form-group pb-4">
      <input
        type="text"
        className="form-control p-2"
        placeholder="Busca el id del viaje..."
        value={busqueda}
        onChange={handleSearch}
      />
    </div> */}
    </>
    
  )
}

export default BarraBusqueda