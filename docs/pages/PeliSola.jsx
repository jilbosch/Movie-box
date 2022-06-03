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
    
      <NavBar/>
      <Link to="/"><Button>atras</Button></Link>
        <section className='pageContainer'>
          <div className='movieInfo'>
              <div className='imageContainer'>
                  <img className='img'src={movie.imgUrl}alt={movie.title}/>
              </div> 
                <div className='textContainer'>
                  <h1>{movie.title}</h1>
                  <h2>{movie.age}</h2>
                  <h1>{movie.sinopsis}</h1>
                </div> 
          </div>
        </section>
    </div>
  )
}
