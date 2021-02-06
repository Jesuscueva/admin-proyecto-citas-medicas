import React from 'react'
import './perfilHeader.css'

const PerfilHeader = ({adminName}) => {
    return (
        <div className="perfilHeader__wrapper p-5 d-flex align-items-end">
            <h1 className="mb-5">Hola {adminName}</h1>
        </div>
    )
}

export default PerfilHeader
