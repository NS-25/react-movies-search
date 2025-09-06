import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "John wick", release_date: "2020" },
    { id: 2, title: "Spider Man", release_date: "2019" },
    { id: 3, title: "Super Man", release_date: "2018" },
    { id: 4, title: "Terminator", release_date: "2015" },
    { id: 5, title: "The Matrix", release_date: "2012" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid"></div>
      {movies.map(
        (movie) =>
          movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
            <MovieCard key={movie.id} movie={movie} />
          )
      )}
    </div>
  );
};

export default Home;
