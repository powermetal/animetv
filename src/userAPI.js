import axios from 'axios';

const userAPI = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getUserData = id => {
    return userAPI.get(`/users/${id}`)
            .then(response => response.data, e => console.log(e))
}

export const postToWatching = (id, anime) => {
    console.log(anime)
    return userAPI.post(`/users/${id}/watching`, anime)
                    .then(response => console.log(response), e => console.log(e))
}