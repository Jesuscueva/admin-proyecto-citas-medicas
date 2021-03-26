const PosReducer = (stateActual, action) =>{
    

    if(action.type === "MODAL"){
        return{
            ...stateActual,
            modal: action.data
        }
    }
    

}

export default PosReducer