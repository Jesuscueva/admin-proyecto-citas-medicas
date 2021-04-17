import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AdminContext from './context/adminContext'

const Private = ({path, component: Component}) => {
    const { autenticado, cargando} = useContext(AdminContext)
    // const cargando = true
    return (

            cargando?
                <div className="row">
                    <div className="col-12 text-center">
                        cargando Joven....
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden"></span>
                            </div>
                            <div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden"></span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden"></span>
</div>
                    </div>
                </div>:
                    autenticado ? <Route path={path} component={Component} /> : <Redirect to="/login" /> 

    )
}

export default Private
