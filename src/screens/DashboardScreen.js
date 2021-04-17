import React, { useState, useEffect } from "react";
 
import HistoricoMensual from "./../components/historicoMensual/HistoricoMensual";
import TablaCitas from "./../components/tablaCitas/TablaCitas";
import "./../styles.css";
import { getCitas, getDatosConsultorio, getUsuarios } from "./../servicios/servicios"
import BarraDeEstadisticas from "../components/barraDeEstadisticas/BarraDeEstadisticas";

const DashboardScreen = () => {
  
  const [citas, setCitas] = useState(['']);
  const [admin, setAdmin] = useState(['']);
  const [cantidadDeUsuarios, setCantidadDeUsuarios] = useState([]);
  const [citasXDia, setCitasXDia] = useState([]);
  const [citasXMes, setCitasXMes] = useState([]);


  const calcularCitas = (citas) => {
    let contadorDia = 0;
    let contadorMes = 0;
    citas.forEach((cita) => {
      if (new Date(cita.fecha).getDate() === new Date().getDate()) {
        contadorDia++;
      }
      if(new Date(cita.fecha).getMonth() === new Date().getMonth()){
        contadorMes++;
      }
    });
    setCitasXDia(contadorDia);
    setCitasXMes(contadorMes);
  }


//  useEffect(()=>{

//   getCitas().then(data => {
//     calcularCitas(data);
//     setCitas(data);
//     });
  

//    getUsuarios().then(data=> {
//      setCantidadDeUsuarios(data.length)
//    })
   
//    getDatosConsultorio().then(data=>{
//      setAdmin(data[0].firstName);

//    })
//  }, [])


  return (
    <div className="content__wrapper">
      <div className="row">
          <div className="col-12">
            <BarraDeEstadisticas citasXDia={citasXDia} citasXMes={citasXMes} adminName={admin} cantidadDeUsuarios={cantidadDeUsuarios}/>
          </div>
      </div>

      <div className="row bg-gray p-5">

        <div className="col-xl-12 col-md-12 col-sm-12">
          <TablaCitas citas={citas}/>
        </div>

        {/* <div className="col-xl-4 col-md-12 col-sm-12">
          <HistoricoMensual citas={citas}/>
        </div> */}


      </div>
      </div>
    
  );
};

export default DashboardScreen;
