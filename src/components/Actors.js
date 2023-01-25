import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsDetails=actors.map(actor => {
    return(
      <div key = {actor.name}>
        <h1>name = {actor.name}</h1>
        <p>Movies:</p>
        <ul>
          {actors.movie.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
        
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
        {}
    </div>
  );
}

export default Actors;
