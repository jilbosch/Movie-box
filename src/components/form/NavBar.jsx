import React from 'react'
import "../form/navBar.css"

export default function NavBar() {

// function myFunction() {
//   var Y = document.getElementById("myNavbar");
//   if (Y.className === "navbar-logo") {
//     Y.className += " responsive";
//   } else {
//     Y.className = "navbar-logo";
//   }
// }


  return (
    
    <div className="navbar-container" id="myNavbar">
    <div className='logo-container'>
    <a className="navbar-logo" href="#">
        <img id="logo"src="https://i.ibb.co/sWnpGR4/logo-peli.png"/></a>
    </div>
    <ul className="nav st-menu">
    <div className='navbar-btns'>
    <a href="#home"className="active">Home</a>
    <a href="#news">News</a>
    <a href="#About">About</a>
    <a href='javascipt:void(0);'className="icon"/*onclick={myFunction()}*/>

        <i class= "fa fa-bars"></i>
        </a>
    </div>
    </ul>
    </div>
  )
}
