import React, { useEffect } from "react";

const MovieTrailers = ({ trailerPath }) => {


    return (
        <div>
            {trailerPath && (
                <iframe
                    allowFullScreen={true}
                    title={"trailer"}
                    width={550}
                    height={400}
                    src={`http://www.youtube.com/embed/${trailerPath.key}`}
                ></iframe>
            )}
        </div>
    );
};

export { MovieTrailers };