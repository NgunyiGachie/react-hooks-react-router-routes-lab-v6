import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div>
          Genres:{" "}
          {movie.genres &&
            movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
