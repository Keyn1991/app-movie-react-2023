import React, {useEffect, useState} from "react";

import {axiosService} from "../../services";

const MovieTrailers = ({ id }) => {

    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        const fetchTrailers = async () => {
            try {
                const response = await axiosService.get(`/movie/${id}/videos`);
                setTrailers(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTrailers();
    }, [id]);


    return (

        <div>
            {trailers.length > 0 ? (
                <iframe
                    allowFullScreen={true}
                    title={"trailer"}
                    width={565}
                    height={400}
                    src={`https://www.youtube.com/embed/${trailers[0].key}`}
                >
                    {trailers[0].name}
                </iframe>
            ) : (
                <p>No trailers found</p>
            )}
        </div>

    );
};

export { MovieTrailers};