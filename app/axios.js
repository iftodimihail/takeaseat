import axios from '../node_modules/axios';
import config from './config';

export default axios.create({
  baseURL: `${config.apiUrl}`
});
