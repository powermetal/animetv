import React from 'react';
import './AnimeCard.css';
import { Link } from 'react-router-dom';

const AnimeCard = ({ title, poster, url }) => {
    return (
        <div className="card">
            <Link to={`/anime/${url}`}>
                <img src={poster} />
                <div className="card-title">
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default AnimeCard
