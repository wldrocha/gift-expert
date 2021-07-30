import React from 'react'
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url}) => {
    return (
        <figure className="card">
            <img src={ url } alt={ title } className="card-img " />
            <figcaption className="card-text">{ title }</figcaption>
        </figure>
    )
}


GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem
