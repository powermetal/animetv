import React from 'react';
import './AnimeCard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ActionButton from '../ActionButton/ActionButton';
import {
    addWatchlist,
    selectWatchlist,
    removeWatchlist,
    isSignIn
}
from '../../Redux/userSlice';

const AnimeCard = ({ title, poster, url, episode = null, nextEpisodeDate, type, fn }) => {

    const dispatch = useDispatch()
    const watchlist = useSelector(selectWatchlist)
    const signedIn = useSelector(isSignIn)

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

    const animeInfo = {
        animeId: url,
        poster: poster,
        title: title
    }

    const watchlistButton = () => {
        if(watchlist.find( e => e.animeId === url))
            return <ActionButton icon={<BookmarkIcon />} text="Watchlist" action={() => dispatch(removeWatchlist({animeId: url}))} />
        else
            return <ActionButton icon={<BookmarkBorderIcon />} text="Watchlist" action={() => dispatch(addWatchlist(animeInfo))} />
    }

    const renderWatchlist = () => {
        if(type === 'search' && signedIn)
            return (
            <div className="card-watchlist">
                    {watchlistButton()}
            </div>
            )
        else
            return null
    }

    return (
        <div className="card" key={url}>
            {renderRemoveButton()}
            {renderWatchlist()}
            <Link to={`${type === 'watch' ? '/watch/' : '/anime/'}${url}`}>
                <img src={poster} alt={title}/>
                <div className="card-title">
                    <p>{title}</p>
                    {toEpisode()}
                </div>
            </Link>
        </div>
    )
}

export default AnimeCard
