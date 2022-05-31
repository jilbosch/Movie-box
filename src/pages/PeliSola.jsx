import React, { Component, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import { Button } from '@mui/material';
import { movieServices } from '../services/movieServices';
import { useState } from 'react';
export default function PeliSola() {
// const movie = props.peli;
//   let to = props.to;
const [movie, setMovie]= useState ({});
const {id} = useParams ();

useEffect(()=>{
  movieId(id);
},[])

const movieId = (id) => {
  movieServices.getMovieById(id).then (res=>{
    setMovie(res)
  }
  )}
    return(
    <div>
    <Link to="/"><Button>atras</Button></Link>
    
    <div className='movieInfo'>
      <div className='textContainer'>
        <h1>{movie.title}</h1>
        <h2>{movie.age}</h2>
        <img src={movie.imgUrl}/>
       </div> 
    </div>
    </div>
  )}
