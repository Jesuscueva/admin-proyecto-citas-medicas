import React, { useState, useEffect } from "react";
import CardVeterinario from "../components/cardVeterinario/CardVeterinario";
import "../styles.css";
import { getVeterinarios, postVeterinario } from "./../servicios/servicios";

const VeterinariosScreen = () => {
  const [veterinarios, setVeterinarios] = useState([]);

  useEffect(() => {
    getVeterinarios().then((data) => {
      setVeterinarios(data);
    });
  }, []);

  console.log(veterinarios);

  return (
    <div className="content__wrapper bg-gray">
      <div
        className="row bg-gradient-primary text-white pl-5 align-items-center"
        style={{ height: "12rem" }}
      >
        <h1>Lista de Veterinarios</h1>
      </div>
      <div
        className="row p-5"
        style={{ height: "calc(100vh - 12rem)", overflowY: "scroll" }}
      >
        {
        veterinarios.map((veterinario, i) => {
          return (
            <div className="col-xl-4 col-md-6 col-sm-12">
              <CardVeterinario key={i} veterinario={veterinario} />
            </div>
          )
        })
        }
      </div>
    </div>
  );
};

export default VeterinariosScreen;
