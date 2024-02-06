import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export async function getImages(q = '', page = 1) {
  const { data } = await axios.get('/api/', {
    params: {
      key: '40986310-b3196d090df98d57789873b7a',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q,
      page,
    },
  });
  return data;
}
