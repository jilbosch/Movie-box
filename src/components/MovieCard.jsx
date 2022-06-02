import { Link } from "react-router-dom";

export const MovieCard = (props) => {
  const movie = props.movie;
    let to = props.to

    return (
      <div className="movieBox" id="Movie">
        <div className="imgCont">
        <Link to={`/movie/${movie.id}`}><img className="movieImg" src={movie.imgUrl} alt="Joker" /></Link>
          <p className="movieAge">{movie.age}</p>
        </div>
        <div className="TextContainer">
          <h2 className="movieTitle">{movie.title}</h2>
          <div className="movieBtn">
              <button onClick={() => props.editMovie(movie.id)} className="btn-edit">✏️</button>
              <button onClick={() => props.deleteMovie(movie.id)}
                className="btn-danger">🗑️</button>
              <button className="star">⭐</button>
          </div>
        </div>
      </div>
    );
  }

