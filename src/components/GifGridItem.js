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


GifGridItem.protoTypes = {
    title: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem
