import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});