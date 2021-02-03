import React, { useState, useEffect } from "react";
 
import HistoricoMensual from "./../components/historicoMensual/HistoricoMensual";
import TablaCitas from "./../components/tablaCitas/TablaCitas";
import "./../styles.css";
import { getCitas } from "./../servicios/servicios"
import BarraDeEstadisticas from "../components/barraDeEstadisticas/BarraDeEstadisticas";

const DashboardScreen = () => {
  
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    getCitas().then(data => {
      console.log(data);
      setCitas(data);
    });
  }, []);
  
  return (
    <div className="content__wrapper">
      <div className="row">
          <div className="col-12">
            <BarraDeEstadisticas citas={citas}/>
          </div>
      </div>

      <div className="row bg-gray p-5">

        <div className="col-xl-8 col-md-12 col-sm-12">
          <TablaCitas citas={citas}/>
        </div>

        <div className="col-xl-4 col-md-12 col-sm-12">
          <HistoricoMensual citas={citas}/>
        </div>


      </div>
      </div>
    
  );
};

export default DashboardScreen;
