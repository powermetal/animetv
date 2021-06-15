import axios from 'axios';

const userAPI = axios.create({
    baseURL: 'https://animootv.herokuapp.com'
})

export const getUserData = id => {
    return userAPI
                .get(`/users/${id}`)
                .then(response => response.data)
}

export const postToWatching = (id, anime) => {
    return userAPI.post(`/users/${id}/watching`, anime)
}

export const postToWatchlist = (id, anime) => {
    return userAPI.post(`/users/${id}/watchlist`, anime)
}

export const getContinueWatchingList = id => {
    return userAPI
            .get(`/users/${id}/continue`)
            .then(response => response.data)
}

export const getWatchlist = id => {
    return userAPI
            .get(`/users/${id}/watchlist`)
            .then(response => response.data)
}

export const deleteFromWatchlist = (id, anime) => {
    return userAPI.put(`/users/${id}/watchlist`, anime)
}