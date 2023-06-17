import axios from 'axios';

const API_KEY = '35725136-aa5e091c3da43d100e1dd6165';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

export const fetchImages = async (inputValue, page) => {
  try {
    const params = {
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: PER_PAGE,
    };

    const queryString = new URLSearchParams(params).toString();
    const imageUrl = `${BASE_URL}?${queryString}`;

    const response = await axios.get(imageUrl);
    return response.data;
  } catch (error) {
    throw new Error(
      'Error. The requested page can not be found on the website server.'
    );
  }
};
