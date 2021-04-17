import React, { useState, useEffect } from "react";

import "./barraDeEstadisticas.css";

const BarraDeEstadisticas = ({ adminName, cantidadDeUsuarios, citasXDia, citasXMes }) => {
  

  

  return (
    <section className="row stads__wrapper ">
      <div className="col-xl-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-end">
        {/* <WidgetDeEstadistica titulo={"Usuarios"} dato={cantidadDeUsuarios} /> */}
      </div>
      <div className="col-xl-3 col-md-4 col-sm-6  d-flex justify-content-center align-items-end">
        {/* <WidgetDeEstadistica  titulo={"Citas / Dia"} dato={citasXDia} /> */}
      </div>
      <div className="col-xl-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-end">
        {/* <WidgetDeEstadistica titulo={"Citas / Mes"} dato={citasXMes} /> */}
      </div>
    </section>
  );
};

export default BarraDeEstadisticas;
