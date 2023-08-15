
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BEcVbXJr1N0D9VWK40WPok8LYdsKizEY`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_height_small.url,
        };
    });

    return gifs;
};
