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
import PosState from "./components/cardVeterinario/context/PosState";

const App = () => {
  return (
<<<<<<< HEAD
    <body>
    <PosState>
=======
    <main>
>>>>>>> 2c4a2ba3ba9b13c926ea6f024d6d7e51ef3910c0
    <BrowserRouter>
      
      <SideBar />
      <Switch>
        <Route path="/calendario" component={CalendarioScreen} />
        <Route path="/veterinarios" component={VeterinariosScreen} />
        <Route path="/comentarios" component={ComentariosScreen} />
        <Route path="/miCuenta" component={MiCuentaScreen} />
        <Route path="/" component={DashboardScreen} />
      </Switch>

<<<<<<< HEAD
  </BrowserRouter>
    </PosState>
    </body>
=======
    </BrowserRouter>
    </main>
>>>>>>> 2c4a2ba3ba9b13c926ea6f024d6d7e51ef3910c0
  );
};

export default App;
