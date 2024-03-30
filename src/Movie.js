import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./App.css";
import ModeSwitch from "./Xyz/ModeSwitch";
import { useState } from "react";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };


  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Ruko Jara Sabar Karo...😁</div>;
  }


  return (
    <>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
       <ModeSwitch toggleMode={toggleMode} darkMode={darkMode} />
   
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink className="XYZX" to={`/movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img className="ABC"src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
      </div>
    </>
  )
};

export default Movie;