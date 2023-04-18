import React, { useState } from 'react'

const BarraBusqueda = ({handleSearch, cardsData}) => {

const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   handleSearch(event.target.value);
  // };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value)
    setSearchTerm(value);

    if (value === '') {
      handleSearch('');
    } else {
      handleSearch(value);
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Busca el id del viaje..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default BarraBusqueda