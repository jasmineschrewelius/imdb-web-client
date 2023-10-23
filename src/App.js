import './App.css';
import { useEffect, useState } from 'react';
import MovieTable from './components/MovieTable/MovieTable';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://localhost:8000/movie")
    .then((resp) =>  resp.json())
    .then((movies) => setMovies(movies));
  }, []);

  return (
    <div className="App">
      <h1>IMDb</h1>

      <MovieTable movies={movies} />
     
    </div>
  );
}

export default App;
