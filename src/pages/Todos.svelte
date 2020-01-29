<script>
  import {all} from "../stores/todos/state";
  import {add} from "../stores/todos/actions";

  import Todo from "../components/Todo.svelte";

  let text = "";

  function handleAdd(e) {
    e.preventDefault();

    add(text);
    
    text = "";
  }
</script>

<style>
  input {
    display: block;
  }
</style>

<ul>
  {#each $all as todo (todo.id)}
    <Todo {...todo} />
  {/each}
</ul>

<form on:submit={handleAdd}>
  <input bind:value={text} />

  <button on:click={handleAdd}>Add Task</button>
</form>
