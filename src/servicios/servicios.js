import { useContext } from "react";
import AdminContext from "../context/adminContext";
import { URL_BACKEND1, URL_BACKEND2} from "./../environments/environments";
///BACKEND DJANGO
const URL_DJANGO = "http://127.0.0.1:8000"


export const getUsuarios = async() => {

    const peticion = await fetch(`${URL_BACKEND1}/users`);
    const data = await peticion.json();
    return data;
}

export const getCitas = async() => {
    const peticion = await fetch(`${URL_BACKEND1}/citas`);
    const data = await peticion.json();
    return data;
}

export const getComentarios = async() => {
    const peticion = await fetch(`${URL_BACKEND1}/comentarios`);
    const data = await peticion.json();
    return data;
}

export const postComentario = async(objComentario) => {
    const peticion = await fetch(`${URL_BACKEND1}/comentarios`, {
        method: "POST",
        body: JSON.stringify(objComentario), 
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await peticion.json();
    return data
}



export const getDatosConsultorio = async (token) => {
    const peticion = await fetch(`${URL_DJANGO}/veterinaria`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    const data = await peticion.json();
    return data; 
}

export const putDatosConsultorio = async (objDatosConsultorio, token)  => {
    const peticion = await fetch(`${URL_DJANGO}/veterinaria/${objDatosConsultorio.veterinariaId}`, {
        method: "PUT", 
        body: JSON.stringify(objDatosConsultorio),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    const data = await peticion.json();
    return data
}








/**
 * Modificando con Base de Datos
 */