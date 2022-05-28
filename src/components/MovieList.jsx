import {useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import "../components/movieList.css";
import { Form } from "../components/form/Form";
import { movieServices } from "../services/movieServices";
import Loading from "./Loading.jsx";

export const MovieList =()=>{
  const[movies,setMovies] = useState ([])
  const[viewform,setViewform] = useState (false)
  const[editedMovie,setEditedMovie] = useState ({title:"",age:"",imgUrl:"",id:""})
  const[editMode,setEditMode] = useState (false)
  const[isloading, setIsLoading] = useState (false)

  useEffect(()=> {
  getAllMovies();  
   },[]);

   const getAllMovies = () => {
     setIsLoading(true)
    
    movieServices.getAllMovies().then((res) => {
      setMovies(res);
      setIsLoading(false)
    });
  };
  const deleteMovie = (id) => {
    console.log(typeof id);
    let deleteConfirmed = window.confirm("segur que vols esborrar?");
    if (!deleteConfirmed) return;
    let filterMovies =movies.filter((movie) => movie.id !== id);
    movieServices.deleteMovie(id).then (res => {
      if (res.id== id)
      setMovies(filterMovies);
    })
  };
  const updateMovie = (newMovie) => {
    movieServices.updateMovie(newMovie.id, newMovie).then((res) => {
      let movieToEdit = movies.map((movie) =>
        movie.id === newMovie.id ? newMovie : movie
      );
      setMovies(movieToEdit);
    });

    openForm();
  };

  const addMovie = (data) => {
    movieServices.createMovie(data).then (res =>{
      setMovies([...movies,res]);
      openForm();

    })
  };
  const openForm = () => {
    if (viewform) setViewform(false);
    else setViewform(true);
    setEditMode(false);
  };
 
  const editMovie = (id) => {
    openForm();
    let editedMovie =movies.find((movie) => movie.id === id);
    setEditedMovie(editedMovie)
    setEditMode(true)
  };

   {
    return (
      <section>
        <button onClick={openForm}>➕</button>
        {viewform ? <Form addMovie={addMovie}editedMovie={editedMovie}updateMovie={updateMovie}editMode={editMode} /> : ""}
        {isloading ? (<Loading/>):(
        <div className="movieContainer">

          {movies.map((movie, key) => (
            <MovieCard key={key}movie={movie}editMovie={editMovie}deleteMovie={deleteMovie}/>
          ))}
        </div>)}
      </section>
    );
  }
}
