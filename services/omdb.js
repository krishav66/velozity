// services/omdb.js
import axios from 'axios';

const OMDB_API_KEY = '2f849ca';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
    return response.data.Search || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
