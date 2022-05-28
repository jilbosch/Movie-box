import { useState } from "react";
export function Form (props){

const [newMovie,setNewMovie] = useState (props.editedMovie)
const [editMode,setEditMode] = useState (props.editMode)
  const inputChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setNewMovie( {...newMovie,[name]:value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // const newMovie = {
    //   title: e.target.title.value,
    //   age: e.target.age.value,
    //   imgUrl: e.target.imgUrl.value,
    // };
    !editMode?
    props.addMovie(newMovie):
    props.updateMovie(newMovie)
    resetInputsForm(e)};

    const resetInputsForm = (e) => {
      e.target.title.value = ""
      e.target.age.value = ""
      e.target.imgUrl.value = ""
    };
  

    return (
      <form onSubmit={handleSubmit}>
        <input name="title" onChange={inputChange} type="text" id="title" value={newMovie.title} placeholder="Title" />
        <input name="age" onChange={inputChange} type="num" id="age" value={ newMovie.age} placeholder="age" />
        <input name="imgUrl" onChange={inputChange} type="url" id="imgUrl" value={newMovie.imgUrl} placeholder="Image" />
        {editMode?
        <button type="submit">Edit</button>:
        <button type="submit">Add</button>}
      </form>
    )
}
