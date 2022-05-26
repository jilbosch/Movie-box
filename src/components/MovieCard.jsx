import { Link } from "react-router-dom";

export const MovieCard = (props) => {
  const movie = props.movie;
    let to = props.to

    return (
      <div className="movieBox" id="Movie">
        <div className="imgCont">
          <img className="movieImg" src={movie.imgUrl} alt="Joker" />
          <p className="movieAge">{movie.age}</p>
        </div>
        <div className="TextContainer">
          <h2 className="movieTitle">{movie.title}</h2>
          <button onClick={() => props.editMovie(movie.id)} className="btn-edit">✏️</button>
          <button onClick={() => props.deleteMovie(movie.id)}
            className="btn-danger">🗑️</button>
          <Link to="/Movie"><button className="star">⭐</button></Link>
        </div>
      </div>
    );
  }

