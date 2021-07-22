export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=IQ3jvQOYNWqz2IlGHVhZvJXE2nOt1zB1`
    const res = await fetch(url)
    const { data } = await res.json()
    const gifs = await data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}
