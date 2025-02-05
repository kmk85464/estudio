import React, { useEffect, useState } from "react";
function Catalago() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/items.json')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);
    const elementos = ['id', 'nombre', 'descripcion', 'precio'];

    return (
        <div>
            {elementos.map(elemento => (
                <div key={elemento}>
                    <h2>{elemento}</h2>
                    {items
                        .map(items => (
                            <div key={items.id}>
                                <h3>{items.id}</h3>
                                <h3>{items.nombre}</h3>
                                <h3>{items.descripcion}</h3>
                            </div>


                        ))

                    }
                </div>
            )
            )}


        </div>

    );
}
export default Catalago;