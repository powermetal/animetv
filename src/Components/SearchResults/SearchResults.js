import React from 'react';
import { searchAnime } from '../../animeAPI';
import qs from 'qs'
import AnimeCard from '../AnimeCard/AnimeCard';
import './SearchResults.css';
import LazyPaginatedContainer from '../LazyPaginatedContainer/LazyPaginatedContainer';

const SearchResults = (props) => {

    const searchAnimes = (page = 1) => {
        const query = { ...qs.parse(props.location.search, { ignoreQueryPrefix: true }), page }
        return searchAnime(query)
    }

    const toCard = anime => <AnimeCard key={anime.id} poster={anime.poster} title={anime.title} url={anime.id} type={'search'} />

    return (
        <div className="search-results">
            <LazyPaginatedContainer key={props.location.search} getContent={(pageNum) => searchAnimes(pageNum)} renderItem={toCard} />
        </div>
    )
}

export default SearchResults