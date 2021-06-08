import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWatchlist } from '../../userAPI';
import PaginatedContainer from '../PaginatedContainer/PaginatedContainer';
import AnimeCard from '../AnimeCard/AnimeCard';
import { removeWatchlist, selectWatchlist, selectUser, refreshWatchlist } from '../../Redux/userSlice';

const Watchlist = () => {
    const dispatch = useDispatch()
    const watchlist = useSelector(selectWatchlist)
    const user = useSelector(selectUser)

    const getUpdatedWatchlist = async () => {
        const animes = await getWatchlist(user.googleId)
        dispatch(refreshWatchlist(animes))
    }

    useEffect( () => {
        if(user.googleId)
        getUpdatedWatchlist()
    }, [user.googleId])

    const toCard = () =>{
        if(watchlist.length)
          return watchlist.map( anime => {
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
