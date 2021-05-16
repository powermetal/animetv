import React from 'react';
import './Sidebar.css';
import Searchbar from '../Searchbar/Searchbar';
import { useHistory } from 'react-router-dom';
import UserContainer from '../UserContainer/UserContainer';

const Sidebar = () => {

    const history = useHistory()

    const onSubmit = (searchTerm) => {
        if (searchTerm.length === 0)
            return
        history.push(`/search?q=${searchTerm}`)
    }

    return (
        <div className="sidebar-main">
            <Searchbar onSearch={onSubmit} />
            <UserContainer />
        </div>
    )
}

export default Sidebar
