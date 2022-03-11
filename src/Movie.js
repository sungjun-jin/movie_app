import React from "react";
import propTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
    return (
        <div>
            <h1>{ title }</h1>
            <h3>{ year }</h3>
            <p>{ summary }</p>
            <img src={ poster } alt="picture" />
        </div>
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
};

export default Movie;