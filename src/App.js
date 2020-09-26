import React, {useEffect, useState} from 'react';
import './style.css';
import axios from 'axios';
import MovieList from './components/MovieList';
import logo from './img/logo.svg';

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
      <img className="logo" src={logo} alt="logo"/>
      <MovieList movies= {movies}/>
    </div>
  );
}

export default App;
