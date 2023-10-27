import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ActorList from './pages/ActorListPage';
import MovieList from './pages/MovieListPage';
import MovieDetail from './pages/MovieDetailPage';
import LoginPage from './pages/LoginPage';
import { movies } from './data';

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
            {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MovieList movies={movies} />}  />
            <Route path="/movies/:movieName" element={<MovieDetail movies={movies}/>} />
            <Route path="/actors" element={<ActorList movies={movies} />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
