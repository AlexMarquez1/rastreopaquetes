import React, { useState } from 'react'

const initialData = [  {    name: "Juan Perez",    email: "juan.perez@example.com",    image:      "https://randomuser.me/api/portraits/men/1.jpg",  },  {    name: "Maria Garcia",    email: "maria.garcia@example.com",    image:      "https://randomuser.me/api/portraits/women/2.jpg",  },  {    name: "Pedro Sanchez",    email: "pedro.sanchez@example.com",    image:      "https://randomuser.me/api/portraits/men/3.jpg",  },];


export const TablaConductores = () => {

    const [data, setData] = useState(initialData);
    const [selectedRows, setSelectedRows] = useState([]);

    const isSelected = (index) => {
        return selectedRows.includes(index);
      };

    const handleSelectedRow = (index) => {
        if (selectedRows.includes(index)) {
          setSelectedRows(selectedRows.filter((item) => item !== index));
        } else {
          setSelectedRows([...selectedRows, index]);
        }
    };

  return (
    <>
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-500 uppercase">
              <tr>
                <th scope="col" className="relative px-3 py-2">
                  <input
                    type="checkbox"
                    className="absolute h-3 w-3 left-3"
                    onChange={() => {}}
                    checked={selectedRows.length === data.length}
                  />
                  <div scope="col" className=" px-3 py-2">
                <div className="">
                    <span>Nombre y correo</span>
                  </div>
                </div>
                </th>
                
                <th scope="col" className="relative px-3 py-2">
                <div className="items-center">
                    <span>Folio</span>
                  </div>
                </th>
                <th scope="col" className="relative px-3 py-2">
                <div className="items-center">
                    <span>Estatus</span>
                  </div>
                </th>
                <th scope="col" className="relative px-3 py-2">
                <div className="items-center">
                    <span>Fecha de Creacion</span>
                  </div>
                </th>
                <th scope="col" className="relative px-3 py-2">
                <div className="items-center">
                    <span>PDF</span>
                  </div>
                </th>
                <th scope="col" className="relative px-3 py-2">
                <div className="items-center">
                    <span>Evidencia</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-4 w-4">
                        <input
                          type="checkbox"
                          className=" top-3 left-3 p-2"
                          checked={isSelected(index)}
                          onChange={() => handleSelectedRow(index)}
                        />
                      </div>
                      <div className="flex-shrink-0 h-2 w-2 text-center">
                        <img
                          className="rounded-full"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="ml-auto w-14 h-14 object-cover active:scale-[.98] py-3 bg-transparent hover:bg-[#245A95] hover:text-white text-[#245A95] text-2xl font-bold inline-block rounded-full bg-primary p-2 uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mt-4">
                        <ion-icon name="document-text"></ion-icon>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4">        
                    <button
                      type="submit"
                      className="ml-auto w-14 h-14 object-cover active:scale-[.98] py-3 bg-transparent hover:bg-[#245A95] hover:text-white text-[#245A95] text-2xl font-bold inline-block rounded-full bg-primary p-2 uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mt-4">
                      <ion-icon name="document-attach"></ion-icon>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
    </>
  )
}
