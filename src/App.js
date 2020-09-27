import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(`https://ghibliapi.herokuapp.com/films`);
      console.log(result.data);
      setMovies(result.data);
    }
    fetchMovies();
  }, [])

  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} setMovies={setMovies}/>
    </div>
  );
}

export default App;
