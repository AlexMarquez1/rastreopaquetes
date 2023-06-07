import React from 'react'

export const VehiculoSeleccionado = ({handleToggle, selectedItem}) => {

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
        <h2 className="text-3xl text-[#BE0F34] font-extrabold mb-4">Vehículos</h2>

        <table className="min-w-full divide-y divide-gray-200 border border-[#BE0F34]">
          <thead className="bg-[#BE0F34]">
            <tr>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Id vehículo</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Imagen</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Marca</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Modelo</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Tipo</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Placas</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">N° serie</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Disponibilidad</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Seguro</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Poliza</th>
              <th className="px-3 py-3 sm:py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Trajeta circulación</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {selectedItem.map((vehiculo, index) => (
              <tr key={index}>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm font-medium text-gray-900">{vehiculo.idvehiculo}</td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap">
                  <img src={vehiculo.imagen} alt="Imagen" className="h-10 w-10 rounded-full" />
                </td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm text-gray-700">{vehiculo.marca}</td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm text-gray-700">{vehiculo.modelo}</td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm text-gray-700">{vehiculo.tipovehiculo}</td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm text-gray-700">{vehiculo.placas}</td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm text-gray-700">{vehiculo.numeroserie}</td>
                <td className={`px-3 py-3 sm:py-2 whitespace-nowrap text-sm font-semibold ${vehiculo.estatusvehiculo === 'disponible' ? 'text-green-500' : 'text-red-500'}`}>
                  {vehiculo.estatusvehiculo}
                </td>
                <td className="px-3 py-3 sm:py-2 whitespace-nowrap text-sm text-gray-700">{vehiculo.nombreseguro}</td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="w-12 h-12 object-cover active:scale-[.98] bg-transparent hover:bg-[#245A95] hover:text-white text-[#245A95] text-2xl font-bold inline-block rounded-full bg-primary uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                      <i className="pi pi-file-pdf text-xl"></i>
                    </button>
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="w-12 h-12 object-cover active:scale-[.98] bg-transparent hover:bg-[#245A95] hover:text-white text-[#245A95] text-2xl font-bold rounded-full bg-primary uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                      <i className="pi pi-file-pdf text-xl"></i>
                    </button>
                  </div>
                </td>
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




{/* <div className="flex justify-end cursor-pointer" onClick={handleIconClick}>
  <i
    className={`pi pi-angle-down text-xl transform ${rotate ? 'rotate-180' : 'rotate-0'} rounded-full p-3 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-800 hover:shadow-md`}
  ></i>
</div> */}