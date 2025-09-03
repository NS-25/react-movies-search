import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "John wick", release_date: "2020" },
    { id: 2, title: "Spider Man", release_date: "2019" },
    { id: 3, title: "Super Man", release_date: "2018" },
    { id: 4, title: "Terminator", release_date: "2015" },
    { id: 5, title: "The Matrix", release_date: "2012" },
  ];
  return (
    <div className="home">
      <form onSubmit={} className="search-form">
    <input type="text"  placeholder=""/>
      </form>
      <div className="movie-grid"></div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
