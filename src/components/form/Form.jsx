import { render } from "@testing-library/react";
import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state= {
    newMovie: this.props.editedMovie,
    }
  }
  inputchange = () => {}

  handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title: e.target.title.value,
      genre: e.target.genre.value,
      year: e.target.year.value,
      imgUrl: e.target.imgUrl.value,
    };
    this.props.addMovie(newMovie);
    this.resetInputsForm(e)};

    resetInputsForm = (e) => {
      e.target.title.value = ""
      e.target.genre.value = ""
      e.target.year.value = ""
      e.target.imgUrl.value =""
    };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="title" value={this.state.editedMovie} placeholder="Title" />
        <input type="text" id="genre" placeholder="Genre" />
        <input type="text" id="year" placeholder="Year" />
        <input type="text" id="url" placeholder="Image" />
        <button type="submit">Add</button>
      </form>
    );
  }
}
