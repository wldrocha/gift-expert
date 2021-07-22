import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GiftGrid from './components/GiftGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch'])

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
                        <GiftGrid
                            key={category}
                            category={category}
                        />
                        ))
                }
            </ol>
        </>
    )
}

