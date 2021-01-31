import React from 'react'
import VeterinariosContenedor from '../components/veterinariosContenedor/VeterinariosContenedor'
import '../styles.css'

const VeterinariosScreen = () => {
    return (
        <div className="content__wrapper">
            <div className="row">
                <div className="col-8">
                    <VeterinariosContenedor/>
                </div>
            </div>
        </div>
    )
}

export default VeterinariosScreen
