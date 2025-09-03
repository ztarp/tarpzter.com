import React from "react"
import { Link } from 'react-router-dom'

const MainMenu = () => {

    return(
        <nav className="main-menu">
            <Link to="/">Home</Link>
            <Link to="/area1">Area 1</Link>
            <Link to="/area2">Area 2</Link>
            {/* Add more links as needed */}
        </nav>
    )
}

export default MainMenu