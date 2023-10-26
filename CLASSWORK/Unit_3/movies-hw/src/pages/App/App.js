import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import MovieListPage from "../MovieListPage/MovieListPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from '../../components/MovieDetailPage/MovieDetailPage';
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar />
          <Routes>
            <Route path='/' element={ <MovieListPage movies={movies} /> }/>
            <Route path='/actors' element={ <ActorListPage movies={movies} /> }/>
            <Route path='/moviedetailpage/:moviename' element={ <MovieDetailPage /> }/>
          </Routes>
          <h1>Hi {user}</h1>
        </>
        :
        <LoginPage user={user} setUser={setUser} />
      }
    </main>
  );
}

