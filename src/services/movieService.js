import {axiosService} from "./axiosService";
import {urls} from "../configs";


const movieService = {

    getAllMovies: (page =1) => axiosService.get(`${urls.movies}?page=${page}`),
    getOneMovie: (id) => axiosService.get(`${urls.movie}/${id}`),
    movieSearch: (movie) => axiosService.get(`${urls.search}${movie}`),
    getGenreID:(genreID,page = 1)=>axiosService.get(urls.movies,{params:{page, with_genres:`${genreID}`}}),
    getMovieTrailers: (id) => axiosService.get(`${urls.movie.movie}/${id}/videos`),


}

export {
    movieService
}