import { writable } from 'svelte/store';
import { API } from '$lib/api/setupApi';

interface AuthStore {
  token: string;
  isLoggedIn: boolean;
}

const initialValue: AuthStore = {
  token: localStorage.token || '',
  isLoggedIn: false
};

export const authStore = writable(initialValue);

authStore.subscribe((value) => {
  localStorage.setItem('token', value.token);
  API.defaults.headers.common.Authorization = `Bearer ${value.token}`;
})