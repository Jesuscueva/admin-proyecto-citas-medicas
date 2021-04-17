import React, {useContext, useEffect, useState} from 'react'
import {getServicios, deleteServicios} from "../../servicios/servicios"
import AdminContext from "../../context/adminContext"
import Swal from "sweetalert2";
import Modal from 'react-bootstrap/Modal'
import ActualizarServicio from './ActualizarServicio';
import "./styleServicio.css"
import AgregarServicio from './AgregarServicio';


const Servicio = () => {
        
        const {token, setEditarServicio, modal1, setModal1} = useContext(AdminContext)
        const [modal2, setModal2] = useState(false)
        
        const [data2, setData] = useState([])
        const obtenerServicio = ()=>{
            getServicios(token).then(data=>{
                // console.log(data)
                setData(data)
            })
        }
        useEffect(()=> {
            obtenerServicio()
        }, [])

        
    const eliminar = vetId => {
        Swal.fire({
        title: `¿Seguro de eliminar el servicio ${vetId}?`,
        icon: "error",
        text: "Los cambios serán irreversibles joven!",
        showCancelButton: true
        }).then(rpta => {
        if(rpta.isConfirmed){
            deleteServicios(vetId, token).then((data)=>{
            if(data.success){
                obtenerServicio()
                Swal.fire({
                title: "Eliminado!",
                icon: "success",
                timer: 700,
                showCancelButton: false,
                position: "top-end"
                })
            }else{
                alert("error al eliminar")
            }

            })
        }
        })
    }
    




    return (
        <div>
            <button onClick={()=>{
                setModal2(true)
                }} className="agregarServi">
                +
            </button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Opciones</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data2.success ? 
                            
                                data2.content.map(dat=>{
                                    return <tr>
                                    <th>{dat.servicioId}</th>
                                        <th>{dat.servicioNombre}</th>
                                        <th>{dat.servicioDescripcion}</th>
                                        <th><img src={`http://127.0.0.1:8000${dat.servicioFoto}`} width="60" height="60" alt=""/></th>
                                        <th><button onClick={()=>{
                                            eliminar(dat.servicioId)
                                        }} class="btn btn-danger">Eliminar</button>
                                        <button type="button" onClick={()=>{
                                            setModal1(true)
                                            setEditarServicio(dat)
                                        }} class="btn btn-warning">Editar</button>
                                        </th>
                                        
                                    </tr>
                                })
                            
                        :   
                            <tr className="text-center">
                                <th colSpan="4">
                                <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden"></span>
                                </div>
                                <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden"></span>
                                </div>
                                <div class="spinner-border text-success" role="status">
                                <span class="visually-hidden"></span>
                                </div>
                                <div class="spinner-border text-danger" role="status">
                                <span class="visually-hidden"></span>
                                </div>
                                <div class="spinner-border text-warning" role="status">
                                <span class="visually-hidden"></span>
                                </div>
                                </th>
                            </tr>
                    }
                </tbody>
            </table>



            <Modal show={modal1} onHide={()=>{
                setModal1(false)
                }}>
                    <Modal.Header closeButton>
                    <Modal.Title>🥼🩺Editar Información del Servicio🥼🩺</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ActualizarServicio obtenerServicio={obtenerServicio} key={true} />
                    </Modal.Body>
                </Modal>

                <Modal show={modal2} onHide={()=>{
                    setModal2(false)
                }} >
                    <Modal.Header closeButton>
                    Agregar Nuevo Servicio 🥼
                    </Modal.Header>
                    <Modal.Body >
                    <AgregarServicio setModal2={setModal2}  obtenerServicio={obtenerServicio} key={true} />
                    </Modal.Body>
                </Modal>
        </div>
    )
}

export default Servicio
