import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MoviesListPage from './components/MoviesListPage';
import MovieDetailPage from './components/MovieDetailPage';
import ActorsListPage from './components/ActorsListPage';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user && <NavBar user={user} />}
      <Routes>
        <Route path="/" element={user ? <MoviesListPage /> : <LoginPage setUser={setUser} />} />
        <Route path="/movies/:movieName" element={<MovieDetailPage />} />
        <Route path="/actors" element={<ActorsListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
