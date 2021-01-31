import React from "react";
import WidgetDeEstadistica from "../widgetEstadisticas/WidgetEstadisticas";
import "./barraDeEstadisticas.css";

const BarraDeEstadisticas = () => {
  return (
    <section className="row stads__wrapper">

        <div className="col-3 d-flex justify-content-center align-items-end">
          <WidgetDeEstadistica/>
        </div>
        <div className="col-3  d-flex justify-content-center align-items-end">
        <WidgetDeEstadistica/>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-end">
        <WidgetDeEstadistica/>
        </div>
    </section>
  );
};

export default BarraDeEstadisticas;
