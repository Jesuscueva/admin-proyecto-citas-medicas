import React, { useContext, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Row,
  Label,
  Col,
  Input,
  FormGroup,
} from "reactstrap";
import PosContext from "./context/PosContext";

const formVacio = {

    nombre: "",
    mensaje:"",
}



const ModalVeterinario = () => {
    
    const { modal, setModal, nombre, id} = useContext(PosContext);

    
    const [formulario, setFormulario] = useState({...formVacio});
  const handleChange = e =>{
    setFormulario({
      ...formulario,
      id: id,
      [e.target.name]: e.target.value
    })
  }


  const submit = (e)=>{
    e.preventDefault();
    console.log("formulario enviado")
    console.log(formulario)
    setFormulario(formVacio)
    setModal(false)
    
  }


  return (
    <div>
      <Modal isOpen={modal} className="modal__cita">
        <ModalHeader className="titulo_modal">🥼🩺Editar datos de {nombre} 🥼🩺</ModalHeader>
        <ModalBody>
          <Form onSubmit={submit}>
            <Row form>
            <Col md={12}>
              <FormGroup>
              <Label for="id" >
                Id:
              </Label>
                <Input
                onChange={handleChange}
                  type="number"
                  name="id"
                  id="id"
                  value={id}
                />
              </FormGroup>
              </Col>
              <Col md={12}>
              <FormGroup>
              <Label for="nombre" >
                Nombre:
              </Label>
                <Input
                onChange={handleChange}
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={formulario.nombre}
                />
              </FormGroup>
              </Col>
            <br/>
              <Col md={12}>
            <FormGroup>
            <Label for="mensaje">
               Sobre ti:
              </Label>
                <Input
                onChange={handleChange}
                  type="textarea"
                  name="mensaje"
                  id="mensaje"
                 value={formulario.mensaje}
                />
            </FormGroup>
              </Col>   
            
            </Row>
            
            <br/>
            <Button color="primary" type="submit">
              Guardar Cambios   
            </Button>{" "}
            <Button
              color="danger"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalVeterinario;
