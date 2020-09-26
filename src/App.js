import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './components/MovieList';

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
      <MovieList movies= {movies}/>
    </div>
  );
}

export default App;
