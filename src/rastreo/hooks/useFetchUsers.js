import { useEffect, useState } from "react";
import { getUsers } from "../helpers/getUsers";
import { api } from "../../helpers/VariablesGlobales";

const acomodarDatos = (lista) => {
  const nuevaLista = [];
  lista.map((item, index) => {
      const newItem = { ...item, id: index };
      nuevaLista.push(newItem);
  });

  return nuevaLista;
}

export const useFetchUsers = ()=>{

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
      getUsers(api).then(
        usuarios => {
            setState({
                data: usuarios,
                loading: false,
            });
        }
      );
    
    }, []);

    return state;
    

}