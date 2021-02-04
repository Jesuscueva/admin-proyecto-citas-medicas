import React, {useEffect, useState} from 'react'
import CardPerfil from '../components/cardPerfil/CardPerfil'
import FormularioMiCuenta from '../components/formularioMiCuenta/FormularioMiCuenta'
import PerfilHeader from '../components/perfilHeader/PerfilHeader'
import {getDatosConsultorio,putDatosConsultorio  } from './../servicios/servicios'

import '../styles.css'

const MiCuentaScreen = () => {

    let [datosConsultorio, setDatosConsultorio] = useState([""]);

    useEffect(()=> {
        getDatosConsultorio().then((data)=> {
            setDatosConsultorio(data[0]);
            console.log(data[0]);
        })
    },[]);



    return (
        <div className="content__wrapper bg-gray">
            <div className="row">
                <div className="col-12">
                    <PerfilHeader adminName={datosConsultorio.admin}/>
                </div>
            </div>

            <div className="row p-5">
                <div className="col-8">
                    <FormularioMiCuenta/>
                </div>
                <div className="col-4">
                    {/* <CardPerfil/> */}
                </div>
            </div>
        
        </div>
    )
}

export default MiCuentaScreen
