import React, { useEffect, useState } from "react";
import { buscarCitasDelUsuario } from "../../servicios/servicios";

const vacio = {
    nombre: ""
}

const Comentario = () => {

    const [usuario, setUsuario] = useState(vacio)


    const buscar = (e) =>{
        setUsuario({
            [e.target.name]: e.target.value
        })
    }

    const [datosUsuario, setDatosUsuarios] = useState([])
    const obtenerDatos = (valor=" ")=>{
        buscarCitasDelUsuario(valor).then(data=>{
            setDatosUsuarios(data)
        })
    }
    useEffect(()=>{
        obtenerDatos()
    }, [])


    const submit = e =>{
        e.preventDefault()
        console.log(usuario)
        obtenerDatos(usuario.nombre)
        setUsuario(vacio)
    }

    return (
        <>
        <div className="row mb-5">
            <div className="col">
            <form class="form-inline my-2 my-lg-0" onSubmit={submit}>
            <input class="col-lg-10 col-sm-10 form-control mr-sm-2" value={usuario.nombre} name="nombre" onChange={buscar} type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

            </div>
        </div>
        <div className="row mt-5">
            <div className="col table-responsive">
            <table class="table  table-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <td>Nombre Completo</td>
                        <td>Email</td>
                        <td>Celular</td>
                        <td>Fecha</td>
                        <td>Servicio</td>
                        <td>Estado</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        !datosUsuario.success? 
                                <tr><th className="text-center" colSpan="7">Coloca el Nombre del Usuario</th> </tr> : datosUsuario.content.cita.length === 0? <tr><th className="text-center" colSpan="7">Este usuario no tiene citas</th> </tr> : datosUsuario.content.cita.map((citaUsu)=>{
                                    return <tr>
                                            <th scope="row">{datosUsuario.content.usuarioId}</th>
                                            <td>{datosUsuario.content.usuarioNombre + " "+datosUsuario.content.usuarioApellido }</td>
                                            <td>{datosUsuario.content.usuarioEmail}</td>
                                            <td>{datosUsuario.content.usuarioCelular}</td>
                                            <td>{citaUsu.citaFecha}</td>
                                            <td>{citaUsu.servicio? citaUsu.servicio.servicioNombre : "No selecciono servicio"}</td>
                                            <td>{citaUsu.citaEstado === 1 ? "Pendiente": "Cancelado"}</td>
                                        </tr> 
                                })
                    }

                </tbody>
            </table>
            </div>
        </div>


        </>
    );
};

export default Comentario;
