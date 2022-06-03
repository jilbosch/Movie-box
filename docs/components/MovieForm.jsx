import { Component } from "react";
export class MovieForm extends Component {
  onSubmitHandler = (e) => {
    e.preventDefault();
    const newMovie = {
      title: e.target.title.value,
      imgUrl: e.target.image.value,
    };
    this.props.addNewMovie(newMovie);
    this.resetImputsForm(e);
  };
  resertInputsForm = (e) => {
    e.target.title.value = "";
    e.target.title.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="">
          <input type="text" name="name" placeholder="Name" />
          <button type="submit" className="addButton">
            Add
          </button>
        </div>
      </form>
    );
  }
}
