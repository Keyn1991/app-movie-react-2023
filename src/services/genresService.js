
import {urls} from ".././configs/urls";
import {axiosService} from "./axiosService";

let genreService = {

    getAllGenres: () => axiosService.get(urls.genres),
};

export {
    genreService
}