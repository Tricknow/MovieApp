import React from "react";
import PropTypes from 'prop-types'
import './NowMovies.css'
import { useNavigate } from "react-router-dom";

function NowMovies({ release_date, title, overview, poster_path, vote_average, id}){
    const navigate = useNavigate()
    return (
            <div onClick={()=>navigate(`/${id}`)} className="NowMovies">
                <img
                    src={'https://image.tmdb.org/t/p/w400'+poster_path}
                    alt={title}
                    title={overview} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__release_date">{release_date}</h5>
                    <span role="img" aria-label="star" className="vote_average">⭐{vote_average.toFixed(1)}/10</span>
                </div>
            </div>
    );
}
NowMovies.propTypes = {
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_averages: PropTypes.number.isRequired
};
export default NowMovies;