


const baseURL = "https://api.themoviedb.org/3";


let posterURL = 'https://image.tmdb.org/t/p/w500'
 const urls = {

     movies: '/discover/movie',
     movie: '/movie',
     genres: '/genre/movie/list',
     search: '/search/movie?query=',



     // discoverMoviesURL: `/discover/movie`,
     // movieDetailsURL: `/movie`,
     // genreListURL: '/genre/movie/list',
     // popularMovieURL: `/movie/popular`,
     // searchMovieURL: '/search/movie',
     // imageBaseURL:  'https://image.tmdb.org/t/p',
     // posterSizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']

}


export {
    baseURL,
    urls,
    posterURL
 };

