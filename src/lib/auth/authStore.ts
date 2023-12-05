import { writable } from 'svelte/store';
import { API } from '$lib/api/setupApi';
import { browser } from '$app/environment';

interface AuthStore {
	token: string;
	isLoggedIn: boolean;
}

const initialValue: AuthStore = {
	token: (browser && localStorage.token) || '',
	isLoggedIn: false,
};

export const authStore = writable(initialValue);

authStore.subscribe((value) => {
	if (browser) {
		localStorage.setItem('token', value.token);
		API.defaults.headers.common.Authorization = `Bearer ${value.token}`;
	}
});
