import React from 'react'
import { Bar } from "react-chartjs-2"
import './historicoMensual.css'

const HistoricoMensual = ( { citas }) => {

    let labels = citas.map(cita => {
        return cita.fecha;
      })
    
      let data =   {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [{
            label: 'Cantidad de citas',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    }


    return (
        <div className="historicoMensual__wrapper shadow">
            <h1 className="titulo" >Histórico Mensual</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <Bar data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoricoMensual
