import { writable } from 'svelte/store';

interface Queue {
  name: string;
  channels?: Array<Channel>;
  // channelCount: number;
}

interface Channel {
  id?: string;
}

type QueueStore = Array<Queue>

const stored = localStorage.getItem('queues');

const initialValue: QueueStore = stored ? JSON.parse(stored) : [];

export const queueStore = writable(initialValue);

queueStore.subscribe((value) => localStorage.setItem('queues', JSON.stringify(value)))