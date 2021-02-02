import React from 'react'
import './tablaCitas.css'

const TablaCitas = ({ citas }) => {
    return (
        <div className="tablaCitas__wrapper shadow">
<<<<<<< HEAD
            <h1>Citas</h1>
            <table className="table table-striped table-hover table-bordered">
                <thead className="table-light" >
                    <tr>
                        <th>Id</th>
                        <th>Id de Usuario</th>
                        <th>Fecha</th>
                        <th>Especialidad</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                {
                    citas.map(cita => {
                        return (<tr>
                            <th>{cita.id}</th>
                            <td>{cita.userId}</td>
                            <td>{cita.fecha}</td>
                            <td>{cita.especialidad}</td>
                            <td>{cita.estado}</td>
                        </tr>)
                    })
                }    
                </tbody>
            </table>    

=======
            <h1 className="titulo">Tabla Citas</h1>
>>>>>>> 02c805ab169b004118a0ea6c69495d585deff312
        </div>
    )
}

export default TablaCitas
