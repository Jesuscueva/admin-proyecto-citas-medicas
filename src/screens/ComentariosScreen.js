import React from "react";
import ComentariosContenedor from "../components/comentariosContenedor/ComentariosContenedor";
import "../styles.css";

const ComentariosScreen = () => {
  return (
    <div className="content__wrapper">
      <div className="row">
        <div className="col-8">
          <ComentariosContenedor />
        </div>
      </div>
    </div>
  );
};

export default ComentariosScreen;
