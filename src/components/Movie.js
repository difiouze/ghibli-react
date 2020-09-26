import React from 'react'

const Movie = ({ title, director, description, release }) => {
    return (
            <div className="card__item">
                <div className="card__title">
                    {title}
                </div>
                <div className="card__director">
                    <span>Directed by: {director} </span> 
                </div>
                <div className="card__release">
                    <span>Release date: </span>{release}</div>
                <p className="card__description">{description}</p>
            </div>
    )
}

export default Movie
