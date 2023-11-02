import React from "react";
import PropTypes from 'prop-types'
import './Movie.css';

function Movie({ release_date, title, overview, poster_path, genre_ids}){
    // console.log(poster_path)
    return (
        <div className="movie">
            <img
                src={'https://image.tmdb.org/t/p/w400'+poster_path}
                alt={title}
                title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__release_date">{release_date}</h5>               
                <ul className="movie__genres">
                    {genre_ids.map((genre, index)=> {
                        return (
                            <li key = {index} className="movie__genre">
                            {genre}
                            </li>
                        )
                    })}
                </ul>
                <p className="movie_overview">{overview}</p>
                <p className="movie__overview">{overview.slice(0,100)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired
};
export default Movie;