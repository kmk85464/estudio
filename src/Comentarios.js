import React, { useState, useEffect } from 'react';

function PeliculaConComentarios({ pelicula }) {
    const [comentariosVisible, setComentariosVisible] = useState(false);
    const toogleComentarios = () => {

        setComentariosVisible(!comentariosVisible);
    };
    return (
        <div>
            <button onClick={(toogleComentarios)}>
                {comentariosVisible ? 'Ocultar Comentarios' : 'Mostrar Comentarios'}
            </button>
            {comentariosVisible && (
                <div>
                </div>
            )
            }
        </div>


    )


}
export default PeliculaConComentarios;