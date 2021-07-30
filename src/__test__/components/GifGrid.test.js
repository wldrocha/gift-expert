import { shallow } from 'enzyme';
import React from 'react';

import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom'

jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en <GifGrid />', () => {
    
    const category = "Hello"

    
    test('Debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        }) 
        
        const wrapper = shallow( <GifGrid category={category}/>)

        
        expect( wrapper ).toMatchSnapshot()

    })

    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const category = "Hello"

        const gifs = [
            {
                id: 1,
                url: "http://www.w3.org/1999/",
                title:'test'
            },
            {
                id: 2,
                url: "http://www.w3.org/1999/",
                title:'test2'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        }) 

        const wrapper = shallow( <GifGrid category={category}/>)

        expect( wrapper ).toMatchSnapshot()

        expect( wrapper.find('figcaption').exists() ).toBe( false )

        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    })


})