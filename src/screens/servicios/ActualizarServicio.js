import React, { useContext, useState } from 'react'
import AdminContext from '../../context/adminContext'
import Swal from "sweetalert2";
import { putServicios } from '../../servicios/servicios';

const ActualizarServicio = ({ obtenerServicio}) => {

    const {token, editarServicio, setModal1} = useContext(AdminContext)

    const [formulario, setFormulario] = useState(editarServicio);
    
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
        servicioFoto: e.target.files[0],
        })
    }

    const submit = (e)=>{
        e.preventDefault();
        const formData= new FormData()
        formData.append("servicioDescripcion", formulario.servicioDescripcion)
        formData.append("servicioFoto", formulario.servicioFoto)
        formData.append("servicioNombre", formulario.servicioNombre)
        formData.append("veterinaria", 1)
        Swal.fire({
            title:  `¿Seguro de editar información de ${editarServicio.servicioNombre} ?`,
            icon: "question",
            text: "los cambios se guardarán en la base de datos",
            showCancelButton: true
            }).then(rpta=> {
            if(rpta.isConfirmed){
                putServicios(formData,token, formulario.servicioId).then(data => {
                
                if(data.success) {
                    setModal1(false)
                    obtenerServicio()
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
            <label htmlFor="servicioNombre">
                Nombre del Servicio:
            </label>
            <input type="text" name="servicioNombre" id="servicioNombre"
                className="form-control "
                onChange={handleChange}
                value={formulario.servicioNombre}/>
            </div>
            
            <div className="form-group">
            <label htmlFor="servicioDescripcion">Informacion del Servicio</label>
            <textarea
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
            > Editar Información</button>
            </div>
        </form>
        </div>
    )
}

export default ActualizarServicio
