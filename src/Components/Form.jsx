import React, { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";
import { listaReviews, agregarReview } from "../utils/reviews";

const Form = () => {
  const [review, setReview] = useState({
    nombre: "",
    pelicula: {
      titulo: "",
      puntaje: "",
    },
  });
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^(10|[1-9])$/;
    if (
      review.nombre.trim().length > 2 &&
      review.pelicula.titulo.length > 5 &&
      regex.test(review.pelicula.puntaje)
    ) {
      agregarReview(review);
      setShowError(false);
      setReview({ nombre: "", pelicula: { titulo: "", puntaje: "" } });
    } else {
      setShowError(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label>Nombre de usuario</label>
        <input
          type="text"
          value={review.nombre}
          onChange={(event) =>
            setReview({ ...review, nombre: event.target.value })
          }
        />
        <label>Pelicula</label>
        <input
          type="text"
          value={review.pelicula.titulo}
          onChange={(event) =>
            setReview({
              ...review,
              pelicula: { ...review.pelicula, titulo: event.target.value },
            })
          }
        />
        <label>Puntaje (del 1 al 10 sin decimales)</label>
        <input
          type="text"
          value={review.pelicula.puntaje}
          onChange={(event) =>
            setReview({
              ...review,
              pelicula: { ...review.pelicula, puntaje: event.target.value },
            })
          }
        />
        <button>Realizar reseña</button>
      </form>
      {showError && <ErrorMessage />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "gray",
        }}
      >
        {listaReviews.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Form;
