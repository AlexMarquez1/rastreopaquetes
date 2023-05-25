import React, { useState } from 'react'

const BarraBusqueda = ({handleSearch, cardsData, busqueda}) => {

const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="form-group pb-4">
      <input
        type="text"
        className="form-control p-2"
        placeholder="Busca el id del viaje..."
        value={busqueda}
        onChange={handleSearch}
      />
    </div>
  )
}

export default BarraBusqueda