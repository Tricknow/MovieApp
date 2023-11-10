import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';



function Navigation() {
    return (
        <div className="nav" onClick={()=>'/now'}>
            <span className="TMDB_LOGO"> OpenAPI by
                <a href="https://www.themoviedb.org/?language=ko" target="_blank" rel="noopener noreferrer">
                <img className="TMDB_img"
                    src={'https://files.readme.io/29c6fee-blue_short.svg'}
                    alt={"TMDB_LOGO"}
                    title={"TMDB"} />
                </a>
            </span>
            <Link className="navMenu" to='/'>Home</Link>
            <Link className="navMenu" to='/now'>Now Playing</Link>
            <Link className="navMenu" to='/top'>Top Rated</Link>
            <Link className="navMenu" to='/popular'>Popular</Link>
            
        </div>
    )
}


export default Navigation