import React, { useEffect, useState } from 'react'
import { getCitas } from '../../servicios/servicios'
import './tablaCitas.css'

const TablaCitas = () => {

    
    const [datosUsuario, setDatosUsuarios] = useState([])
    const obtenerDatos = ()=>{
        getCitas().then(data=>{
            setDatosUsuarios(data)
        })
    }
    
    useEffect(()=>{
        obtenerDatos()
    }, [])

    const submit = (e)=> {
        e.preventDefault()
        obtenerDatos()
    }

    return (
        <div className="tablaCitas__wrapper shadow">
            <div className="row">
            <div className="col-6">
            <h1>Citas</h1>
            </div>
            <div className="col-6">
            <form action="" onSubmit={submit}>
                <button type="submit" className="btn btn-success">Obtener Datos</button>
            </form>
            </div>
            </div>
            <div className="table-responsive ">

            <table className="table ">
                <thead >
                    <tr>
                        <th className="th-lg">Nombre del Usuario</th>
                        <th className="th-lg">Mascota</th>
                        <th className="th-lg">Fecha</th>
                        <th className="th-lg">Servicio</th>
                        <th className="th-lg">Precio</th>
                        <th className="th-lg">Estado</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            !datosUsuario.success? <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden"></span>
                                </div>
                            :  
                                datosUsuario.content.map(
                                (cita)=>{
                                    return <tr>
                                                <th>{cita.cliente? cita.cliente.usuarioNombre + " " + cita.cliente.usuarioApellido : "Nombre"}</th>
                                                <th>{cita.cliente? cita.cliente.mascota[0].mascotaNombre: "---"}</th>
                                                <th>{cita.citaFecha}</th>
                                                <th>{cita.servicio? cita.servicio.servicioNombre: "No selecciono"}</th>
                                                <th>{cita.citaCosto}</th>
                                                <th>{cita.citaEstado}</th>
                                            </tr>
                                }
                            )
                        }
                </tbody>
            </table>    
            </div>
        </div>
    )
}

export default TablaCitas
