import React, { useState } from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const SearchComponent = ({ movies, setMovies }) => {
  {
    /*This stores the data the user types */
  }
  const [query, setQuery] = useState(" ");
  {
    /*This stores the items from movies that match what the user types */
  }
  const [filteredMovie, setFilteredData] = useState([]);

  {
    /* This handles the imput change whenever the user types in the search box*/
  }
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    filteringMovies(value);
  };

  {
    /*This handles the filtering */
  }
  const filteringMovies = (value) => {
    const lowerCasedValue = value.toLowerCase().trim();
    if (!lowerCasedValue) {
      setFilteredData([]);
      return;
    }
    {
      /*We lower case the data value to match the lower-casing of the input */
    }
    const showFilteredMovie = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(lowerCasedValue);
    });
    setFilteredData(showFilteredMovie);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <div className="movie-list">
        {
          filteredMovie.length > 0
            ? filteredMovie.map((oneMovie) => (
                <div className="search-title" key={oneMovie.id}>
                  <Link to={`/MovieDetails/${oneMovie.id}`}>
                    <ul><li>{oneMovie.title}</li></ul>
                  </Link>
                </div>
              ))
            : query && <p>Type to search</p> // Show a message if no results match
        }
      </div>
    </div>
  );
};

export default SearchComponent;