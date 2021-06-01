import React from 'react';
import Home from './Components/Home/Home';
import SearchResults from './Components/SearchResults/SearchResults';
import EpisodeList from './Components/EpisodeList/EpisodeList';
import { BrowserRouter, Route } from 'react-router-dom';
import Watch from './Components/Watch/Watch';
import Sidebar from './Components/Navbar/Navbar';
import Watchlist from './Components/Watchlist/Watchlist';
import './App.css';


const App = () => {
    return (
        <div className={`app-main`}>
            <div className="app-sec">
            <BrowserRouter>
                <Sidebar />
                <Route path="/" exact component={Home} />
                <Route path="/watchlist" exact component={Watchlist} />
                <Route path="/search" exact component={SearchResults} />
                <Route path="/anime/:title" exact component={EpisodeList} />
                <Route path="/watch/:title/:episode" exact component={Watch} />
            </BrowserRouter>
            </div>
        </div>
    )
}

export default App
