import React, { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { getAnimeVideo } from '../../animeAPI';
import './Watch.css';
import Button from '../Button/Button';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const Watch = (props) => {
    const [videos, setVideos] = useState([])

    const previousEpisode = {
        label: 'Episodio anterior',
        url: props.match.params.episode > 1 ? `/watch/${props.match.params.title}/${parseInt(props.match.params.episode) - 1}` : '#',
        icon: <SkipPreviousIcon style={{ order: '-1' }} />,
        greyed: props.match.params.episode == 1
    }

    const nextEpisode = {
        label: 'Episodio siguiente',
        url: props.match.params.episode < videos.episodesCount ? `/watch/${props.match.params.title}/${parseInt(props.match.params.episode) + 1}` : '#',
        icon: <SkipNextIcon />,
        greyed: props.match.params.episode == videos.episodesCount
    }

    useEffect(() => {
        const pepe = async () => {
            const response = await getAnimeVideo({ title: props.match.params.title, episode: props.match.params.episode })
            setVideos(response)
        }
        pepe()
    }, [props.match.params.episode])

    return (
        <div className="watch">
            <div className="watch-main">
                <VideoPlayer videos={videos.videos} />
                <div className="watch-nav">
                    <Button btn={previousEpisode} />
                    <Button btn={nextEpisode} />
                </div>
            </div>
        </div>
    )
}

export default Watch
