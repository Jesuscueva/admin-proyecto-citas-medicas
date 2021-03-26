import React, {useEffect, useState} from 'react'
import CardPerfil from '../components/cardPerfil/CardPerfil'
import FormularioMiCuenta from '../components/formularioMiCuenta/FormularioMiCuenta'
import PerfilHeader from '../components/perfilHeader/PerfilHeader'
import {getDatosConsultorio,putDatosConsultorio  } from './../servicios/servicios'

import '../styles.css'

const MiCuentaScreen = () => {

    const [datosConsultorio, setDatosConsultorio] = useState([""]);

 
    useEffect(()=> {
        getDatosConsultorio().then((data)=> {
            setDatosConsultorio(data[0]);
        })
    },[]);




    return (
        <div className="content__wrapper bg-gray">
            <div className="row">
                <div className="col-12">
                    <PerfilHeader adminName={datosConsultorio.firstName}/>
                </div>
            </div>

            <div className="row p-5">
                <div className="col-md-8 col-ms-12 mb-4">
                    <FormularioMiCuenta setDatosConsultorio={setDatosConsultorio}/>
                </div>
                <div className="col-md-4 col-ms-12 mb-4 mt-4" >
                    <CardPerfil  datosConsultorio={datosConsultorio} />
                </div>
            </div>
        
        </div>
    )
}

export default MiCuentaScreen
