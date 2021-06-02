import React from 'react';
import './AnimeCard.css';
import { Link } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';

const AnimeCard = ({ title, poster, url, episode = null, nextEpisodeDate, type, fn }) => {

    const toEpisode = () => {
        if(nextEpisodeDate)
            return <span>{nextEpisodeDate}</span>
        else
            if(episode)
            return <span>Episodio {episode}</span>
    }
    
    const renderRemoveButton = () => {
        if( type === 'watchlist')
            return <CancelIcon onClick={() => fn()} />
    }

    return (
        <div className="card" key={url}>
            {renderRemoveButton()}
            <Link to={`${type === 'watch' ? '/watch/' : '/anime/'}${url}`}>
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
