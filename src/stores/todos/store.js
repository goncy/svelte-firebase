import {derived} from "svelte/store";

import user from "../session/store";

import {remove, toggle} from "./actions";
import api from "./resources";

export default derived(
  user,
  ($user, set) => {
    if (!$user) return set([]);

    api.onChange((todos) =>
      set(
        todos.map((todo) => ({
          ...todo,
          remove: () => remove(todo.id),
          toggle: (status) => toggle(todo.id, status),
        })),
      ),
    );
  },
  [],
);
