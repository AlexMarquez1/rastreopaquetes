import useAuth from '../../hooks/useAuth';

export const getViajes = async (api,) =>{

    const { userAuth } = useAuth();

    console.log(userAuth);
    // const usuarioLogiado = lista.filter(item => item.us.idusuario === userAuth.idusuario);

    const url =`${api}/obtener/viajes/usuario`;
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
    // const resp = await fetch(url,options);
    
    // const data = await resp.json();
    return data;
}