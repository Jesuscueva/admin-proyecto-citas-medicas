import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AdminContext from './context/adminContext'

const Private = ({path, component: Component}) => {
    const { autenticado } = useContext(AdminContext)
    return (
        <div>
        {
            autenticado ? <Route path={path} component={Component} /> : <Redirect to="/login" /> 
        }
        </div>
    )
}

export default Private
