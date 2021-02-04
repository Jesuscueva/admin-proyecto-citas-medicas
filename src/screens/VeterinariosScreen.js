import React from 'react'
import CardVeterinario from '../components/cardVeterinario/CardVeterinario'
import '../styles.css'
import { getVeterinarios, postVeterinario } from "./../servicios/servicios"

const VeterinariosScreen = () => {
    return (
        <div className="content__wrapper bg-gray">
            <div className="row bg-gradient-primary text-white pl-5 align-items-center" style={{height:'12rem'}}>
                <h1>Lista de Veterinarios</h1>
            </div>
            <div className="row p-5" style={{height:"calc(100vh - 12rem)", overflowY:'scroll'}}>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <CardVeterinario/>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <CardVeterinario/>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <CardVeterinario/>
                </div>
            </div>
        </div>
    )
}

export default VeterinariosScreen
