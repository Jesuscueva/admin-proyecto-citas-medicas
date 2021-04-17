import React, { useContext, useState } from "react";
import { putDatosConsultorio } from "../../servicios/servicios";
import "./formularioMiCuenta.css";
import "./../../styles.css";
import AdminContext from "../../context/adminContext";

const FormularioMiCuenta = () => {
  const {obtenerVeterinaria, token} = useContext(AdminContext)

  const formularioVacio = {
    veterinariaNombre: "",
    veterinariaLogo: "",
    veterinariaDescripcion: "",
    veterinariaTelefono: "",
    veterinariaDireccion: "",
    veterinariaHorario: "",
    veterinariaCorreo: ""
  }

  const [formulario, setFormulario] = useState(formularioVacio);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const valorImg = (e) =>{
    setFormulario({
      ...formulario,
      veterinariaLogo: e.target.files[0],
    })
  }

  const editarFormulario = (e) => {
    e.preventDefault();
    console.log(formulario)
    const formData= new FormData()
    formData.append("veterinariaNombre", formulario.veterinariaNombre)
    formData.append("veterinariaDescripcion", formulario.veterinariaDescripcion)
    formData.append("veterinariaTelefono", formulario.veterinariaTelefono)
    formData.append("veterinariaDireccion", formulario.veterinariaDireccion)
    formData.append("veterinariaHorario", formulario.veterinariaHorario)
    formData.append("veterinariaLogo", formulario.veterinariaLogo)
    formData.append("veterinariaCorreo", formulario.veterinariaCorreo)
    putDatosConsultorio(formData, token).then((data) => {
      setFormulario(formularioVacio);
      console.log(data)
      obtenerVeterinaria();
    });
  };

  return (
    <div className="formularioMiCuenta__wrapper shadow bg-gray">
      <h3 className="mb-5 p-3 bg-white">Mi Cuenta</h3>

      <form className="row p-5">
        <div className="col-12">
          <label for="veterinariaNombre" className="form-label">
            Nombre Comercial
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaNombre}
            name="veterinariaNombre"
            type="text"
            className="form-control mb-4"
            id="veterinariaNombre"
          />
        </div>
        <div className="col-md-6">
          <label for="veterinariaLogo" className="form-label">
            Logo Empresa
          </label>
          <input
            onChange={valorImg}
            name="veterinariaLogo"
            type="file"
            className="form-control mb-4"
            id="veterinariaLogo"
          />
        </div>

        <div className="col-md-6">
          <label for="veterinariaCorreo" className="form-label">
            Email
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaCorreo}
            name="veterinariaCorreo"
            type="email"
            className="form-control mb-4"
            id="veterinariaCorreo"
          />
        </div>

        <div className="col-md-6">
          <label for="veterinariaTelefono" className="form-label">
            Celular
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaTelefono}
            name="veterinariaTelefono"
            type="text"
            className="form-control mb-4"
            id="veterinariaTelefono"
          />
        </div>

        <div className="col-md-6">
          <label for="inputHorario" className="form-label">
            Horario
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaHorario}
            name="veterinariaHorario"
            type="text"
            className="form-control mb-4"
            id="inputHorario"
          />
        </div>


        <div className="col-12">
          <label for="veterinariaDireccion" className="form-label">
            Direccion
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaDireccion}
            name="veterinariaDireccion"
            type="text"
            className="form-control mb-4"
            id="veterinariaDireccion"
            placeholder="Av Arequipa 4000"
          />
        </div>

        <div className="col-12">
          <label for="veterinariaDescripcion" className="form-label">
            Sobre nosotros
          </label>
          <textarea
            onChange={handleChange}
            value={formulario.veterinariaDescripcion}
            name="veterinariaDescripcion"
            rows="4"
            className="form-control mb-4"
            id="veterinariaDescripcion"
          ></textarea>
        </div>
        <button
          onClick={editarFormulario}
          className="btn btn-info ml-auto mr-auto"
          type="submit"
        >
          Actualizar Datos
        </button>
      </form>
    </div>
  );
};

export default FormularioMiCuenta;
