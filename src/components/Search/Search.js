
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import css from './Search.module.css'
const Search = () => {
    const request = useSelector((state) => state.movie.request);
    const dispatch = useDispatch();
    const prevRequest = useRef("");

    useEffect(() => {
        if (request !== prevRequest.current) {
            if (request === "") {
                dispatch(movieAction.getAllMovies());
            } else {
                dispatch(movieAction.searchMovie(request));
            }
            prevRequest.current = request;
        }
    }, [request, dispatch]);

    const handleChange = (event) => {
        const value = event.target.value;
        dispatch(movieAction.searchMovie(value));
        if (value === "") {
            dispatch(movieAction.getAllMovies());
        } else {
            dispatch(movieAction.searchMovie(value));
        }
    };

    return (
        <div className={css.searchInput}>
            <input
                className={`${css.input} input`}
                type="text"
                placeholder={"Let's find your movie..."}
                onChange={handleChange}
                value={request}
            />
        </div>
    );
};

export { Search };
