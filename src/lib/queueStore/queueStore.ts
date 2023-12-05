import { writable } from 'svelte/store';
import type { Queues } from './types';
import { browser } from '$app/environment';

const stored = browser && localStorage.getItem('queues');

const initialValue: Queues = stored ? JSON.parse(stored) : {};

export const queueStore = writable(initialValue);

queueStore.subscribe((value) => {
	if (browser) {
		localStorage.setItem('queues', JSON.stringify(value));
	}
});
