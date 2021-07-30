import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import { GifExpertApp } from '../../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {


    
    test('Debe de mostrarse correctamente', () => {

        const categories = ['One punch', 'samurai x']
        
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} />)

        
        expect( wrapper ).toMatchSnapshot()
        
    })

    test('Debe de mostrarse la lista de categorias', () => {

        const categories = ['One punch', 'samurai x']
        
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} />)

        
        expect( wrapper ).toMatchSnapshot()
        
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )

    })
})