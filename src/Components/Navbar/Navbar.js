import React from 'react';
import './Navbar.css';
import Searchbar from '../Searchbar/Searchbar';
import { useHistory } from 'react-router-dom';
import UserContainer from '../UserContainer/UserContainer';
import MyInput from '../MyInput/MyInput';
import { getAnimeTitles } from '../../animeAPI';

const Sidebar = () => {

    const history = useHistory()

    const onSubmit = (searchTerm) => {
        if (searchTerm.length === 0)
            return
        history.push(`/search?q=${searchTerm}`)
    }

    const renderItem = (e) => {
        return (
            <div className="search-item" key={e} onClick={ () => onSubmit(e) }>
                {e}
            </div>
        )
    }

    return (
        <div className="navbar-main">
            <Searchbar onSearch={onSubmit} />
            <UserContainer />
        </div>
    )
}

export default Sidebar
