import React from "react";
import WidgetDeEstadistica from "../widgetEstadisticas/WidgetEstadisticas";
import "./barraDeEstadisticas.css";

const BarraDeEstadisticas = ( {citas} ) => {

  let labels = citas.map(cita => {
    return citas.fecha;
  })

  let data =   {
    labels: labels,
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
}



  return (
    <section className="row stads__wrapper">

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
