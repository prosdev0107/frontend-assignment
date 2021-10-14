import { useState } from "react";
import { MovieListContainer } from "./movielist.style";
import MovieCard from "../MovieCard";
import MovieModal from "../MovieModal";

export default function MovieList({ movies }) {
  const [showDialog, setShowDialog] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleMovieClick = (movie) => {
    setShowDialog(true);
    setSelected(movie);
  };

  return (
    <MovieListContainer>
      {showDialog && (
        <MovieModal movie={selected} onClose={() => setShowDialog(false)} />
      )}
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} onClick={handleMovieClick} />
      ))}
    </MovieListContainer>
  );
}
