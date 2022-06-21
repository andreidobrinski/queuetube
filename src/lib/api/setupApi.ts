import axios from 'axios';
import { apiErrorStore } from './error/apiErrorStore';

export const API = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

API.interceptors.request.use(
  response => response,
  () => apiErrorStore.set(true)
);