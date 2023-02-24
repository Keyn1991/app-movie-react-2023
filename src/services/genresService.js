
import {urls} from ".././configs/urls";
import {axiosService} from "./axiosService";

const genreService = {

    getAllGenres: () => axiosService.get(urls.genres),
};

export {
    genreService
}