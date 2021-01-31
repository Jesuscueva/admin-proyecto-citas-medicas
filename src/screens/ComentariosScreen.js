import React from "react";
import ComentariosContenedor from "../components/comentariosContenedor/ComentariosContenedor";
import "../styles.css";

const ComentariosScreen = () => {
  return (
    <div className="content__wrapper bg-gray">
      <div className="row p-5">
        <h1>Lista De Comentarios</h1>
      </div>

      <div className="row p-5">
        <div className="col-10">
          <ComentariosContenedor />
        </div>
      </div>
    </div>
  );
};

export default ComentariosScreen;
