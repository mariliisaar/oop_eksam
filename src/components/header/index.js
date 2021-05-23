import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <img src="/static/svg/settings.svg" />
            <nav>
                <ul>
                    <li><Link to={"/question"}>Question</Link></li>
                    <li><Link to={"/add"}>Add</Link></li>
                    <li><Link to={"/"}>List</Link></li>
                </ul>
            </nav>
            <img src="/static/svg/logout.svg" />
        </header>
    );
};

export default Header;