import React from 'react'
import Clientes from '../components/clientes/Clientes'
import '../styles.css'
import Calendario from "./../components/calendario/Calendario"


const CalendarioScreen = () => {
    return (
        <div className="content__wrapper">
            <div className="row">
                <div className="col-8">
                    <Calendario/>
                </div>
                <div className="col-4">
                    <Clientes/>
                </div>
            </div>
        </div>
    )
}

export default CalendarioScreen
