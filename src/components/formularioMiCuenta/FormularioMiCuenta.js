import React from "react";
import "./formularioMiCuenta.css";

const FormularioMiCuenta = () => {
  return (
    <div className="formularioMiCuenta__wrapper shadow p-5">
      <h3 className="mb-5">Mi Cuenta</h3>
      
      <form class="row">
          <div class="col-md-6">
            <label for="inputUsername" class="form-label">
              Username
            </label>
            <input type="email" class="form-control mb-4" id="inputUsername" />
          </div>
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">
              Email
            </label>
            <input type="password" class="form-control mb-4" id="inputEmail" />
          </div>
          <div class="col-md-6">
            <label for="inputName" class="form-label">
              Primer nombre
            </label>
            <input type="password" class="form-control mb-4" id="inputName" />
          </div>
          <div class="col-md-6 mb-5">
            <label for="inputLasname" class="form-label">
              Apellido
            </label>
            <input type="password" class="form-control mb-4" id="inputLasname" />
          </div>

        <div class="col-12">
          <label for="inputDireccion" class="form-label">
            Direccion
          </label>
          <input
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
          <input type="text" class="form-control mb-4" id="inputDepartamento" />
        </div>
        <div class="col-md-4">
          <label for="inputProvincia" class="form-label">
            Provincia
          </label>
          <input type="text" class="form-control mb-4" id="inputProvincia" />
        </div>
        <div class="col-md-4 mb-5">
          <label for="inputCiudad" class="form-label">
            Ciudad
          </label>
          <input type="text" class="form-control mb-4" id="inputCiudad" />
        </div>
        <div class="col-12">
          <label for="sobreNosotros" class="form-label">
            Sobre nosotros
          </label>
          <textarea rows="4" class="form-control mb-4" id="sobreNosotros"></textarea>
        </div>
        </form>
    </div>
  );
};

export default FormularioMiCuenta;
