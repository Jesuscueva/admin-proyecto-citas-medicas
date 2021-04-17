import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import CalendarioScreen from "./screens/CalendarioScreen";
import VeterinariosScreen from "./screens/VeterinariosScreen";
import MiCuentaScreen from "./screens/MiCuentaScreen";
import ComentariosScreen from "./screens/ComentariosScreen";
import SideBar from "./components/aside/SideBar";
import PosState from "./components/cardVeterinario/context/PosState";
import ServicioRouter from './screens/ServicioRouter';


const rutasAdmin = () => {
    return (
    
    <div className="rutas">

    <PosState>

        <SideBar />
        <Switch>
            <Route path="/admin/servicios" component={ServicioRouter} />
            <Route path="/admin/calendario" component={CalendarioScreen} />
            <Route path="/admin/veterinarios" component={VeterinariosScreen} />
            <Route path="/admin/comentarios" component={ComentariosScreen} />
            <Route path="/admin/miCuenta" component={MiCuentaScreen} />
            <Route path="/admin/dashboard" component={DashboardScreen} />
        </Switch>
    </PosState>

    </div>

    )
}

export default rutasAdmin



