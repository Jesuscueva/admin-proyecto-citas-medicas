import React, {useContext, useState } from "react";
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";
import Modal from 'react-bootstrap/Modal'
import PosContext from "../components/cardVeterinario/context/PosContext";
import ModalVeterinario from "../components/cardVeterinario/ModalVeterinario";
import "../components/cardVeterinario/cardVeterinario.css"
import "../styles.css";
import AgregarVeterinario from "../components/cardVeterinario/AgregarVeterinario";
import Swal from "sweetalert2";
import { deleteVeterinario } from "../servicios/servicios";

const VeterinariosScreen = () => {
  const {setModal,modal ,setVeterinarioEditar, veterinarios,  obtenerVeterinarios } = useContext(PosContext);

  const [modalPrueba, setModalPrueba] = useState(false)

  const [masInfo, setMasInfo] = useState(false)

  const eliminar = vetId => {
    // console.log(vetId)
    Swal.fire({
      title: "¿Seguro de eliminar el producto?",
      icon: "error",
      text: "Los cambios serán irreversibles joven!",
      showCancelButton: true
    }).then(rpta => {
      if(rpta.isConfirmed){
        deleteVeterinario(vetId).then((data)=>{
          if(data.id){
            obtenerVeterinarios()
            Swal.fire({
              title: "Eliminado!",
              icon: "success",
              timer: 700,
              showCancelButton: false,
              position: "top-end"
            })
          }

        })
      }
    })
  }
  
  return (
    <div className="content__wrapper bg-gray">
      <div
        className="row bg-gradient-primary text-white pl-5 align-items-center"
        style={{ height: "12rem" }}
      >
        <h1>Lista de Veterinarios</h1>
      </div>
      <button onClick={()=>{
        setModalPrueba(true)
      }} className="agregarVete">
        +
      </button>
      <div
        className="row p-5"
        style={{ height: "calc(100vh - 12rem)", overflowY: "scroll" }}
      >
        {veterinarios.map((veterinario, i) => {
          return (
            <div className="col-xl-4 col-md-6 col-sm-12 mt-5">
              <div className="veterinario_card">
                <h3 className="nombre_vete">{veterinario.nombre}</h3>
                <p className="parrafo_descripcion">{veterinario.mensaje.substr(0, 80)}... <a  >Leer más</a> </p>
                <p className="contenedor__btn">
                  <button
                    onClick={() => {
                      setVeterinarioEditar(veterinario);
                      setModal(true);
                    }}
                    className="btn btn-primary"
                  >
                    Editar
                  </button>
                  <button className="btn btn-danger" 
                  onClick={()=>{
                    eliminar(veterinario.id)
                  }}
                  >Eliminar</button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Modal isOpen={modal} className="modal__cita">
        <ModalHeader className="titulo_modal">🥼🩺Editar datos del Doctor  🥼🩺</ModalHeader>
        <ModalBody>
        </ModalBody>
      </Modal> */}
      <Modal show={modal} onHide={()=>{
        setModal(false)
      }}>
        <Modal.Header closeButton>
          <Modal.Title>🥼🩺Editar Información del Doc.🥼🩺</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <ModalVeterinario />
        </Modal.Body>
      </Modal>

      <Modal show={modalPrueba} onHide={()=>{
        setModalPrueba(false)
      }} >
        <Modal.Header closeButton>
          Agregar Nuevo Especialista 🥼🩺
        </Modal.Header>
        <Modal.Body >
      <AgregarVeterinario />
        </Modal.Body>
      </Modal>

        
    </div>
  );
};

export default VeterinariosScreen;
