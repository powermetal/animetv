import axios from 'axios';
import qs from 'qs';

export const animeAPI = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getAnimeVideo = anime => {
    return animeAPI.get(`/anime/${anime.title}/${anime.episode}`)
        .then(response => {
            return { episodesCount: response.data.episodes, videos: response.data.videos.filter(e => e.option !== 'Nozomi') }
        }, e => console.log(e))
}

export const searchAnime = queryParams => {
    return animeAPI.get('/animes', { params: { search: queryParams.q.replace(' ', '%20'), page: queryParams.page } })
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