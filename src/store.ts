import { writable } from 'svelte/store';
import type { Counter } from './utils/types';

export const counters = writable<Counter[]>([]);
