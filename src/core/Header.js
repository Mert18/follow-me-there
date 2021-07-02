import React from 'react'
import '../styles/header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <h2>Follow Me There</h2>
            </div>
            <div className="header-nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/howitworks'>How It Works?</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
