import {derived} from "svelte/store";
import {collectionData} from "rxfire/firestore";

import {database} from "../../firebase";

import user from "../session/store";

import {remove, toggle} from "./actions";

export default derived(
  user,
  ($user, set) => {
    if (!$user) return set([]);

    collectionData(
      database
        .collection("users")
        .doc($user.uid)
        .collection("todos"),
      "id",
    ).subscribe((todos) =>
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
