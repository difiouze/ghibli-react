import React from 'react'

const Movie = ({ title, director, description, release }) => {
    return (
            <div className="card__item">
                <div className="card__title">
                    {title}
                </div>
                <div className="card__director">
                    <span>Directed by: <strong>{director}</strong> </span> 
                </div>
                <div className="card__release">
                    <span>Release date: </span><strong>{release}</strong></div>
                <p className="card__description">{description}</p>
            </div>
    )
}

export default Movie
