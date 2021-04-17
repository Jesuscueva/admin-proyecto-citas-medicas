import React, { useEffect, useState } from 'react';
import { getDatosConsultorio} from '../servicios/servicios';
import AdminContext from './adminContext'


const AdminState = ({children}) => {

    
    const [datosLogin, setDatosLogin] = useState({
        idUsuario : 0,
        nombre : null,
        apellido : null,
        token: null,
        autenticado : false,
        cargando: true
    })

    const cerrarSesion = ()=>{
        // console.log(history2)
        localStorage.removeItem("token")
        // history2.replace("/")
        setDatosLogin({
            autenticado: false,
            nombre: null,
            apellido: null,
            token: null,
            idUsuario: 0
        })
    }



    //TRAERVETERINARIA
    const [datosConsultorio, setDatosConsultorio] = useState([""]);

    const obtenerVeterinaria = () => {
        getDatosConsultorio(datosLogin.token).then((data)=> {
            setDatosConsultorio(data);
        })
    }
    useEffect(()=> {
        obtenerVeterinaria()
    },[]);

    
    const [editarServicio, setEditarServicio] = useState([])

    const [modal1, setModal1] = useState(false)

 

    const InicioSesion = token => {
        const payload = token.split(".")[1]
        const desencriptar = window.atob(payload)
        const convertirJson = JSON.parse(desencriptar)
        if (convertirJson.usuarioTipo === 1){
            localStorage.setItem("token", token)
            setDatosLogin({
                autenticado: true,
                token: token,
                idUsuario: convertirJson.usuarioTipo,
                nombre: convertirJson.usuarioNombre,
                apellido: convertirJson.usuarioApellido,
                cargando: false
            })
        }
        else{
            alert("usted no es administrador")
        }
    }


    const sesionLocalStorage = ()=>{ 
        if (localStorage.getItem("token")){
            InicioSesion(localStorage.getItem("token"))
        }
    }

    useEffect(()=>{
        sesionLocalStorage()
    }, [])

    return (
        <AdminContext.Provider value={{
            nombre: datosLogin.nombre,
            apellido: datosLogin.apellido,
            token: datosLogin.token,
            autenticado : datosLogin.token,
            idUsuario: datosLogin.idUsuario,
            InicioSesion: InicioSesion,
            cerrarSesion: cerrarSesion,
            datosConsultorio: datosConsultorio,
            obtenerVeterinaria: obtenerVeterinaria,
            cargando: datosLogin.cargando,

            editarServicio: editarServicio,
            setEditarServicio: setEditarServicio,
            modal1: modal1,
            setModal1:setModal1
        }}>
            {
                children
            }
        </AdminContext.Provider>
    )
}

export default AdminState
