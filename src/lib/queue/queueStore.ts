import { writable } from 'svelte/store';

interface Queues {
  [key: string]: Queue
}

interface Queue {
  name: string;
  channels: {
    [key: string]: Channel
  };
}

interface Channel {
  id: string;
  name: string;
}

const stored = localStorage.getItem('queues');

const initialValue: Queues = stored ? JSON.parse(stored) : {};

export const queueStore = writable(initialValue);

queueStore.subscribe((value) => localStorage.setItem('queues', JSON.stringify(value)))