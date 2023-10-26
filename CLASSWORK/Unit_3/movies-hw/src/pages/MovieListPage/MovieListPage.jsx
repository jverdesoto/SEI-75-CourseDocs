import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'

export default function MovieListPage({movies}) {
  return (
    <div>MovieListPage

        <MovieCard movies={movies} />
    </div>
  )
}
