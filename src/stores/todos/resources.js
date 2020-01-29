import {get} from "svelte/store";

import {database} from "../../firebase";
import user from "../session/store";

export default {
  add: (todo) =>
    database
      .collection("users")
      .doc(get(user).uid)
      .collection("todos")
      .add(todo),
  update: (todo) =>
    database
      .collection("users")
      .doc(get(user).uid)
      .collection("todos")
      .doc(todo.id)
      .update(todo),
  remove: (id) =>
    database
      .collection("users")
      .doc(get(user).uid)
      .collection("todos")
      .doc(id)
      .delete(),
};
