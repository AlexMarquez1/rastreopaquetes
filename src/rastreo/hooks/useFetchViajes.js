import { getViajes } from "../helpers/getViajes";
import { api } from "../../helpers/VariablesGlobales";
import { useEffect, useState } from "react";

export const useFetchViajes = (viaje)=>{
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getViajes(
            api,
            viaje
        ).then(viaje =>{
            console.log(viaje);
            setState({
                data: viaje,
                loading: false,
            })
        });
    }, [viaje]);

    return state;
  
}