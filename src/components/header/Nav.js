import React from "react";
import { Link } from 'react-router-dom';
import './../../App.css';

const Nav = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Nav