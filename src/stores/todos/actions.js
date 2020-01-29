import api from "./resources";

export function add(todo) {
  return api.add({text: todo, status: "pending"});
}

export function toggle(id, status) {
  return api.update({id, status});
}

export function remove(id) {
  return api.remove(id);
}
