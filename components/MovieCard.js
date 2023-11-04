// components/MovieCard.js
import { useState } from 'react';
import firebase from '../firebase';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    const favoritesRef = firebase.database().ref('favorites');
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      // Remove from favorites
      favoritesRef.child(movie.imdbID).remove();
    } else {
      // Add to favorites
      favoritesRef.child(movie.imdbID).set(movie);
    }
  };

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;
