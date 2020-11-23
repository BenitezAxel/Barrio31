import React from 'react'

function Boton(props) {

    return (
        <div>
            <button onClick={props.cambiarEstilos}>Cambiar Estilo</button>
        </div>
    )
}

export default Boton
