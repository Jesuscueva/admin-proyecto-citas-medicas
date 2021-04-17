import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import AdminContext from "../../context/adminContext";
import { postVeterinario } from "../../servicios/servicios";
import PosContext from "./context/PosContext";

const formularioVacio = {
  veterinarioNombre: "",
  veterinarioApellido: "",
  veterinarioDescripcion: "",
  veterinaria: 1,
  veterinarioFoto: "",
  veterinarioEstado: true
};
const AgregarVeterinario = () => {

  const [formulario, setFormulario] = useState({ ...formularioVacio });
  const { obtenerVeterinarios} = useContext(PosContext);
  const {token} = useContext(AdminContext)


  const valorImg = (e) =>{
    setFormulario({
      ...formulario,
      veterinarioFoto: e.target.files[0],
    })
  }
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const formData= new FormData()
    formData.append("veterinarioNombre", formulario.veterinarioNombre)
    formData.append("veterinarioApellido", formulario.veterinarioApellido)
    formData.append("veterinarioDescripcion", formulario.veterinarioDescripcion)
    formData.append("veterinarioEstado", formulario.veterinarioEstado)
    formData.append("veterinaria", formulario.veterinaria)
    formData.append("veterinarioFoto", formulario.veterinarioFoto)
    Swal.fire({
      title: "¿Seguro de crear Nuevo Veterinario?",
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then(rpta => {
        if(rpta.isConfirmed){
            postVeterinario( formData, token ).then(data=>{
                if(data.content.veterinarioId){
                    setFormulario(formularioVacio)
                    obtenerVeterinarios()
                    Swal.fire({
                        title: "Hecho!",
                        text: "El Veterinario ha sido creado con éxito",
                        icon: "success",
                        showCancelButton: false,
                        timer: 700,
                        position: "top-right"
                      });
                }
            })
        }
    })
  };



  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="veterinarioNombre">Nombre del Vete.:</label>
          <input
            type="text"
            className="form-control"
            name="veterinarioNombre"
            id="veterinarioNombre"
            value={formulario.veterinarioNombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="veterinarioApellido">Apellido del Vete.:</label>
          <input
            type="text"
            className="form-control"
            name="veterinarioApellido"
            id="veterinarioApellido"
            value={formulario.veterinarioApellido}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="veterinarioDescripcion">Info del veterianrio</label>
          <textarea
          className="form-control"
          value={formulario.veterinarioDescripcion}
          name="veterinarioDescripcion" id="veterinarioDescripcion"
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="veterinarioFoto">Foto del veterianrio</label>
          <input type="file"
            onChange={valorImg}
            name="veterinarioFoto"
            id="veterinarioFoto"
            className="form-control"
          />
        </div>
        <div className="contenedor_btn">
          <button className="btn btn-primary">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default AgregarVeterinario;
