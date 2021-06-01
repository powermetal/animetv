import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';
import { getWatchlist } from '../../userAPI';
import PaginatedContainer from '../PaginatedContainer/PaginatedContainer';
import AnimeCard from '../AnimeCard/AnimeCard';

const Watchlist = () => {

    const user = useSelector(selectUser)
    const [animes, setAnimes] = useState([])
    
    const getWatchlistList = async () => {
        const response = await getWatchlist(user.googleId)
        setAnimes(response)
    }

    useEffect( () => {
        if(user.googleId)
            getWatchlistList()
    },[user])

    const toCard = () =>{
        if(animes.length)
          return animes.map( anime => {
              return <AnimeCard
                        key={anime.animeId}
                        poster={anime.poster}
                        url={anime.animeId}
                        title={anime.title}
                        type="search"
                      />
          } )        
    }

    return <PaginatedContainer items={toCard()} pageLimit={12} />
}

export default Watchlist
