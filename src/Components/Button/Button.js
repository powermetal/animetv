import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ btn }) => {

    return (
        <div>
            <Link to={btn.url}><button onClick={btn.fn ? btn.fn : null} className={`btn${btn.greyed ? '-greyed' : ''}`}>{btn.label}{btn.icon}</button></Link>
        </div>
    )
}

export default Button
