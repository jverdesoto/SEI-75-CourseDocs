import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MoviesListPage from "./components/MoviesListPage";
import MovieDetailPage from "./components/MoviesListPage";
import ActorListPage from "./components/ActorListPage";
import NavBar from "./components/NavBar";

import "./styles.css";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage />
      )}
    </main>
  );
}
