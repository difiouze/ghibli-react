import React from 'react'
import Movie from '../components/Movie';

const MovieList = ({movies}) => {

    return (
        <div>
            {movies.map(movie => (
                <Movie  key={movie.id} 
                        title={movie.title}
                        director={movie.director}
                        release={movie.release_date}
                        description={movie.description}
                        /> 
            ))}
            <Movie />
        </div>
    )
}

export default MovieList
