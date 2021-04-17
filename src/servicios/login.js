const URL_BACK = "https://app-citas-grupo5.herokuapp.com"

export const login = async (objdatos) => {
    const peticion = await fetch(`${URL_BACK}/login_custom`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(objdatos)
    })
    let data = await peticion.json()
    return data
}