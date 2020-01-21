import todos from "./store";
import { derived } from "svelte/store";

import api from "./resources";

export function add(todo) {
	return api.add(todo);
}

export function toggle(id, status) {
	return api.update({id, status});
}

export function remove(id) {
	return api.remove(id);
}
