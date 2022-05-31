import React from 'react'

export default function NavBar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand"href="#">TvMovies</a>
    <button className="navbar-toggler"type="button"data-bs-toggle="collapse"
    data-bs-target="#navbarNav"aria-controls="navbarNav"aria-exp/>
     <span className="navbar-toggler-icon">×</span>
    
    <div className="collapse navbar-collapse" id="navbarNav">
    <li className="navbar-nav"/>
    <li className="nav-item">
    <div>
    <CreateForm/>
    </div>
    </li>
    </div>
    </div>
    </div>
  )
}
