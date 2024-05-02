import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  const movieCards = movies.map((movie) => (
    <div key={movie.id}>
      <MovieCard movie={movie} />
      <a href={`http://localhost/movie/${movie.id}`}>View Info</a>
    </div>
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div className="movie-list">{movieCards}</div>
      </main>
    </>
  );
}

export default Home;
