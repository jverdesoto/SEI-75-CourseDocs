import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage'
import MoviesListPage from './pages/MoviesListPage/MoviesListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import ActorsListPage from './pages/ActorListPage/ActorListPage'


function App() {
  const [user, setUser] = useState(null) //update this to a string when the user logs in

  return (
    <div className="App">
      <Routes>
        {user ?
          <>
            <Route path="/" element={< MoviesListPage user={user} />} />
            <Route path="/movies/:movieName" element={< MovieDetailPage />} />
            <Route path="/actors" element={< ActorsListPage />} />
          </>
          :
          <Route path="/" element={<LoginPage user={user} setUser={setUser}/>} />
        }

      </Routes>
    </div>
  );
}

export default App;
