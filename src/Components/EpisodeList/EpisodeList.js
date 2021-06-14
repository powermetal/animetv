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
         selectWatching,
         removeWatchlist,
         isSignIn
} from '../../Redux/userSlice';

const EpisodeList = (props) => {
    const [anime, setAnime] = useState({})
    const dispatch = useDispatch()
    const watchlist = useSelector(selectWatchlist)
    const watching = useSelector(selectWatching)
    const signedIn = useSelector(isSignIn)

    const animeList = Array.from({ length: anime.episodeCount }, ((e, i) => {
    
        const isInWatching = () => {
            if(watching[props.match.params.title] >= i + 1)
                return <VisibilityOffIcon />
            else
                return <VisibilityIcon />
        }

        return {
            title: e = `${anime.title} - Episodio ${i + 1}`,
            id: i + 1,
            url: `/watch/${props.match.params.title}/${i + 1}`,
            actions: [
                {
                    icon: isInWatching(),
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

    const animeInfo = {
        animeId: props.match.params.title,
        poster: anime.poster,
        title: anime.title
    }

    const watchlistButton = () => {
        if(watchlist.find( e => e.animeId === props.match.params.title))
            return <ActionButton icon={<BookmarkIcon />} text="Watchlist" action={() => dispatch(removeWatchlist({animeId: props.match.params.title}))} />
        else
            return <ActionButton icon={<BookmarkBorderIcon />} text="Watchlist" action={() => dispatch(addWatchlist(animeInfo))} />
    }

    const renderWatchlist = () => {
        if(signedIn)
            return watchlistButton()
        else
            return null
    }

    const renderList = () => {
        if (anime.poster) {
            return (
                <>
                    <div className="episode-list-anime-info">
                        <div className="episode-list-anime-info-poster">
                            <img src={anime.poster} alt={anime.title}/>
                            {renderWatchlist()}
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
