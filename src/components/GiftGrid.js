import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GiftGrid = ({ category }) => {

    const { loading, data:images } = useFetchGifs( category )
    
    return (
        <>
            <h3>{ category }</h3>
            {loading && <p>Loaging...</p>}
            <div className="card-grid">
                    {
                        images.map(( img ) => (
                            <GifGridItem 
                            key={ img.id }
                            { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}

export default GiftGrid
