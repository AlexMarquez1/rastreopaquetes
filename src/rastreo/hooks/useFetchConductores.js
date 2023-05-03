import { getConductores } from "../helpers/getConductores";
import { api } from "../../helpers/VariablesGlobales";
import { useEffect, useState } from "react";

export const useFetchConductor = (conductor)=>{
    const [state, setState] = useState({
        data: {},
        loading: true,
    });

    useEffect(() => {
        getConductores(
            api,
            conductor
        ).then(conductor =>{
            setState({
                data: conductor,
                loading: false,
            })
        });
    }, []);
    return state;
  
}
