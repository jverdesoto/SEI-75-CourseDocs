import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MoviesListPage from './pages/MoviesListPage';
import MovieDetailPage from './pages/MovieDetailPage';
import ActorsListPage from './pages/ActorsListPage';
import NavBar from './components/NavBar';
import { movies } from '../src/data'

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorsListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
