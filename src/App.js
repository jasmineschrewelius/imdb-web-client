import './App.css';
import { useEffect, useState } from 'react';
import MovieTable from './components/MovieTable/MovieTable';
import MovieForm from './components/MovieForm/MovieForm';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://localhost:8000/movie")
    .then((resp) =>  resp.json())
    .then((movies) => setMovies(movies));
  }, []);


  return (
    <div className="App">
      <h1 className="text-3xl text-center mb-5">IMDb</h1>

      <MovieForm />

      <MovieTable movies={movies} />
     
    </div>
  );
}

export default App;