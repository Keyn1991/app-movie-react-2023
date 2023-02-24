
const baseURL = "https://api.themoviedb.org/3";
const posterURL = 'https://image.tmdb.org/t/p/w500'
 const urls = {

     movies: '/discover/movie',
     movie: '/movie',
     genres: '/genre/movie/list',
     search: '/search/movie?query=',

     // video:   `/movie/{:movie_id}/videos`
}


export {
    baseURL,
    urls,
    posterURL
 };

