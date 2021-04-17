import React, { useState } from "react";
import { buscarCitasDelUsuario } from "../../servicios/servicios";


const Comentario = () => {

    const [usuario, setUsuario] = useState(" ")

    const [citas, setCitas] = useState({})

    const buscar = (e) =>{
        setUsuario(
            e.target.value
        )
    }
    const submit = e =>{
        e.preventDefault()
        console.log(usuario)
        buscarCitasDelUsuario(usuario).then(data=>{
            console.log(data)
            setCitas(data)
        })
    }
    // const arrayCitas = citas.content.cita.length
    // console.log(citas.content)
    return (
        <>
        <div className="row mb-5">
            <div className="col">
            <form class="form-inline my-2 my-lg-0" onSubmit={submit}>
            <input class="col-lg-10 col-sm-10 form-control mr-sm-2" name="buscarUsuario" value={usuario} onChange={buscar} type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

            </div>
        </div>
        <div className="row mt-5">
            <div className="col table-responsive">
            <table class="table  table-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <td>Nombre Completo</td>
                        <td>Email</td>
                        <td>Celular</td>
                        <td>Fecha</td>
                        <td>Servicio</td>
                        <td>Estado</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>sss</td>
                        <td>sss</td>
                    </tr> */}
                </tbody>
            </table>
            </div>
        </div>


        </>
    );
};

export default Comentario;
