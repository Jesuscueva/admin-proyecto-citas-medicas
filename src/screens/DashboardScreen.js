import React from "react";
import BarraDeEstadisticas  from "./../components/barraDeEstadisticas/BarraDeEstadisticas" 
import HistoricoMensual from "./../components/historicoMensual/HistoricoMensual";
import TablaCitas from "./../components/tablaCitas/TablaCitas";
import "./../styles.css";

const DashboardScreen = () => {
  return (
    <div className="content__wrapper">
      <div className="row">
          <div className="col-12">
            <BarraDeEstadisticas/>
          </div>
      </div>

      {/* <div className="row bg-gray">
        <div className="col-xl-8 col-md-12 col-sm-12 p-0">
          <TablaCitas />
        </div>
        <div className="col-xl-4 col-md-12 col-sm-12 p-0">
          <HistoricoMensual />
        </div>
      </div> */}
      </div>
    
  );
};

export default DashboardScreen;
