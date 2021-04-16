import React, { useContext } from 'react'
import AdminContext from '../../context/adminContext'
import './perfilHeader.css'

const PerfilHeader = () => {
    const {nombre, apellido} = useContext(AdminContext)
    return (
        <div className="perfilHeader__wrapper p-5 d-flex align-items-center justify-content-end" >
            <h1 className="mb-5">Hola {`${nombre} ${apellido}`}</h1>
        </div>
    )
}

export default PerfilHeader
