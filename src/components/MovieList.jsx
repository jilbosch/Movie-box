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
      movies:[],
      editedMovie:{title:"",age:"",imgUrl:"",id:""},
      };
  }
  componentDidMount() {
   movieServices.getAllMovies().then((res)=>{
    this.setState({movies:res});  
   });
  }
  deleteMovie = (id) => {
    console.log(typeof id);
    let deleteConfirmed = window.confirm("segur que vols esborrar?");
    if (!deleteConfirmed) return;
    let filterMovies = this.state.movies.filter((movie) => movie.id !== id);
    movieServices.deleteMovie(id).then (res => {
      if (res.id== id)
      this.setState({movies:filterMovies});
    })
  };
 updateMovie = (newMovie) =>{
   let newMoviesState = this.state.movies;
   let movieToEditIndex=newMoviesState. findIndex(movie => movie.id === newMovie.id);
   newMoviesState [movieToEditIndex] = newMovie;
   this.setState({movies:newMoviesState});
   this.openForm()
 }

  addMovie = (data) => {
    movieServices.createMovie(data).then (res =>{
      this.setState({movies:[...this.state.movies,res]});
      this.openForm();

    })
  };

  openForm = (id) => {
    this.setState(prevState=>({viewform:!prevState.viewform}));
  };

  editMovie = (id) => {
    this.openForm();
    let editedMovie = this.state.movies.find((movie) => movie.id === id);
    this.setState({editedMovie})
    this.setState({isEditMode:true})
  };

  render() {
    return (
      <section>
        <button onClick={this.openForm}>➕</button>
        {this.state.viewform ? <Form addMovie={this.addMovie}editedMovie={this.state.editedMovie}updateMovie={this.updateMovie}isEditMode={this.state.isEditMode} /> : ""}
        <div className="movieContainer">
          {this.state.movies.map((movie, key) => (
            <MovieCard key={key}movie={movie}editMovie={this.editMovie}deleteMovie={this.deleteMovie}/>
          ))}
        </div>
      </section>
    );
  }
}
