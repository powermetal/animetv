import React from 'react';
import './AnimeCard.css';
import { Link } from 'react-router-dom';

const AnimeCard = ({ title, poster, url, episode = null, nextEpisodeDate, type }) => {

    const toEpisode = () => {
        if(nextEpisodeDate)
            return <span>{nextEpisodeDate}</span>
        else
            if(episode)
            return <span>Episodio {episode}</span>
    }
    
    return (
        <div className="card">
            <Link to={`${type === 'search' ? '/anime/' : '/watch/'}${url}`}>
                <img src={poster} />
                <div className="card-title">
                    <p>{title}</p>
                    {toEpisode()}
                </div>
            </Link>
        </div>
    )
}

export default AnimeCard
