import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {

    getAllMovies: (page =1) => axiosService.get(`${urls.movies}?page=${page}`),
    getOneMovie: (id) => axiosService.get(`${urls.movie}/${id}`),
    movieSearch: (movie) => axiosService.get(`${urls.search}${movie}`),

    // getAllMovie: (page) => axiosService.get(`${urls.AllMovie}?page=${page}`),
    // getAllPopularMovie: (page) => axiosService.get(`${urls.popularMovie}?page=${page}`),
    // getMovieDetails: (id) => axiosService.get(`${urls.movieDetails}/${id}`),
    // getMoviesByGenre: (id) => axiosService.get(`${urls.getMoviesByGenre}?with_genres=${id}`),
    // getGenres: () => axiosService.get(urls.genre),
    // getSearch: (search) => axiosService.get(`${urls.searchMovie}?query=${search}`)
}

export {
    movieService
}