import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {

  const [activo, setActivo] = useState(true)

  const toggler = ()=>{
    activo ? setActivo(false) : setActivo(true)
  }
  console.log(activo)
  return (
    // <div className="">
    //   <div className="bar open" onClick={()=>{
    //     console.log("open")
    //   }
    //   }
    //   >
    //      <i class="fas fa-bars"></i>
    //<i class="far fa-times-circle"></i>
    //   </div>
    <>
    <div className={activo? "openbar desactivado": " openbar"} onClick={toggler}>
    <i class="fas fa-bars"></i>
    </div>

    <div className={activo? "sidebar shadow" : "sidebar open shadow"}>
      <div className="sidebar__logo font-weight-bold">
        <h2>Logo</h2>
        <div className="exit_bar" onClick={toggler}>
          <i class="far fa-times-circle"></i>
        </div>
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
    </>
  );
};

export default SideBar;
