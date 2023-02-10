const axios = require('axios').default;
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const URL = 'https://pixabay.com/api/';
const API_KEY = '32900359-edd26b1c87114d985dfba3f77';

export class FetchImg {
  constructor() {
    this.queryPage = 1;
    this.search = '';
    this.per_page = 40;
  }
  async getImg() {
    const options = {
      params: {
        key: API_KEY,
        q: this.search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: this.per_page,
        page: this.queryPage,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.get(URL, options);

    this.incrementPage();
    return response.data;
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}