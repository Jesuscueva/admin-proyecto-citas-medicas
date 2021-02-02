import React from 'react'
import CardVeterinario from '../components/cardVeterinario/CardVeterinario'
import '../styles.css'

const VeterinariosScreen = () => {
    return (
        <div className="content__wrapper bg-gray">
            <div className="row p-5">
                <h1>Lista</h1>
            </div>
            <div className="row p-5">
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <CardVeterinario/>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <CardVeterinario/>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <CardVeterinario/>
                </div>
            </div>
        </div>
    )
}

export default VeterinariosScreen
