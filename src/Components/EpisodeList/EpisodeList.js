import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodeList } from '../../animeAPI';
import './EpisodeList.css';
import PaginatedList from '../PaginatedList/PaginatedList';
import ActionButton from '../ActionButton/ActionButton';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { addWatching,
         addWatchlist,
         selectWatchlist,
         removeFromWatchlist }
from '../../Redux/userSlice';

const EpisodeList = (props) => {
    const [anime, setAnime] = useState({})
    const dispatch = useDispatch()
    const watchlist = useSelector(selectWatchlist)

    const isInWatching = () => {

    }

    const animeList = Array.from({ length: anime.episodeCount }, ((e, i) => {
        return {
            title: e = `${anime.title} - Episodio ${i + 1}`,
            id: i + 1,
            url: `/watch/${props.match.params.title}/${i + 1}`,
            actions: [
                {
                    icon: <VisibilityIcon />,
                    action: () => {
                        console.log({animeId: props.match.params.title, lastEpisode: i + 1  })
                        dispatch(addWatching({animeId: props.match.params.title, lastEpisode: i + 1  }))
                    }
                },
            ]
        }
    }))

    const getEpisodes = async () => {
        const query = props.match.params.title
        const response = await getEpisodeList(query)
        setAnime(response)
    }

    useEffect(() => {
        getEpisodes()
    }, [props.match.params.title]) 

    const episodeList = {
        episodes: {
            tab: anime.title,
            items: animeList,
            default: true
        }
    }

    const watchlistButton = () => {
        if(watchlist.find( e => e.animeId === props.match.params.title))
            return <ActionButton icon={<BookmarkIcon />} text="Watchlist" action={() => dispatch(removeFromWatchlist({animeId: props.match.params.title}))} />
        else
            return <ActionButton icon={<BookmarkBorderIcon />} text="Watchlist" action={() => dispatch(addWatchlist({animeId: props.match.params.title}))} />
    }

    const renderList = () => {
        if (anime.poster) {
            return (
                <>
                    <div className="episode-list-anime-info">
                        <div className="episode-list-anime-info-poster">
                            <img src={anime.poster} />
                            {watchlistButton()}
                        </div>
                        <ul className="episode-list-anime-info-state">
                            <li>{anime.type}</li>
                            <li>{anime.state}</li>
                        </ul>
                        <p alt={anime.overview}>{anime.overview}</p>
                    </div>
                    <div className="episode-list-pagination">
                        <PaginatedList tabs={episodeList} />
                    </div>
                </>
            )
        }
        else
            return <div className="episode-list-loader"><Loader type="Puff" color="#ffa800" height={100} width={100} /></div>
    }

    return (
        <div className="episode-list">
            <div className="episode-list-anime">
                {renderList()}
            </div>
        </div>
    )
}

export default EpisodeList
