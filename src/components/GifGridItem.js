import React from 'react'

const GifGridItem = ({ title, url}) => {
    return (
        <figure className="card">
            <img src={ url } alt={ title } className="card-img " />
            <figcaption className="card-text">{ title }</figcaption>
        </figure>
    )
}

export default GifGridItem
