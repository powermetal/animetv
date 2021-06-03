import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';
import { getWatchlist } from '../../userAPI';
import PaginatedContainer from '../PaginatedContainer/PaginatedContainer';
import AnimeCard from '../AnimeCard/AnimeCard';
import { removeWatchlist, selectWatchlist } from '../../Redux/userSlice';

const Watchlist = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const [animes, setAnimes] = useState([])
    
    const getWatchlistList = async () => {
        console.log('voy a buscar la watchlist al server')
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
                        type="watchlist"
                        fn={() => dispatch(removeWatchlist({animeId: anime.animeId}))}
                      />
          } )        
    }

    return <div><PaginatedContainer key={'a'} items={toCard()} pageLimit={12} /></div>
}

export default Watchlist
