import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import CalendarioScreen from "./screens/CalendarioScreen";
import VeterinariosScreen from "./screens/VeterinariosScreen";
import MiCuentaScreen from "./screens/MiCuentaScreen";
import ComentariosScreen from "./screens/ComentariosScreen";
import SideBar from "./components/aside/SideBar";
import './styles.css'

const App = () => {
  return (
    <main>
    <BrowserRouter>
      
        <SideBar />
        <Switch>
          <Route path="/calendario" component={CalendarioScreen} />
          <Route path="/veterinarios" component={VeterinariosScreen} />
          <Route path="/comentarios" component={ComentariosScreen} />
          <Route path="/miCuenta" component={MiCuentaScreen} />
          <Route path="/" component={DashboardScreen} />
        </Switch>

    </BrowserRouter>
    </main>
  );
};

export default App;
