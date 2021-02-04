import React from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div class="sidebar shadow">
      <div className="sidebar__logo font-weight-bold">
        <h2>Logo</h2>
      </div>
      <ul className="sidebar__menu">
        <li>
          <NavLink className="menu__option" exact to="/dashboard">
            <i className="icon mr-3 fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink className="menu__option" to="/comentarios">
            <i className="icon mr-3 fas fa-user-md"></i>Reseñas
          </NavLink>
        </li>
        <li>
          <NavLink className="menu__option" to="/veterinarios">
            <i className="icon mr-3 fas fa-user-md"></i>Veterinarios
          </NavLink>
        </li>
        <li>
          <NavLink className="menu__option miCuenta" to="/miCuenta">
            <i className="icon mr-3 fas fa-user-alt"></i>Mi Cuenta
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
