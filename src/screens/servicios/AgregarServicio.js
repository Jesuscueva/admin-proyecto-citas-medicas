
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import AdminContext from '../../context/adminContext';
import { postServicios } from '../../servicios/servicios';
const formularioVacio = {
    servicioDescripcion: "",
    servicioFoto: "",
    servicioNombre: "",
    servicioEstado: true,
    veterinaria: 1,
    };
const AgregarServicio = ({setModal2, obtenerServicio}) => {
    const {token} = useContext(AdminContext)
    const [formulario, setFormulario] = useState({ ...formularioVacio });




    const valorImg = (e) =>{
        setFormulario({
            ...formulario,
            servicioFoto: e.target.files[0],
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
            formData.append("servicioDescripcion", formulario.servicioDescripcion)
            formData.append("servicioFoto", formulario.servicioFoto)
            formData.append("servicioNombre", formulario.servicioNombre)
            formData.append("servicioEstado", formulario.servicioEstado)
            formData.append("veterinaria", 1)
            Swal.fire({
                title: "¿Seguro de crear Nuevo Veterinario?",
                icon: "question",
                text: "Los cambios se guardarán en la base de datos",
                showCancelButton: true,
                }).then(rpta => {
                    if(rpta.isConfirmed){
                        postServicios( formData, token ).then(data=>{
                            if(data.content.servicioId){
                                setFormulario(formularioVacio)
                                obtenerServicio()
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
            <label htmlFor="servicioNombre">
                Nombre Servicio:
            </label>
            <input type="text" name="servicioNombre" id="servicioNombre"
                className="form-control "
                onChange={handleChange}
                value={formulario.servicioNombre}/>
            </div>
            
            <div className="form-group">
            <label htmlFor="servicioDescripcion">Informacion del Servicio</label>
            <textarea required
            className="form-control"
            value={formulario.servicioDescripcion}
            name="servicioDescripcion" id="servicioDescripcion"
            onChange={handleChange}
            ></textarea>
            </div>
            <div className="form-group">
            <label htmlFor="servicioFoto">
                Foto del Servicio:
            </label>
            <input type="file" name="servicioFoto" id="servicioFoto"
                className="form-control"
                onChange={valorImg}/>
            </div>
            <div className="form-group contenedor__btn">
            <button className="btn btn-primary"
            type="submit"
            > Agregar Servicio</button>
            </div>
        </form>
        </div>
    )
}

export default AgregarServicio
