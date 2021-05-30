import React, { useEffect, useState } from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';
import { getContinueWatchingList } from '../../userAPI';
import PaginatedContainer from '../PaginatedContainer/PaginatedContainer';
import AnimeCard from '../AnimeCard/AnimeCard';

const Home = () => {

  const user = useSelector(selectUser)
  const [animes, setAnimes] = useState([])

  const getWatching = async () => {
      const response = await getContinueWatchingList(user.googleId)
      setAnimes(response)
  }

  useEffect(() => {
    if(user.googleId)
      getWatching()
  },[user])

  const toCard = () =>{
      if(animes.length)
      console.log(animes)
        return animes.map( anime => {
            return <AnimeCard
                      key={anime.animeId}
                      nextEpisodeDate={anime.nextEpisodeDate}
                      episode={anime.nextEpisode} title={anime.title}
                      poster={anime.poster}
                      url={`${anime.animeId}/${anime.nextEpisode}`}
                      type={'watch'}
                    />
        } )        
  }

  return (
    <div className="home">
      <PaginatedContainer items={toCard()} pageLimit={12} />
    </div>
  );
}

export default Home
