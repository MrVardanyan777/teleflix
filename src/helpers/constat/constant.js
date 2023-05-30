//API_ENDPINTS

export const API_ENDPINTS = {
    GENRES: `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    SUGGESTION: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    POPULAR: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
}

export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const TMDB_IMAGE_BASE_URL_BG = 'https://image.tmdb.org/t/p/w1280';


export const API_KEY = '9dd7dbdc23a908b4d7ec0f3fe0fa8fd9';