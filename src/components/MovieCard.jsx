import { Component } from "react";
import { Movieform } from "../components/MovieForm";

export class MovieCard extends Component {
  constructor(props) {
    super(props);
  }
render() {
    let movie = this.props.movie;
    return (
      <div className="movieBox" id="Movie">
        <div className="imgCont">
          <img className="movieImg" src={movie.imgUrl} alt="Joker" />
          <p className="movieAge">{movie.age}</p>
        </div>
        <div className="movieText">
          <h4 className="movieTitle">{movie.title}</h4>
          <button onClick={() => this.props.editMovie(movie.id)} className="btn-edit">✏️</button>
          <button onClick={() => this.props.deleteMovie(movie.id)}
            className="btn-danger">🗑️</button>
          <button className="star">⭐</button>
        </div>
      </div>
    );
  }
}
