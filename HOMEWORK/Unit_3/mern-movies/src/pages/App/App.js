import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { movies } from "../../data";
import LoginPage from "../LoginPage/LoginPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import ActorDetailPage from "../ActorDetailPage/ActorDetailPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route
              path="/actors/:actorName"
              element={<ActorDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
