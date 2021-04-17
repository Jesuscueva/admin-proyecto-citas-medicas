import React from 'react'
import './tablaCitas.css'

const TablaCitas = () => {
    return (
        <div className="tablaCitas__wrapper shadow">
            <h1>Citas</h1>
            <div className="table-responsive ">

            <table className="table ">
                <thead >
                    <tr>
                        <th className="th-lg">Nombre del Usuario</th>
                        <th className="th-lg">Mascota</th>
                        <th className="th-lg">Fecha</th>
                        <th className="th-lg">Servicio</th>
                        <th className="th-lg">Consulta</th>
                        <th className="th-lg">Estado</th>
                    </tr>
                </thead>
                <tbody>
                 Los datos de la citas
                </tbody>
            </table>    
            </div>
        </div>
    )
}

export default TablaCitas
