import { writable } from 'svelte/store';

//todo:ts化
export const counters = writable([{ title: 'Counter 1', count: 0 }]);
