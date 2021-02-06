<<<<<<< HEAD
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
=======
import React from 'react'
import './cardVeterinario.css'

const CardVeterinario = ({veterinario}) => {
    return (
        <div className="cardVeterinario__wrapper shadow text-center pt-2">
            <h3>{veterinario.nombre}</h3>
            <p className="parrafo_descripcion">{veterinario.mensaje}</p>
           
        </div>
    )
}

export default CardVeterinario
>>>>>>> 2c4a2ba3ba9b13c926ea6f024d6d7e51ef3910c0
