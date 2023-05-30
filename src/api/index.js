import axios from "axios";
import { API_ENDPINTS, API_KEY } from "../helpers/constat/constant";
// TO GETTING MOVIE"S GENERS LIST 

export async function MoviesGenresList(){
    const response = await axios.get(API_ENDPINTS.GENRES, {
        params: {
            api_key: API_KEY
        }
    })
    return response.data.genres
};

// Suggested movies

export async function SuggestedMoviesList() {
    const response = await axios.get(API_ENDPINTS.SUGGESTION, {
        params: {
            api_key: API_KEY
        }
    })
    return response.data.results
}

// By Genres ID

export async function GetMoviesByGenre(genreId) {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?&with_genres=${genreId}`, {
        params: {
            api_key: API_KEY
        }
    })
    return response.data.results
}

// Popular 

export async function GetPopularMovies() {
    const response = await axios.get(API_ENDPINTS.POPULAR, {
        params: {
            api_key: API_KEY
        }
    })
    return response.data.results;
}


// Find Movie by ID

export async function GetMovieByID(movieID) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, {
        params: {
            api_key: API_KEY
        }
    })
    return response.data
}