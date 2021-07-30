import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from "enzyme/build"
import { AddCategory } from "../../components/AddCategory"


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory  setCategories={ setCategories }/>)

    beforeEach( () => {
        //clean mocks
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory  setCategories={ setCategories }/>)
    })
     
    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot()

    })

    test('Simular escritura en la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'test on target'
        input.simulate('change', { target: { value } })
    })

    test('No debe de ppostear la funcion en el submit', () => {
        const form = wrapper.find('form')

        form.simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()
    })

    test('Debe de llamar la funcion setCategories y limpiar el input', () => {
        const value = { 
            target: { value : 'Hola mundo'}
        }
        
        wrapper.find('input').simulate('change', value)
        wrapper.find('form').simulate('submit', { preventDefault(){ } })

        expect( setCategories ).toHaveBeenCalled()
        //Execute 2
        expect( setCategories ).toHaveBeenCalledTimes(1)
        //Execute to function
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

        expect( wrapper.find('input').prop('value') ).toBe('')
    })
})