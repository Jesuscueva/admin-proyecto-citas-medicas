import React from 'react'
import './cardVeterinario.css'

const CardVeterinario = ({veterinario}) => {
    return (
        <div className="cardVeterinario__wrapper shadow text-center pt-2">
            <h3>{veterinario.nombre}</h3>
            <p className="parrafo_descripcion">{veterinario.mensaje}</p>
           
        </div>
    )
}

export default CardVeterinario
