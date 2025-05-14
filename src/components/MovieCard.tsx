import "../styles/MovieCard.css";

export interface MoviesProps {
  title: string;
  year: string;
  poster: string;
}

function MovieCard: React.FC<MoviesProps>({ title, poster, year }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
}

export default MovieCard;
