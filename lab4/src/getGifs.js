export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=5SnO1XkR3Rn18kPyvGX7ZgDxz4ncm5on&limit=10&q=${encodeURIComponent(category)}`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title: title ?? 'Gif',
    url: images?.downsized_medium?.url
  })).filter(g => !!g.url);

  return gifs;
}