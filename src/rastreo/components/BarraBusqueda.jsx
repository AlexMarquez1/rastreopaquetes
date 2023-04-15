import React, { useState } from 'react'

const BarraBusqueda = ({handleSearch}) => {

const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default BarraBusqueda