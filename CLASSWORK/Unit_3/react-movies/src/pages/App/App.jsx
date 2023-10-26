import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage'
import ActorsListPage from '../ActorListPage/ActorListPage'
import LoginPage from '../LoginPage/LoginPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {
        user ?
          <>
            <NavBar user={ user } />
            <Routes>
              <Route path="/" element={ <MoviesListPage /> } />
              <Route path="/movies/:movieName" element={ <MovieDetailPage /> } />
              <Route path="/actors" element={ <ActorsListPage /> } />
              <Route path="/actors/:actorName" element={ <ActorDetailPage /> } />
              <Route path="/*" element={ <MoviesListPage /> } />
            </Routes>
          </>
          :
          <LoginPage setUser={setUser} />
      }
    </div>
  );
}
