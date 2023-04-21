import React from 'react'

const TablaMenuEmpresas = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Imagen
          </th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Empresa
          </th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Viajes activos
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* {people.map((person) => ( */}
          <tr key={''}>
            <td className="px-4 py-2 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full" src={''} alt={''} />
                </div>
              </div>
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">Coca cola</div>
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">
              <i className="pi pi-verified"></i>
              </div>
            </td>
          </tr>
        {/* ))} */}
      </tbody>
    </table>
  )
}

export default TablaMenuEmpresas