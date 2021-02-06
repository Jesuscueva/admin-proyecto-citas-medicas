import React, { useReducer } from 'react'
import PosContext from './PosContext'
import PosReducer from './PosReducer'

const PosState = ({children}) => {

    const [state, dispatch] = useReducer(PosReducer, {
        modal : false,
        nombre: "",
        id:0
    })

    const setModal = (valor)=>{
        dispatch({
            type: "MODAL",
            data: valor
        })
    }
    const setNombre = (valor)=>{
        dispatch({
            type: "NOMBRE",
            data: valor
        })
    }
    const setId = (valor)=>{
        dispatch({
            type: "ID",
            data: valor
        })
    }

    return (
        <PosContext.Provider value={
            {
                modal: state.modal,
                setModal: setModal,

                nombre: state.nombre,
                id: state.id,
                setId: setId,
                setNombre: setNombre
            }
        } >
           {children}
        </PosContext.Provider>
    )
}

export default PosState
