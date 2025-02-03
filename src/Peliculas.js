import React, { useState, useEffect } from "react";
function Peliculas() {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        fetch('/peliculas.json') // Verifica que la ruta sea correcta
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo JSON');
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos cargados:', data); // Verifica los datos en la consola
                setPeliculas(data);
            })
            .catch(error => {
                console.error('Error al cargar las películas:', error);
            });
    }, []);


    const categorias = ['Thriller', 'Drama', 'Aventura', 'Ciencia Ficción'];


    return (
        <div>
            {categorias.map(categoria => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    {peliculas
                        .filter(pelicula => pelicula.categoria === categoria)
                        .map(pelicula => (
                            <div key={pelicula.id}>
                                <h3>{pelicula.titulo}</h3>
                                <p>{pelicula.anio}</p>
                                <p>Director: {pelicula.director}</p>
                                <p>Actores: {pelicula.actoresPrincipales.join(', ')}</p>
                                <p>{pelicula.sinopsis}</p>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}

export default Peliculas;
