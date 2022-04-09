import React from 'react';

import './header.css';

const Header = () => {
    return (
        <header>
            <div className = 'header__logo'>
                <h2>Star DB</h2>
            </div>
            <nav className = 'header__nav'>
                <ul>
                    <li><a href = 'people' alt ='people'>People</a></li>
                    <li><a href = 'planets' alt ='planets'>Planets</a></li>
                    <li><a href = 'starships' alt ='starships'>Starships</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;