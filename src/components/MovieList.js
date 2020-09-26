import React from 'react'
import Movie from '../components/Movie';

const MovieList = ({movies}) => {

    return (
        <div className="card__container">
            {movies.map(movie => (
                <Movie  key={movie.id} 
                        title={movie.title}
                        director={movie.director}
                        release={movie.release_date}
                        description={movie.description}
                        /> 
            ))}
        </div>
    )
}

export default MovieList
