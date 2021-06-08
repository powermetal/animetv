import axios from 'axios';

const userAPI = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getUserData = id => {
    return userAPI.get(`/users/${id}`)
            .then(response => response.data, e => console.log(e))
}

export const postToWatching = (id, anime) => {
    return userAPI.post(`/users/${id}/watching`, anime)
                    .then(response => console.log(response), e => console.log(e))
}

export const postToWatchlist = (id, anime) => {
    return userAPI.post(`/users/${id}/watchlist`, anime)
                    .then(response => console.log(response), e => console.log(e))
}

export const getContinueWatchingList = id => {
    return userAPI.get(`/users/${id}/continue`)
            .then(response => response.data, e => console.log(e))
}

export const getWatchlist = id => {
    return userAPI.get(`/users/${id}/watchlist`)
            .then(response => response.data, e => console.log(e))
}

export const deleteFromWatchlist = (id, anime) => {
    console.log(anime)
    return userAPI.put(`/users/${id}/watchlist`, anime)
                    .then(response => console.log(response), e => console.log(e))
}