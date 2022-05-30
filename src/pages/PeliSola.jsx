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
        <img></img>
        <p>Estados Unidos Estados Unidos</p>
        <h2>Dirección</h2>
        <p>Todd Phillips</p>
        <h2>Guion</h2>
    <p>Todd Phillips, Scott Silver</p>
        <h2>Música</h2>
    <p>Hildur Guðnadóttir</p>
        <h2>Reparto</h2>
    <p>Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Bill Camp, Shea Whigham, Dante Pereira-Olson, Douglas Hodge, Jolie Chan, Bryan Callen, Brian Tyree Henry, Mary Kate Malat</p>
        <h2>Productora</h2>
    <p>DC Comics, DC Entertainment, Warner Bros., Village Roadshow, Bron Studios, Creative Wealth Media Finance,Indiana Pictures. Distribuidora: Warner Bros.</p>
            <h2>Género</h2>
    <p>Thriller. Drama</p>
    <h2>sinopsis</h2>
    <p>Arthur Fleck (Phoenix) vive en Gotham con su madre, y su única motivación en la vida es hacer reír a la gente. Actúa haciendo de payaso en pequeños trabajos, pero tiene problemas mentales que hacen que la gente le vea como un bicho raro. Su gran sueño es actuar como cómico delante del público, pero una serie de trágicos acontecimientos le hará ir incrementando su ira contra una sociedad que le ignora.</p>
      </div>

      
      src="prova"
      </div>
    </div>
  
  )}
