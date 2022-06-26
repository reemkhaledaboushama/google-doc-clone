import { writable } from "svelte/store";

export const posts = writable([]);
export const timeout = writable(false);
export const EditorStore = writable(null);
