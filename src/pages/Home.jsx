import React from "react";

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
      <div className="movie-grid"></div>
    </div>
  );
};

export default Home;
