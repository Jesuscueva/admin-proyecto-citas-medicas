import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import CalendarioScreen from "./screens/CalendarioScreen";
import VeterinariosScreen from "./screens/VeterinariosScreen";
import MiCuentaScreen from "./screens/MiCuentaScreen";
import ComentariosScreen from "./screens/ComentariosScreen";
import SideBar from "./components/aside/SideBar";
import './styles.css'
import PosState from "./components/cardVeterinario/context/PosState";
import AdminLoginScreen from "./components/login/loginAdmin";
import rutasAdmin from "./rutasAdmin";
import Private from "./private";
import AdminState from "./context/adminState";

const App = () => {
  return (

    

    <div className="principal">

    <AdminState>

      <BrowserRouter>
        <Switch>
          <Private path="/admin" component={rutasAdmin}/> 
          <Route path="/login" component={AdminLoginScreen} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </AdminState>

    </div>

  );
};

export default App;
