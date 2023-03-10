import { useState } from "react";
import { getValidation } from "../../helpers/getUsers";
import { api } from "../../helpers/VariablesGlobales";

export const useFetchValidation = (user)=>{
    const [state, setState] = useState({
        data: {},
        loading: true,
    });

    useEffect(() => {
        getValidation(
            api,
            user
        ).then(usuario =>{
            setState({
                data: usuario,
                loading: false,
            })
        });
    }, []);

    return state;
    
}