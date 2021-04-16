import React, {useContext, useEffect, useState} from 'react'
import CardPerfil from '../components/cardPerfil/CardPerfil'
import FormularioMiCuenta from '../components/formularioMiCuenta/FormularioMiCuenta'
import PerfilHeader from '../components/perfilHeader/PerfilHeader'
import {getDatosConsultorio,putDatosConsultorio  } from './../servicios/servicios'

import '../styles.css'
import AdminContext from '../context/adminContext'

const MiCuentaScreen = () => {

    const {datosConsultorio} = useContext(AdminContext)



    return (
        <div className="content__wrapper bg-gray">
            <div className="row">
                <div className="col-12">
                    <PerfilHeader/>
                </div>
            </div>

            <div className="row p-5">
                <div className="col-md-8 col-ms-12 mb-4">
                <div className="card shadow text-center">
                        <FormularioMiCuenta /> 
                </div>  
                </div>
                <div className="col-md-4 col-ms-12 mb-4 mt-4" >
                <div className="card-header pt-4 pb-4 text-white" style={{backgroundColor: '#1172EF'}}>
                    </div>
                    {
                        datosConsultorio.success? 
                        <div className="card-body text-center">
                    <CardPerfil  /> 
                        </div>:
                        <div className="col-xl-4 col-md-6 col-sm-12 mt-5">
                            cargando...
                            <div class="spinner-border text-info" role="status">
                                <span class="visually-hidden"></span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        
        </div>
    )
}

export default MiCuentaScreen
