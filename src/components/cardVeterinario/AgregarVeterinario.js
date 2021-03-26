import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { postVeterinario } from "../../servicios/servicios";
import PosContext from "./context/PosContext";

const formularioVacio = {
  nombre: "",
  mensaje: "",
  foto: "",
};
const AgregarVeterinario = () => {

  const [formulario, setFormulario] = useState({ ...formularioVacio });
  const { obtenerVeterinarios} = useContext(PosContext);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Seguro de crear Nuevo Veterinario?",
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then(rpta => {
        if(rpta.isConfirmed){
          // console.log(formulario)
            postVeterinario(formulario).then(data=>{
                if(data.id){
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
          <label htmlFor="nombre">Nombre del Vete.:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            id="nombre"
            value={formulario.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descrip">Info del veterianrio</label>
          <textarea
          className="form-control"
          value={formulario.mensaje}
          name="mensaje" id="mensaje"
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="foto">Foto del veterianrio</label>
          <textarea
            value={formulario.foto}
            onChange={handleChange}
            name="foto"
            id="foto"
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
