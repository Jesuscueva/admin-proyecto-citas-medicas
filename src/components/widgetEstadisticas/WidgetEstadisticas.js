import React from "react";
import "./widgetEstadisticas.css";

const WidgetDeEstadistica = ( {titulo ,dato} ) => {
  return (
    <div className="widget__wrapper d-flex justify-content-between align-items-center p-2">
      <div className="datos">
        <h4>{titulo}</h4>
        <p>{dato}</p>
      </div>

      <div className="">
            {/* img */}
      </div>
    </div>
  );
};

export default WidgetDeEstadistica;
