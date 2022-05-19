import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state= {
    newMovie: this.props.editedMovie,
    isEditMode: this.props.isEditMode,
    }
  }

  inputChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({newMovie: {...this.state.newMovie,[name]:value}});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // const newMovie = {
    //   title: e.target.title.value,
    //   age: e.target.age.value,
    //   imgUrl: e.target.imgUrl.value,
    // };
    this.state.isEditMode?
    this.props.addMovie(this.state.newMovie):
    this.props.editedMovie(this.state.isEditMode)
    this.resetInputsForm(e)};

    resetInputsForm = (e) => {
      e.target.title.value = ""
      e.target.age.value = ""
      e.target.imgUrl.value = ""
    };
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" onChange={this.inputChange} type="text" id="title" value={this.state.newMovie.title} placeholder="Title" />
        <input name="age" onChange={this.inputChange} type="num" id="age" value={ this.state.newMovie.age} placeholder="age" />
        <input name="imgUrl" onChange={this.inputChange} type="url" id="imgUrl" value={this.state.newMovie.imgUrl} placeholder="Image" />
        {this.state.isEditMode?
        <button type="submit">Edit</button>:
        <button type="submit">Add</button>}
      </form>
    );
  }
}
