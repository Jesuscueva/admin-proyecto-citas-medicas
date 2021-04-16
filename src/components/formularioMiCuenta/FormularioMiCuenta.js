import React, { useContext, useState } from "react";
import { putDatosConsultorio } from "../../servicios/servicios";
import "./formularioMiCuenta.css";
import "./../../styles.css";
import AdminContext from "../../context/adminContext";

const FormularioMiCuenta = ({ setDatosConsultorio }) => {
  const {idUsuario, token} = useContext(AdminContext)

  const formularioVacio = {
    veterinariaId: "1",
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

  const editarFormulario = (e) => {
    e.preventDefault();
    console.log(formulario)
    putDatosConsultorio(formulario, token).then((data) => {
      setFormulario(formularioVacio);
      setDatosConsultorio(data);
    });
  };

  return (
    <div className="formularioMiCuenta__wrapper shadow bg-gray">
      <h3 className="mb-5 p-3 bg-white">Mi Cuenta</h3>

      <form class="row p-5">
        <div class="col-12">
          <label for="veterinariaNombre" class="form-label">
            Nombre Comercial
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaNombre}
            name="veterinariaNombre"
            type="text"
            class="form-control mb-4"
            id="veterinariaNombre"
          />
        </div>
        <div class="col-md-6">
          <label for="veterinariaLogo" class="form-label">
            Logo Empresa
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaLogo}
            name="veterinariaLogo"
            type="text"
            class="form-control mb-4"
            id="veterinariaLogo"
          />
        </div>

        <div class="col-md-6">
          <label for="veterinariaCorreo" class="form-label">
            Email
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaCorreo}
            name="veterinariaCorreo"
            type="email"
            class="form-control mb-4"
            id="veterinariaCorreo"
          />
        </div>

        <div class="col-md-6">
          <label for="veterinariaTelefono" class="form-label">
            Celular
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaTelefono}
            name="veterinariaTelefono"
            type="text"
            class="form-control mb-4"
            id="veterinariaTelefono"
          />
        </div>

        <div class="col-md-6">
          <label for="inputHorario" class="form-label">
            Horario
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaHorario}
            name="veterinariaHorario"
            type="text"
            class="form-control mb-4"
            id="inputHorario"
          />
        </div>


        <div class="col-12">
          <label for="veterinariaDireccion" class="form-label">
            Direccion
          </label>
          <input
            onChange={handleChange}
            value={formulario.veterinariaDireccion}
            name="veterinariaDireccion"
            type="text"
            class="form-control mb-4"
            id="veterinariaDireccion"
            placeholder="Av Arequipa 4000"
          />
        </div>

        <div class="col-12">
          <label for="veterinariaDescripcion" class="form-label">
            Sobre nosotros
          </label>
          <textarea
            onChange={handleChange}
            value={formulario.veterinariaDescripcion}
            name="veterinariaDescripcion"
            rows="4"
            class="form-control mb-4"
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
