import axios from 'axios';
import qs from 'qs';

const animeAPI = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getAnimeVideo = anime => {
    return animeAPI.get(`/anime/${anime.title}/${anime.episode}`)
        .then(response => {
            return { episodesCount: response.data.episodes, videos: response.data.videos.filter(e => e.option !== 'Nozomi') }
        }, e => console.log(e))
}

export const searchAnime = search => {
    return animeAPI.get('/animes', { params: { search: search.q.replace(' ', '%20') } })
        .then(response => {
            return response.data
        }, e => console.log(e))
}

export const getEpisodeList = title => {
    return animeAPI.get(`/anime/${title}`)
        .then(response => {
            return response.data
        }, e => console.log(e))
}
