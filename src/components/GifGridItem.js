import React from 'react'

const GifGridItem = ({ title, url}) => {
    return (
        <div className="card">
            <figure>
                <img src={ url } alt={ title } className="card-img " />
                <figcaption>{ title }</figcaption>
            </figure>
        </div>
    )
}

export default GifGridItem
