import React, { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [dataConductor, setDataConductor] = useState([]);

  return (
    <ApiContext.Provider value={{ dataConductor, setDataConductor }}>
      {children}
    </ApiContext.Provider>
  );
};