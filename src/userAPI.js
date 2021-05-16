import axios from 'axios';

const userAPI = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getUserData = id => {
    console.log('hola' + id)
    return userAPI.get(`/users/${id}`)
            .then(response => response.data, e => console.log(e))
}