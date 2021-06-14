import axios from 'axios';

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
    return animeAPI.get('/animes', { params: { search: queryParams.q, page: queryParams.page } })
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

export const getAnimeTitles = title => {
    return axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${title}&fields[anime]=titles`)
                    .then( response => {
                        return response.data.data.map(e => e.attributes.titles.en_jp)
                    })
}

