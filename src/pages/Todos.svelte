<script>
  import {all} from "../stores/todos/state";
  import {add} from "../stores/todos/actions";

  import Todo from "../components/Todo.svelte";

  let text = "";
</script>

<style>
  input {
    display: block;
  }
</style>

<ul>
  {#each $all as todo}
    <Todo {...todo} />
  {/each}
</ul>

<input bind:value={text} />

<button on:click={add}>Add Task</button>
