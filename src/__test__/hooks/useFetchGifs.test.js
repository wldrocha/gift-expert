import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'



describe('Pruebas en el hook useFetchGifs', () => {

    test('debe retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One punch'))
        const { data, loading } = result.current


        await waitForNextUpdate({ timeout: 5000 })


        expect( data ).toEqual([])
        expect( loading ).toBe(true)

    })

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One punch'))

        await waitForNextUpdate({ timeout: 5000 })

        const { data, loading } = result.current

        expect( data.length ).toEqual( 10 )
        expect( loading ).toBe( false )
    })
})