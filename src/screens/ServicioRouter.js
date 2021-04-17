import React from 'react'
import CabeceraServicio from './servicios/CabeceraServicio'
import Servicio from './servicios/Servicio'
import "./servicios/styleServicio.css"

const ServicioRouter = () => {
    return (
        <>
        <div className="container">
            <div clasName="row">
                <div className="col-12 mb-5">
                    <CabeceraServicio />
                </div>
            </div>
            <div className="row mt-5">
            <div className="col-12">
            <Servicio />
            </div>
            </div>
        </div>
        </>
    )
}

export default ServicioRouter