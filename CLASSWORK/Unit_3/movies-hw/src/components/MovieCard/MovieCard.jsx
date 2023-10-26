import React from 'react'
import { Link } from 'react-router-dom';

export default function MovieCard({movies}) {
    console.log(movies);
    return (
        <div className="movie-card" >
     {movies.map((movie) => (
        
        <div key={movie.title} style={{
        background: `url(${movie.posterPath})`}}>
       <Link movie={movie} to={`/moviedetailpage/${movie.title}`}> <h2>{movie.title}</h2></Link>
        <p>{movie.releaseDate}</p>
        </div>
         
     ))
    }

      </div>
    )
    }
    
    
   