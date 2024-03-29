

export const getValidation = async (api, user) =>{

    const url =`${api}/validar/usuarios`;
    const options = {
        method: "POST",
        cache: "no-cache",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    };

    const data = await fetch(url,options).then((resp)=>{
        return resp.json();
    }
    ).catch((resp)=>{
        console.log('Error al ejecutar la consulta', resp);
        return undefined;
    });
    // const resp = await fetch(url,options);
    
    // const data = await resp.json();
    
    return data;
}
export const registrarNuevoUsuario = async (api, user) =>{

    const url =`${api}/nuevo/usuario`;
    const options = {
        method: "POST",
        cache: "no-cache",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    };

    const data = await fetch(url,options)
    .then((resp)=> resp.text())
    .then((data) =>{
        return data
    })
    .catch((resp)=>{
        console.log('Error al ejecutar la consulta', resp);
        return undefined;
    });
    // const resp = await fetch(url,options);
    
    // const data = await resp.json();
    
    return data;
}