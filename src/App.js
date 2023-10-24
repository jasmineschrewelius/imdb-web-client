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

  const addMovie = (movie) => { // add movie to web api

    fetch("https://localhost:8000/movie", {  
            method: "post",                  
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie),
        })
        .then(resp => resp.json())
        .then((movie) => {
          setMovies([ ...movies, movie]); // take the old state and replace it with the new one (movie)
        });
  };

  const handleOnDelete = (movieId) => {  // delete the movie based on id user choose, to web api
    
    fetch(`https://localhost:8000/movie/${movieId}`, {
        method: "delete",
    })
    .then((resp) => {
      const newMovies = movies.filter(x => x.id !== movieId); // create a new array with all the movies that does not includ the id chosen by user

      setMovies(newMovies); // set the new state of the collection movies
    });
  };


  return (
    <div className="App">
      <h1 className="text-3xl text-center mb-5">IMDb</h1>

      <MovieForm onAdd={addMovie}/>

      <MovieTable movies={movies} onDelete={handleOnDelete}/>
     
    </div>
  );
}

export default App;