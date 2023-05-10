import { getEmpresas } from "../helpers/getEmpresas";
import { api } from "../../helpers/VariablesGlobales";
import { useEffect, useState } from "react";

export const useFetchEmpresas = (empresa)=>{
    const [state, setState] = useState({
        data: {},
        loading: true,
    });

    useEffect(() => {
        getEmpresas(
            api,
            empresa
        ).then(empresa =>{
            setState({
                data: empresa,
                loading: false,
            })
        });
    }, []);
    return state;
  
}