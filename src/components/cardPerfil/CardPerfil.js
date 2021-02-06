import React from 'react'
import './cardPerfil.css'


const CardPerfil = ( {datosConsultorio} ) => {
    console.log("Perfil");
    console.log(datosConsultorio);


    return (
        <div className="card shadow text-center">

            <div className="card-header pt-4 pb-4 text-white" style={{backgroundColor: '#1172EF'}}>
                
            <h3>{datosConsultorio.nombreComercial}</h3>
            </div>

            <div className="card-body">
            <small className="text-muted">Dirección</small>
                <p>{datosConsultorio.direccion}, {datosConsultorio.ciudad}</p>
                <small className="text-muted">Celular</small>
                <p>{datosConsultorio.phone}</p>
                <small className="text-muted">Horario</small>
                <p>{datosConsultorio.horario}</p>
                <small className="text-muted">Sobre nosotros</small>
                <p className="">{datosConsultorio.aboutUs}</p>

                <hr/>

            <small className="text-muted">Administrador</small>
            <p>{datosConsultorio.firstName} {datosConsultorio.lastName}</p>
            <small className="text-muted">Correo</small>
            <p>{datosConsultorio.email}</p>
            </div>

        </div>
    )
}

export default CardPerfil
