import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
    <NavLink to={'/'} exact style={{marginRight:'15px'}}>Home</NavLink>
    <NavLink to={'/movies'} exact style={{marginRight:'15px'}}>Movies</NavLink>
    <NavLink to={'/directors'} style={{marginRight:'15px'}}>Directors</NavLink>
    <NavLink to={'/actors'} style={{marginRight:'15px'}}>Actors</NavLink>
  </div>
  )
}

export default NavBar;
