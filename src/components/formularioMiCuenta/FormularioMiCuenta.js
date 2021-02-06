import React, { useState } from "react";
import { putDatosConsultorio } from "../../servicios/servicios";
import "./formularioMiCuenta.css";
import "./../../styles.css";

const FormularioMiCuenta = ({ setDatosConsultorio }) => {

  const formularioVacio = {
    id: "1",
    nombreComercial: "",
    email: "",
    password: "",
    firstname: "",
    lastName: "",
    phone: "",
    direccion: "",
    horario: "",
    departamento: "",
    provincia: "",
    ciudad: "",
    aboutUs: "",
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
    putDatosConsultorio(formulario).then((data) => {
      setFormulario(formularioVacio);
      setDatosConsultorio(data);
    });
  };

  return (
    <div className="formularioMiCuenta__wrapper shadow bg-gray">
      <h3 className="mb-5 p-3 bg-white">Mi Cuenta</h3>

      <form class="row p-5">
        <div class="col-12">
          <label for="inputNombreComercial" class="form-label">
            Nombre Comercial
          </label>
          <input
            onChange={handleChange}
            value={formulario.nombreComercial}
            name="nombreComercial"
            type="text"
            class="form-control mb-4"
            id="inputNombreComercial"
          />
        </div>

        <div class="col-md-6">
          <label for="inputEmail" class="form-label">
            Email
          </label>
          <input
            onChange={handleChange}
            value={formulario.email}
            name="email"
            type="email"
            class="form-control mb-4"
            id="inputEmail"
          />
        </div>

        <div class="col-md-6">
          <label for="inputPassword" class="form-label">
            Contraseña
          </label>
          <input
            onChange={handleChange}
            value={formulario.password}
            name="password"
            type="password"
            class="form-control mb-4"
            id="inputPassword"
          />
        </div>

        <div class="col-md-6">
          <label for="inputName" class="form-label">
            Primer nombre
          </label>
          <input
            onChange={handleChange}
            value={formulario.firstName}
            name="firstName"
            type="text"
            class="form-control mb-4"
            id="inputName"
          />
        </div>
        <div class="col-md-6 mb-5">
          <label for="inputLastname" class="form-label">
            Apellido
          </label>
          <input
            onChange={handleChange}
            value={formulario.lastName}
            name="lastName"
            type="text"
            class="form-control mb-4"
            id="inputLasname"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPhone" class="form-label">
            Celular
          </label>
          <input
            onChange={handleChange}
            value={formulario.phone}
            name="phone"
            type="number"
            class="form-control mb-4"
            id="inputPhone"
          />
        </div>

        <div class="col-md-6">
          <label for="inputHorario" class="form-label">
            Horario
          </label>
          <input
            onChange={handleChange}
            value={formulario.horario}
            name="horario"
            type="text"
            class="form-control mb-4"
            id="inputHorario"
          />
        </div>


        <div class="col-12">
          <label for="inputDireccion" class="form-label">
            Direccion
          </label>
          <input
            onChange={handleChange}
            value={formulario.direccion}
            name="direccion"
            type="text"
            class="form-control mb-4"
            id="inputDireccion"
            placeholder="Av Arequipa 4000"
          />
        </div>

        <div class="col-md-4">
          <label for="inputDepartamento" class="form-label">
            Departamento
          </label>
          <input
            onChange={handleChange}
            value={formulario.departamento}
            name="departamento"
            type="text"
            class="form-control mb-4"
            id="inputDepartamento"
          />
        </div>
        <div class="col-md-4">
          <label for="inputProvincia" class="form-label">
            Provincia
          </label>
          <input
            onChange={handleChange}
            value={formulario.provincia}
            name="provincia"
            type="text"
            class="form-control mb-4"
            id="inputProvincia"
          />
        </div>
        <div class="col-md-4 mb-5">
          <label for="inputCiudad" class="form-label">
            Ciudad
          </label>
          <input
            onChange={handleChange}
            value={formulario.ciudad}
            name="ciudad"
            type="text"
            class="form-control mb-4"
            id="inputCiudad"
          />
        </div>
        <div class="col-12">
          <label for="sobreNosotros" class="form-label">
            Sobre nosotros
          </label>
          <textarea
            onChange={handleChange}
            value={formulario.aboutUs}
            name="aboutUs"
            rows="4"
            class="form-control mb-4"
            id="sobreNosotros"
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
