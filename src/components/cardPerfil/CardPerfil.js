import React, { useContext } from 'react'
import AdminContext from '../../context/adminContext'
import './cardPerfil.css'


const CardPerfil = () => {

    const {datosConsultorio} = useContext(AdminContext)
    const datosVeterinaria = datosConsultorio.content[0]
    console.log(datosVeterinaria)

    return (
        <div>

        <h3>{datosVeterinaria.veterinariaNombre}</h3>
            

            <div className="card-body">
            <small className="text-muted">Dirección</small>
                <p>{datosVeterinaria.veterinariaDireccion}</p>
                <small className="text-muted">Celular</small>
                <p>{datosVeterinaria.veterinariaTelefono}</p>
                <small className="text-muted">Horario</small>
                <p>{datosVeterinaria.veterinariaHorario}</p>
                <small className="text-muted">Sobre nosotros</small>
                <p className="">{datosVeterinaria.veterinariaDescripcion}</p>

                <hr/>
            <small className="text-muted">Correo</small>
            <p>{datosVeterinaria.veterinariaCorreo}</p>
            </div>
</div>
    )
}

export default CardPerfil
