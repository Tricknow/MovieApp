import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";



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
            <NavLink activeclassName='active' className="navMenu" to='/'>Home</NavLink>
            <NavLink activeclassName='active' className="navMenu" to='/now'>Now Playing</NavLink>
            <NavLink activeclassName='active' className="navMenu" to='/top'>Top Rated</NavLink>
            <NavLink activeclassName='active' className="navMenu" to='/popular'>Popular</NavLink>
        </div>
    )
}


export default Navigation