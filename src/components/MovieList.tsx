import { useEffect, useState } from "react";
import "../styles/MovieList.css";
import MovieCard from "./MovieCard";

const API_KEY = "607458d7";

function MovieList() {
  const [films, setFilms] = useState([]);
  async function getMoviesList() {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=batman`
      );
      const films = await response.json();
      setFilms(films.Search);
      console.log(films);
    } catch (err) {
      console.log("Ошибка получения данных", err);
    }
  }

  useEffect(() => {
    getMoviesList();
  }, []);

  return (
    <div className="movie-list">
      {films.map((film, index) => (
        <MovieCard key={index} {...film} />
      ))}
    </div>
  );
}

export default MovieList;
