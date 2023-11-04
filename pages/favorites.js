// pages/favorites.js
import { useState, useEffect } from 'react';
import firebase from '../firebase';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesRef = firebase.database().ref('favorites');
    favoritesRef.on('value', (snapshot) => {
      const favs = snapshot.val();
      setFavorites(favs ? Object.values(favs) : []);
    });

    return () => {
      favoritesRef.off('value');
    };
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
