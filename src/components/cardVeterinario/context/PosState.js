import React, { useContext, useEffect, useReducer, useState } from "react";
import AdminContext from "../../../context/adminContext";
import { getVeterinarios } from "../../../servicios/servicios";
import PosContext from "./PosContext";
import PosReducer from "./PosReducer";

const PosState = ({ children }) => {
  const [state, dispatch] = useReducer(PosReducer, {
    modal: false,
    nombre: "",
    id: 0,
  });
  const {token} = useContext(AdminContext)

  const [veterinarios, setVeterinarios] = useState([]);

  const obtenerVeterinarios = () =>{
    getVeterinarios(token).then((data) => {
      setVeterinarios(data);
    });
  }
  useEffect(() => {
  obtenerVeterinarios()
  }, []);

  const [veterinarioeditar, setVeterinarioEditar] = useState([]);

  const setModal = (valor) => {
    dispatch({
      type: "MODAL",
      data: valor,
    });
  };

  return (
    <PosContext.Provider
      value={{
        modal: state.modal,
        setModal: setModal,
        veterinarioeditar: veterinarioeditar,
        setVeterinarioEditar: setVeterinarioEditar,
        veterinarios:veterinarios,
        setVeterinarios:setVeterinarios,
        obtenerVeterinarios: obtenerVeterinarios
      }}
    >
      {children}
    </PosContext.Provider>
  );
};

export default PosState;
