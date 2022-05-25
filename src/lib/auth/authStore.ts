import { writable } from 'svelte/store';

interface AuthStore {
  token: string;
  isLoggedIn: boolean;
}

const initialValue: AuthStore = {
  token: localStorage.token || '',
  isLoggedIn: false
};

export const authStore = writable(initialValue);

authStore.subscribe((value) => localStorage.setItem('token', value.token))