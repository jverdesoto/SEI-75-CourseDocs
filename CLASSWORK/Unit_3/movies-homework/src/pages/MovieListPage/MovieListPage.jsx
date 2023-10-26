import React from 'react'
import MovieCard from '../../component/MovieCard/MovieCard'

export default function MovieListPage({ movies }) {
  return (
    <div>
      <MovieCard movies={movies}/>
    </div>
  )
}
