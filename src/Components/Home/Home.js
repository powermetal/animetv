import React, { useEffect, useState } from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import { selectUser, isSignIn } from '../../Redux/userSlice';
import { getContinueWatchingList } from '../../userAPI';
import PaginatedContainer from '../PaginatedContainer/PaginatedContainer';
import AnimeCard from '../AnimeCard/AnimeCard';
import logo from '../../images/logo.png';

const Home = () => {

  const user = useSelector(selectUser)
  const signedIn = useSelector(isSignIn)
  const [animes, setAnimes] = useState([])

  const getWatching = async () => {
      const response = await getContinueWatchingList(user.googleId)
      setAnimes(response)
  }

  useEffect(() => {
    if(user.googleId)
      getWatching()
    else
      setAnimes([])
  },[user.googleId])

  const toCard = () =>{
      if(animes.length)
        return animes.map( anime => {
            return <AnimeCard
                      key={anime.animeId}
                      nextEpisodeDate={anime.nextEpisodeDate}
                      episode={anime.nextEpisode}
                      title={anime.title}
                      poster={anime.poster}
                      url={`${anime.animeId}/${anime.nextEpisode}`}
                      type={'watch'}
                    />
        } )        
  }

  const renderContent = () => {
    if(signedIn) {
        return (
          <div className="home">
              <PaginatedContainer key={animes.length} items={toCard()} pageLimit={12} />
          </div>
        )
    }
    else
        return(
          <div className="home-signed-out">
            <img src={logo} />
            <p>Inicia sesión para empezar a agregar contenido a tu lista de seguimiento.</p>
          </div>    
        )
  }

  return renderContent()
}

export default Home
