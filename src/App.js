
import {Route, Routes} from "react-router-dom";
import {MoviesPage} from "./container/MoviesPage";

import {MovieInfo} from "./components/MovieInfo/MovieInfo";

const App = () => {


    return  (

    <div>
        <Routes>
            <Route path={''} element={<MoviesPage/>}/>
            <Route path={'/movie/:id'} element={<MovieInfo/>}/>
            <Route path={'/genre/:id'} element={<MoviesPage/>}/>
            <Route path={'/genre/:id/:id'} element={<MoviesPage/>}/>
        </Routes>
    </div>
    )
};

export {App};