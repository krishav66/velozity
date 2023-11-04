// components/SearchBar.js
import { useState } from 'react';
import { debounce } from 'lodash';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = debounce(() => {
    onSearch(query);
  }, 300);

  return (
    <input
      type="text"
      placeholder="Search for movies..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        handleSearch();
      }}
    />
  );
};

export default SearchBar;
