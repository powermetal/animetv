import React, { useEffect, useState } from 'react';
import { getEpisodeList } from '../../animeAPI';
import { Link } from 'react-router-dom';
import './EpisodeList.css';
import PaginatedList from '../PaginatedList/PaginatedList';

const EpisodeList = (props) => {
    const [anime, setAnime] = useState({})

    const animeList = Array.from({ length: anime.episodeCount }, ((e, i) => {
        return {
            title: e = `${anime.title} - Episodio ${i + 1}`,
            id: i + 1,
            url: `/watch/${props.match.params.title}/${i + 1}`
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
            default: true,
            actions: []
        }
    }

    return (
        <div className="episode-list">
            <div className="episode-list-anime">
                <div className="episode-list-anime-info">
                    <img src={anime.poster} />
                    <ul className="episode-list-anime-info-state">
                        <li>{anime.type}</li>
                        <li>{anime.state}</li>
                    </ul>
                    <p alt={anime.overview}>{anime.overview}</p>
                </div>
                <div className="episode-list-pagination">
                    <PaginatedList tabs={episodeList} />
                </div>
            </div>
        </div>
    )
}

export default EpisodeList
