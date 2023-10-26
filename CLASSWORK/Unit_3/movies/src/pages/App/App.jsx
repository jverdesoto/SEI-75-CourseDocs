import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../component/NavBar/NavBar';
import MovieListPage from "../MovieListPage/MovieListPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage'
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user}/>
          <Routes>
            <Route path='/' element={ <MovieListPage movies={movies}/> }/>
            <Route path='/actors' element={ <ActorListPage /> }/>
            <Route path='/moviedetailpage/:moviename' element={ <MovieDetailPage /> }/>
            <Route path='/actordetailpage/:actorname' element={ <ActorDetailPage /> }/>
          </Routes>
        </>
        :
        <LoginPage user={user} setUser={setUser} />
      }
    </main>
  );
}
