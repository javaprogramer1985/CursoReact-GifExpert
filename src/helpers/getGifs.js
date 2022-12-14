export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rEvjzplSAS2Mda5nzMv8vPefxMfR0K33&q=${category}&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(gif => {
        return{
            id: gif.id,
            title:gif.title,
            url: gif.images.downsized_medium.url
        };
    });


    return gifs;
}
