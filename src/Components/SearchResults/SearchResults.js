import React, { useEffect, useState } from 'react';
import { searchAnime } from '../../animeAPI';
import qs from 'qs'
import AnimeCard from '../AnimeCard/AnimeCard';
import './SearchResults.css';
import PaginatedContainer from '../PaginatedContainer/PaginatedContainer';

const SearchResults = (props) => {

    const [results, setResults] = useState([])
    const query = props.location.search

    const searchAnimes = async (onSuccess) => {
        const query = qs.parse(props.location.search, { ignoreQueryPrefix: true })
        const response = await searchAnime(query)
        setResults(response);
    }

    useEffect(() => {
        searchAnimes()
    }, [props.location.search])

    const renderContainer = () => {
        const animes = {
            results: {
                items: results.map(a => <AnimeCard key={a.id} poster={a.poster} title={a.title} url={a.id} />),
                errMessage: `Lo siento, no se encontraron resultados para tu busqueda`
            }
        }

        return <PaginatedContainer key={query} tabs={animes} pageLimit={10} />
    }

    return (
        <div className="search-results">
            {renderContainer()}
        </div>
    )
}

export default SearchResults
