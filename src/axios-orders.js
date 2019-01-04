import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portfolio-chenfeng.firebaseio.com/'
});

export default instance;
