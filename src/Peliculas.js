import React, { useState, useEffect } from 'react';

function Peliculas() {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        fetch('public/peliculas.json')
            .then(response => response.json()
                .then(data => setPeliculas(data)));
    }, []);

    const categorias = ['Thriller', 'Drama', 'Aventura', 'Ciencia Ficcion'];

    return (
        <div>
            {categorias.map(categoria => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    {peliculas
                        .filter(pelicula => pelicula.categoria === categoria)
                        .map(pelicula => (
                            <div key={pelicula.id}>
                                <img src={pelicula.imagen} alt={pelicula.titulo} />
                                <h3>{pelicula.titulo}</h3>
                                <p>{pelicula.anio}</p>
                                <p>Director: {pelicula.director}</p>
                                <p>Actores:{pelicula.actorores.join(', ')}</p>
                                <p>{pelicula.sinopsis}</p>
                            </div>

                        ))

                    }
                </div>
            ))

            }


        </div>
    );
}
export default Peliculas;