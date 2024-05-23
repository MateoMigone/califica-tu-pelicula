import React from "react";

const Card = ({ item }) => {
  return (
    <div style={{ backgroundColor: "#A9A9A9" }}>
      <h3>{item.nombre}</h3>
      <h4>
        Calificó {item.pelicula.titulo} con un {item.pelicula.puntaje}
      </h4>
    </div>
  );
};

export default Card;
