import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MovieList } from '../components/MovieList'
export default function prova() {
  return (
      <><BrowserRouter>
          <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/" element={<MovieInfo/>}/>
          </Routes>
      </BrowserRouter><div>prova</div></>
  )
}
