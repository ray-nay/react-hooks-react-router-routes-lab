import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesDetails = movies.map(movie=>{
    return (
      <div key={movie.title}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genre: </p>
        <ul>
          {movie.genres.map(genre=>{
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })
  return (
  <div>
      <h1>Movies Page</h1>
        {moviesDetails}
  </div>
  );
}

export default Movies;
