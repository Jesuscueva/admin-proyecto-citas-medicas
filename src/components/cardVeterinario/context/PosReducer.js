const PosReducer = (stateActual, action) =>{
    

    console.log("-------------------")
    console.log(stateActual)
    console.log("********************")
    console.log(action)

    
    if(action.type === "MODAL"){
        return{
            ...stateActual,
            modal: action.data
        }
    }
    
    if(action.type === "NOMBRE"){
        return{
            ...stateActual,
            nombre: action.data
        }
    }
    
    if(action.type === "ID"){
        return{
            ...stateActual,
            id: action.data
        }
    }
}

export default PosReducer