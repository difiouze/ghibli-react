import React from 'react'

const Movie = ({ title, director, description, release }) => {
    return (
        <div>
            <div className="card">
                <div className="card__title">
                    <h1>{title}</h1>
                </div>
                <div className="card__director">
                    <span>Directed by: {director} </span> 
                </div>
                <div className="card__movie">
                    <span>Release date: </span>{release}</div>
                <div className="card__movie">{description}</div>
            </div>
        </div>
    )
}

export default Movie
