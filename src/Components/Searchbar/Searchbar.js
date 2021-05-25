import React, { useState } from 'react';
import './Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';

const Searchbar = (props) => {
    const [search, setSearch] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.onSearch)
            props.onSearch(search)
    }

    return (
        <div className="searchbar">
            <form onSubmit={e => handleSubmit(e)} >
                <SearchIcon />
                <input className="searchbar-input" onChange={e => setSearch(e.target.value)} placeholder="Search..." />
            </form>
        </div>
    )
}

export default Searchbar
