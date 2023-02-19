
import {Route, Routes} from "react-router-dom";
import {MoviesPage} from "./container/MoviesPage";

import {MovieInfo} from "./components/MovieInfo/MovieInfo";

const App = () => (
    <div>
        <Routes>

            <Route path={''} element={<MoviesPage/>}/>

            <Route path={'/movie/:id'} element={<MovieInfo/>}/>

        </Routes>
    </div>
);

export {App};
