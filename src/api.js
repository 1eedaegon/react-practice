import axios from 'axios';

// const CONN_INFO = {
//   baseURL: 'https: => Please input any url',
//   params: {
//     api_key: 'Something very long api key',
//     language: 'en-US',
//   },
// };
// const api = axios.create(CONN_INFO);
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '10923b261ba94d897ac6b81148314a3f',
    language: 'eu-US',
  },
});

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/now_playing'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) => api.get(`movie/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  }),
  search: (term) => api.get('search/movie', {
    params: {
      query: term,
    },
  }),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id) => api.get(`tv/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  }),
  search: (term) => api.get('search/tv', {
    params: {
      query: term,
    },
  }),
};
