import { writable } from 'svelte/store';
import type { Counter } from './utils/types';

//todo:ts化
export const counters = writable<Counter[]>([]);
