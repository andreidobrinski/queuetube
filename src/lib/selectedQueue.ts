import { writable } from 'svelte/store';

const initialValue = '';

export const selectedQueue = writable(initialValue);
