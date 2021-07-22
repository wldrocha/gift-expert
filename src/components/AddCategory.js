import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputaValue, setInputaValue] = useState('')

    const handleInputChange = (e) => {
        setInputaValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputaValue.trim().length >2){
            setCategories(cats => [ inputaValue, ...cats ])
            setInputaValue('')
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" onChange={ handleInputChange } value={ inputaValue } />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}