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

  const addMovie = (movie) => { // add movie to database

    fetch("https://localhost:8000/movie", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie),
        })
        .then(resp => resp.json())
        .then((movie) => {
          setMovies([ ...movies, movie]);
        });
  };


  return (
    <div className="App">
      <h1 className="text-3xl text-center mb-5">IMDb</h1>

      <MovieForm onAdd={addMovie}/>

      <MovieTable movies={movies} />
     
    </div>
  );
}

export default App;