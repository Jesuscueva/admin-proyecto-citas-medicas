import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginAdmin.css"
import {login} from "../../servicios/login"
import AdminContext from "../../context/adminContext";
import { useHistory } from "react-router-dom";

const AdminLoginScreen = () => {
    const { InicioSesion } = useContext(AdminContext)

    const history = useHistory()
    // console.log(history)

    const [formulario, setFormulario] = useState({
        usuarioEmail: "",
        password : ""
    })

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        })
    }
    const submit = (e) =>{
        e.preventDefault()
        login(formulario).then((data)=> {
            if(data.access){
                InicioSesion(data.access)
                history.push("/admin/dashboard")
            }else{
                alert("usuario Incorrecto")
            }
        })
    }



  return (
    <menu className="container-fluid menu_login">
     <div className="row">
         <div className="col-lg-4 md-6 sm-5">
             <div className="card">
                 <div className="card-body">
                     <form action="" onSubmit={submit}>
                         <div className="form-group">
                             <label htmlFor="usuarioEmail">Correo Administrador</label>
                             <input type="text" placeholder="nombre@empresa.com" value={formulario.usuarioEmail} onChange = {handleChange}
                             className="form-control" id="usuarioEmail" name="usuarioEmail"/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="password">Password</label>
                             <input type="password" name="password" value={formulario.password} onChange={handleChange}
                             id="password" className="form-control"  />
                         </div>
                         <div className="form-group">
                             <button className="btn btn-primary" type="submit">Iniciar Sesión</button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
     </div>
    </menu>
  );
};

export default AdminLoginScreen;
