import { Component } from "react";
import { MovieCard } from "./MovieCard";
import "../components/movieList.css";
import { Form } from "../components/form/Form";
import { MovieForm } from "./MovieForm";
import { movieServices } from "../services/movieServices";
export class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state={
      viewform: false,
      movieToEdit:{},
      movies:[]
      };
  }
  componentDidMount(){this.setState({
    movies: movieServices.getAllMovies(),})
  }
  deleteMovie = (id) => {
    console.log(typeof id);
    let deleteConfirmed = window.confirm("segur que vols esborrar?");
    if (!deleteConfirmed) return;
    let filterMovies = this.state.movies.filter((movie) => movie.id !== id);
    this.setState({ movies: filterMovies });
  };

  addMovie = (data) => {
    let lastIndex = this.state.movies[this.state.movies.length - 1].id;
    let newIndex = lastIndex + 1;
    let newMovie = { id: newIndex, ...data };

    this.setState({ movies: [...this.state.movies, newMovie] });
  };

  openForm = (id) => {
    this.setState(prevState=>({viewform:!prevState.viewform}));
  };

  editMovie = (id) => {
    this.openForm();
    let editedMovie = this.state.movies.find((movie) => movie.id === id);
    console.log(editedMovie)
    this.setState({editedMovie})
  };

  render() {
    return (
      <section>
        <button onClick={this.openForm}>➕</button>
        {this.state.viewform ? <Form addMovie={this.addMovie} /> : ""}
        <div className="movieContainer">
          {this.state.movies.map((movie, key) => (
            <MovieCard key={key}movie={movie}editMovie={this.editMovie}deleteMovie={this.deleteMovie}/>
          ))}
        </div>
      </section>
    );
  }
}
