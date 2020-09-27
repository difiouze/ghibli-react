import React from 'react'
import Movie from '../components/Movie';

const MovieList = ({movies, setMovies}) => {

    return (
        <div className="card__container">
            {movies.map(movie => (
                <Movie  key={movie.id} 
                        title={movie.title}
                        director={movie.director}
                        release={movie.release_date}
                        description={movie.description}
                        movie={movie}
                        setMovies={setMovies}
                        movies ={movies}
                        /> 
            ))}
        </div>
    )
}

export default MovieList
