// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../services/omdb';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setSearchResults(results);
  };

  return (
    <div>
      <Head>
        <title>Movie Search</title>
      </Head>

      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />

      <div>
        {searchResults.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
