import React from 'react'

export const VehiculoSeleccionado = ({handleToggle, selectedItem}) => {

    console.log(selectedItem);

  return (
    <>
<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 items-center justify-center">
  <div className="bg-white rounded-md p-4 m-3">
    <div className="text-right">
      <button
        className="bg-white hover:bg-red-700 text-gray-700 hover:text-white font-bold px-2 rounded-full mr-auto"
        onClick={handleToggle}
      >
        <i className="pi pi-times-circle"></i>
      </button>
    </div>
    <div className="inset-0 flex items-center justify-center">
      <div className="bg-white rounded-lg p-3 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Detalles del elemento</h2>

        <table className="min-w-full divide-y divide-gray-200 border border-[#BE0F34]">
          <thead className="bg-[#BE0F34]">
            <tr>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Id vehículo</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Imagen</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Marca</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Modelo</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {selectedItem.map((vehiculo, index) => (
              <tr key={index}>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm font-medium text-gray-900">{vehiculo.idvehiculo}</td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap">
                  <img src={vehiculo.imagen} alt="Imagen del elemento" className="h-10 w-10 rounded-full" />
                </td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm font-medium text-gray-900">{vehiculo.marca}</td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm text-gray-500">{vehiculo.modelo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>   
    </>
  )
}
