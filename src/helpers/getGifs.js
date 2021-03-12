export const getGifs = async (category) => {
    const api_key = 'Zp5XItERb7XjHpxgP4z2UF9ysJJa1Zug';
    const url = 'https://api.giphy.com/v1/gifs/search';
    const query = `?api_key=${api_key}&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(`${url}${query}`);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs
  };