import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../Components/LoginPage/LoginPage';
import MoviesListPage from '../Components/MoviesListPage/MoviesListPage';
import MovieDetailPage from '../Components/MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../Components/ActorsListPage/ActorsListPage';
import ActorDetail from '../Components/ActorDetail/ActorDetail';
import NavBar from '../Components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(null)

  // Write a function to handle login
  const handleLogin = (username) => { // takes the user name then updates the state
    setUser(username)
  }
  return (
    <Router>
      <div>
        {user && <NavBar user={user} />}
        <Routes>
          <Route path="/" element={user ? <MoviesListPage /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          <Route path="/actors" element={<ActorsListPage />} />
          <Route path="/actors/:actorName" element={<ActorDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

