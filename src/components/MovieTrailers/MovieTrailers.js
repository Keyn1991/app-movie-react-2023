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
                <div>
                    {trailers.map((trailer) => (
                        <li key={trailer.key}>
                            <iframe
                                allowFullScreen={true}
                                            title={"trailer"}
                                            width={565}
                                            height={400}
                                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            >
                                {trailer.name}
                            </iframe>
                        </li>
                    ))}
                </div>
            ) : (
                <p>No trailers found</p>
            )}
        </div>




        // <div>
        //     {trailerPath && (
        //         <iframe
        //             allowFullScreen={true}
        //             title={"trailer"}
        //             width={565}
        //             height={400}
        //             src={`https://www.youtube.com/embed/${trailerPath}`}
        //         ></iframe>
        //     )}
        //
        // </div>
    );
};

export { MovieTrailers};