import { derived } from "svelte/store";

import todos from "./store";

export const all = derived(todos, $todos => $todos);
export const completed = derived(todos, $todos => $todos.filter(({status}) => status === "completed"));
export const pending = derived(todos, $todos => $todos.filter(({status}) => status === "pending"));
