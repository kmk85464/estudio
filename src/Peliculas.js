import React, { useState, useEffect } from 'react';

function Peliculas() {
    const [peliculas, setPeliculas] = useState([]);
    const [comentariosVisible, setComentariosVisible] = useState(false);

    useEffect(() => {
        fetch('/peliculas.json')
            .then(response => response.json())
            .then(data => setPeliculas(data));
    }, []);

    const categorias = ['Thriller', 'Drama', 'Aventura', 'Ciencia Ficción'];
    const toggleComentarios = () => {
        setComentariosVisible(!comentariosVisible);
    };

    return (
        <div>
            {categorias.map(categoria => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    {peliculas
                        .filter(pelicula => pelicula.categoria === categoria)
                        .map(pelicula => (
                            <div key={pelicula.id}>
                                <img src={pelicula.imagen || pelicula.foto} alt={pelicula.titulo} />
                                <h3>{pelicula.titulo}</h3>
                                <p>{pelicula.año}</p>
                                <p>Director: {pelicula.director}</p>
                                <p>Actores: {pelicula.actoresPrincipales.join(', ')}</p>
                                <p>{pelicula.sinopsis}</p>
                                <div>
                                    <button onClick={toggleComentarios}>
                                        {comentariosVisible ? 'Ocultar Comentarios' : 'Mostrar Comentarios'}
                                    </button>
                                    {comentariosVisible && pelicula.valoraciones && pelicula.valoraciones.length > 0 ? (
                                        <ul>
                                            {pelicula.valoraciones.map((valoracion, index) => (
                                                <li key={index}>
                                                    <strong>{valoracion.nombre}</strong>: {valoracion.texto} -  {valoracion.puntuacion}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        comentariosVisible && <p>No hay comentarios.</p>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}
export default Peliculas;