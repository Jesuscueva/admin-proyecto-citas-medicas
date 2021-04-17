import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import AdminContext from "../../context/adminContext";
import { putVeterinario } from "../../servicios/servicios";
import PosContext from "./context/PosContext";




const ModalVeterinario = () => {
    
    const { modal, setModal, veterinarioeditar, obtenerVeterinarios} = useContext(PosContext);
    const [formulario, setFormulario] = useState(veterinarioeditar);
    console.log(formulario)
    const {token} = useContext(AdminContext)

    
  const handleChange = e =>{
    setFormulario({
      ...formulario,
      veterinaria: 1,
      [e.target.name]: e.target.value
    })
  }
  const valorImg = (e) =>{
    setFormulario({
      ...formulario,
      veterinarioFoto: e.target.files[0],
    })
  }


  const submit = (e)=>{
    e.preventDefault();
    const formData= new FormData()
    formData.append("veterinarioNombre", formulario.veterinarioNombre)
    formData.append("veterinarioApellido", formulario.veterinarioApellido)
    formData.append("veterinarioDescripcion", formulario.veterinarioDescripcion)
    formData.append("veterinarioFoto", formulario.veterinarioFoto)
    formData.append("veterinaria", 1)
    Swal.fire({
      title:  `¿Seguro de editar información de ${veterinarioeditar.veterinarioNombre +" "+ veterinarioeditar.veterinarioApellido} ?`,
      icon: "question",
      text: "los cambios se guardarán en la base de datos",
      showCancelButton: true
    }).then(rpta=> {
      if(rpta.isConfirmed){
        putVeterinario(formData,token, formulario.veterinarioId).then(data => {
          if(data.success) {
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
          <label htmlFor="veterinarioNombre">
            Nombre Veterinario:
          </label>
          <input type="text" name="veterinarioNombre" id="veterinarioNombre"
            className="form-control "
            onChange={handleChange}
            value={formulario.veterinarioNombre}/>
        </div>
        <div className="form-group">
          <label htmlFor="veterinarioApellido">
            Nombre Veterinario:
          </label>
          <input type="text" name="veterinarioApellido" id="veterinarioApellido"
            className="form-control "
            onChange={handleChange}
            value={formulario.veterinarioApellido}/>
        </div>
        <div className="form-group">
        <label htmlFor="veterinarioDescripcion">Informacion de {formulario.veterinarioNombre + " " +formulario.veterinarioApellido}</label>
          <textarea
          className="form-control"
          value={formulario.veterinarioDescripcion}
          name="veterinarioDescripcion" id="veterinarioDescripcion"
          onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="veterinarioFotoe">
            Foto del Veterinario:
          </label>
          <input type="file" name="veterinarioFoto" id="veterinarioFoto"
            className="form-control"
            onChange={valorImg}/>
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
