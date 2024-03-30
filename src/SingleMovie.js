import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const SingleMovie = () => {

  const { id } = useParams();
  console.log(id);

  const { isLoading , movie} = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Just Wait....✋</div>;

      </section>
    );
  }

  return (

    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text"><b>Released: </b>{movie.Released}</p>
          <p className="card-text"><b>Genre: </b>{movie.Genre}</p>
          <p className="card-text"><b>Language: </b>{movie.Language}</p>
          {/* <p className="card-text"><b>Type:</b>{movie.Type}</p> */}
          <p className="card-text"><b>Imdb-Rating: </b>{movie.imdbRating} / 10</p>
          <p className="card-text"><b>Country: </b>{movie.Country}</p>
          <p className="card-text"><b>Actors: </b>{movie.Actors}</p>
          <NavLink to="/Home" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>

  );
};

export default SingleMovie;