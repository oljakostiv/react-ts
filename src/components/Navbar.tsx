import React from 'react';

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper teal darken-4 px1">
            <a href="/" className="brand-logo center">Let's go!</a>
            <ul className="left hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/">Components</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
    </nav>
)

