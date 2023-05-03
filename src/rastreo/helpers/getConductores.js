export const getConductores = async (api,) =>{

    const url =`${api}/consultar/conductores`;
    const options = {
        method: "GET",
        cache: "no-cache",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        // body: JSON.stringify(conductor)
    };

    const data = await fetch(url,options).then((resp)=>{
        return resp.json();
    }
    ).catch((resp)=>{
        console.log('Error al ejecutar la consulta', resp);
        return undefined;
    });
    console.log(data)
    // const resp = await fetch(url,options);
    
    // const data = await resp.json();
    
    return data;
}


export const registrarNuevoConductor = async (api, user) =>{

    const url =`${api}/registrar/conductores`;
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