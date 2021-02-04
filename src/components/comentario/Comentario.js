import React from 'react'

const Comentario = ({comentario }) => {
    return (
        <div className="card shadow">
            <div className="card-header">
                <h4>{comentario.name}</h4>
            </div>
            <div className="card-body">
                <p>{comentario.texto}</p>
            </div>
        </div>
    )
}

export default Comentario
