import React from 'react'
import { Link, useParams} from 'react-router-dom'
import { Button } from '@mui/material';
import { movieServices } from '../services/movieServices';
import { useState,useEffect } from 'react';
import NavBar from '../components/form/NavBar';


export default function PeliSola (){

//   let to = props.to;
const [movie, setMovie]= useState ({});
const {id} = useParams ();

useEffect(()=>{
  movieId(id);
},[id])

const movieId = (id) => {
  movieServices.getMovieById(id).then (res=>{
    setMovie(res)
  }
  )}
    return(
    <div>
    
      <NavBar></NavBar>
      <Link to="/"><Button>atras</Button></Link>
        <section className='pageContainer'>
          <div className='movieInfo'>
            <div className='textContainer'>
              <h1>{movie.title}</h1>
              <h2>{movie.age}</h2>
              <img src={movie.imgUrl}/>
              <h1>{movie.sinopsis}</h1>
            </div> 
          </div>
        </section>
    </div>
  )
}
