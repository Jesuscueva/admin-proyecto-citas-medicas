import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AdminContext from './context/adminContext'

const Private = ({path, component: Component}) => {
    const { autenticado, cargando} = useContext(AdminContext)
    // const cargando = true
    return (

            cargando?
                <div>
                    cargando Joven....
                </div>:
                    autenticado ? <Route path={path} component={Component} /> : <Redirect to="/login" /> 

    )
}

export default Private
