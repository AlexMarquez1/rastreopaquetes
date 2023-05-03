import { getVehiculos } from "../helpers/getVehiculos";
import { api } from "../../helpers/VariablesGlobales";
import { useEffect, useState } from "react";

export const useFetchVehiculo = (vehiculo)=>{
    const [state, setState] = useState({
        data: {},
        loading: true,
    });

    useEffect(() => {
        getVehiculos(
            api,
            vehiculo
        ).then(vehiculo =>{
            setState({
                data: vehiculo,
                loading: false,
            })
        });
    }, []);
    return state;
  
}