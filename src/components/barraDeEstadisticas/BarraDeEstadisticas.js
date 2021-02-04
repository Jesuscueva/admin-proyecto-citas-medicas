import React from "react";
import WidgetDeEstadistica from "../widgetEstadisticas/WidgetEstadisticas";
import "./barraDeEstadisticas.css";

const BarraDeEstadisticas = ( {citas, admin} ) => {

  



  return (
    <section className="row stads__wrapper">

        <h1 className="text-white col-12 p-5">Hola {admin}</h1>

        <div className="col-xl-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-end">
          <WidgetDeEstadistica citas={citas}/>
        </div>
        <div className="col-xl-3 col-md-4 col-sm-6  d-flex justify-content-center align-items-end">
        <WidgetDeEstadistica/>
        </div>
        <div className="col-xl-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-end">
        <WidgetDeEstadistica/>
        </div>
    </section>
  );
};

export default BarraDeEstadisticas;
