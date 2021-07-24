import { shallow } from 'enzyme';
import React from 'react';

import GifGridItem from "../../components/GifGridItem";

describe('Pruebas con GifGridItem', () => {

    const imgMock = {
        title: 'Title test',
        url: 'https://github.com/'
    }
    let wrapper = shallow( <GifGridItem {...imgMock} /> )

    
    test('GifGridItem debe ser iguall snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de tener un parrafo con titulo', () => {
        const figcaption = wrapper.find( 'figcaption' )

        expect( figcaption.text().trim() ).toBe( imgMock.title )
    })

    test('Debe ser igual a las propiedades src y alt enviadas', () => {
        const img = wrapper.find('img')

        expect( img.prop('src')).toBe( imgMock.url )
        expect( img.prop('alt')).toBe( imgMock.title )
        

    })

    test('Debe de tener la clase card', () => {
        const img = wrapper.find('img')
        const className = img.prop('className')

        expect( className.includes('card') ).toBe( true )
    })
})