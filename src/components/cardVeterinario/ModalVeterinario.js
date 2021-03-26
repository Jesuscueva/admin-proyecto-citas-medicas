import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { putVeterinario } from "../../servicios/servicios";
import PosContext from "./context/PosContext";




const ModalVeterinario = () => {
    
    const { modal, setModal, veterinarioeditar, obtenerVeterinarios} = useContext(PosContext);
    const [formulario, setFormulario] = useState(veterinarioeditar);

    
  const handleChange = e =>{
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }



  const submit = (e)=>{
    e.preventDefault();
    Swal.fire({
      title:  `¿Seguro de editar información de ${veterinarioeditar.nombre} ?`,
      icon: "question",
      text: "los cambios se guardarán en la base de datos",
      showCancelButton: true
    }).then(rpta=> {
      if(rpta.isConfirmed){
        putVeterinario(formulario).then(data => {
          if(data.id) {
            setModal(false)
            obtenerVeterinarios()
            Swal.fire({
              title: "Atualizacion exitosa",
              icon: "success",
              timer: 700,
              showCancelButton: false 
            })
          }
        })
      }
    })
  }


  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="id">Id:</label>
          <input type="number" className="form-control"
          value={formulario.id}
          id="id"
          name="id"
          onChange={handleChange}
          readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">
            Nombre Veterinario:
          </label>
          <input type="text" name="nombre" id="nombre"
            className="form-control "
            onChange={handleChange}
            value={formulario.nombre}/>
        </div>
        <div className="form-group">
         <label htmlFor="mensaje">Informacion de {formulario.nombre}</label>
          <textarea
          className="form-control"
          value={formulario.mensaje}
          name="mensaje" id="mensaje"
          onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group contenedor__btn">
          <button className="btn btn-primary"
          type="submit"
          > Editar Información</button>
        </div>
      </form>
    </div>
  );
};

export default ModalVeterinario;
