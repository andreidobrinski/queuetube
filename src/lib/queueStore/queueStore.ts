import { writable } from 'svelte/store';
import type { Queues } from './types';

const stored = localStorage.getItem('queues');

const initialValue: Queues = stored ? JSON.parse(stored) : {};

export const queueStore = writable(initialValue);

queueStore.subscribe((value) => localStorage.setItem('queues', JSON.stringify(value)))