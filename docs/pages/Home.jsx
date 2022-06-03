import React, { Component } from 'react'
import NavBar from "../components/form/NavBar"
import { MovieList } from '../components/MovieList'

export class Home extends Component {
  render() {
    return (
      <div>
        <NavBar>hola</NavBar>
        <MovieList/>
      </div>
    )
  }
}
