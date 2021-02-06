import React, { useContext, useState } from "react";
import "./cardVeterinario.css";
import PosContext from "./context/PosContext";
import ModalVeterinario from "./ModalVeterinario";


const CardVeterinario = ({veteri}) => {
    const { setModal, setNombre, setId} = useContext(PosContext)

    const abrirModal = ()=>{
        setModal(true)

    }

  return (
    <div className="col-xl-4 col-md-6 col-sm-12 tarjeta_vete" >
      <div className="card veterinario__wrapper shadow text-center veterinario p-2">
        <h2 className="nombre_vete">{veteri.nombre}</h2>
        <p className="parrafo_descripcion">
          {veteri.mensaje}
        </p>
        <button  class="btn btn-primary" onClick={()=>{
            abrirModal()
            setNombre(veteri.nombre)
            setId(veteri.id)
        }} >Editar</button>
      </div>

      <ModalVeterinario />
      
    </div>
  );
};

export default CardVeterinario;
