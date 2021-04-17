import React, { useState, useEffect } from "react";
import Comentario from "../components/comentario/Comentario";
import ComentariosContenedor from "../components/comentariosContenedor/ComentariosContenedor";
import "../styles.css";
import { getComentarios, postComentario } from "./../servicios/servicios";

const ComentariosScreen = () => {

  let [comentarios, setComentarios] = useState([]);

  // useEffect(() => {
  //   getComentarios().then((data) => {
  //     console.log(data);
  //     setComentarios(data);
  //   });
  // }, []);

  return (
    <div className="content__wrapper bg-gray">
      <div className="row bg-gradient-primary text-white pl-5 align-items-center" style={{height:'12rem'}}>
        <h1>Buscar Usuario</h1>
      </div>

      <div className="row p-5 bg-gray" style={{height:"calc(100vh - 12rem)", overflowY:'scroll'}}>
            <div className="col-12 col-sm-12  mb-12">
              <Comentario />
            </div>

      </div>
    </div>
  );
};

export default ComentariosScreen;
