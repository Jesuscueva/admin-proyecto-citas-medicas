

///BACKEND DJANGO
const URL_DJANGO = "https://app-citas-grupo5.herokuapp.com"



export const getServicios = async (token) => {
    const peticion = await fetch(`${URL_DJANGO}/servicio`, {
        method: "GET",
        headers: {
            "Authorization" : `Bearer ${token}`,
    },
    });
    const data = await peticion.json();
    return data;
}

export const postServicios = async (formData, token) => {

    const peticion = await fetch(`${URL_DJANGO}/servicio`,  {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json();
    return data
}


export const putServicios = async(formData, token, id) => {
    const peticion = await fetch(`${URL_DJANGO}/servicio/${id}`, {
        method: "PUT",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json()
    return data
}

export const deleteServicios = async(vetId, token) => {
    const peticion = await fetch(`${URL_DJANGO}/servicio/${vetId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json()
    return data
}





/***
 * Echooo
 * 
 */


 export const getCitas = async() => {
    const peticion = await fetch(`${URL_DJANGO}/traerCita`);
    const data = await peticion.json();
    return data;
}


 export const buscarCitasDelUsuario = async(usuario) => {
    const peticion = await fetch(`${URL_DJANGO}/citass?nombre=${usuario}`);
    const data = await peticion.json();
    return data;
}

export const getDatosConsultorio = async () => {
    const peticion = await fetch(`${URL_DJANGO}/veterinaria`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        }
    });
    const data = await peticion.json();
    return data; 
}

export const putDatosConsultorio = async (formData, token)  => {
    const peticion = await fetch(`${URL_DJANGO}/veterinaria/1`, {
        method: "PUT", 
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json();
    return data
}








/**
 * Modificando con Base de Datos todo echo
 */


export const getVeterinarios = async (token) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinario`, {
        method: "GET",
        headers: {
            "Authorization" : `Bearer ${token}`,
    },
    });
    const data = await peticion.json();
    return data;
}

export const postVeterinario = async (formData, token) => {

    const peticion = await fetch(`${URL_DJANGO}/veterinario`,  {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json();
    return data
}


export const putVeterinario = async(formData, token, id) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinario/${id}`, {
        method: "PUT",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json()
    return data
}

export const deleteVeterinario = async(vetId, token) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinario/${vetId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json()
    return data
}
