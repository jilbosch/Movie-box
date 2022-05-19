import { render } from "@testing-library/react";
import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state= {
    newMovie: this.props.editedMovie,
    isEditMode: this.props.isEditMode,
    }
  }
  inputchange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({newMovie: {...this.state.newMovie,[name]:value}});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title: e.target.title.value,
      age: e.target.age.value,
      imgUrl: e.target.imgUrl.value,
    };
    this.props.addMovie(newMovie);
    this.resetInputsForm(e)};

    resetInputsForm = (e) => {
      e.target.title.value = ""
      e.target.age.value = ""
      e.target.imgUrl.value = ""
    };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" id="title" value={this.state.newMovie.title} placeholder="Title" />
        <input name="age" type="num" id="age" value={ this.state.newMovie.age} placeholder="age" />
        <input name="imgUrl" type="url" id="imgUrl" value={this.state.newMovie.imgUrl} placeholder="Image" />
        <button type="submit">Add</button>
      </form>
    );
  }
}
