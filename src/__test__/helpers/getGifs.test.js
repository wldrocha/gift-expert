import { getGifs } from '../../helpers/getGifs'


describe('Pruebas con get gifs fetch', () => {
    test('Debe traer 10 elementos', async() => {
        const gifs = await getGifs('one punch')
        
        expect( gifs.length ).toBe( 10 )
    })

    test('Debe traer 0 elementos', async() => {
        const gifs = await getGifs('')
        
        expect( gifs.length ).toBe( 0 )
    })
})