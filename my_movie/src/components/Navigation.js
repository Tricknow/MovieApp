import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';



function Navigation() {
    return (
        <div className="nav">
            <Link className="navMenu" to='/'>Home</Link>
            <Link className="navMenu" to='/now'>Now Playing</Link>
        </div>
    )
}


export default Navigation