import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper teal darken-4 px1">
            <a href="/" className="brand-logo center">Let's go!</a>
            <ul className="left hide-on-med-and-down">
                <li><NavLink to="/">Components</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
)

