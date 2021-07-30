import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = ({defaultCategories = []}) => {
    const [categories, setCategories] = useState(defaultCategories)

    // const handleAdd = () => {
    //     setCategories(cats => [ 'one', ...cats])
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                        ))
                }
            </ol>
        </>
    )
}

