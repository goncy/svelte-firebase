<script>
  import {fly} from "svelte/transition";

  export let text;
  export let status;
  export let remove;
  export let toggle;

  export const id = null;

  const animation = {x: 900, duration: 500}

  $: completed = status === "completed";
</script>

<style>
  .completed {
    text-decoration: line-through;
    color: green;
  }
</style>

<li in:fly={animation} out:fly={animation}>
  <span class:completed>{text}</span>

  {#if completed}
    <button on:click={() => toggle('pending')}>❌</button>
  {:else}
    <button on:click={() => toggle('completed')}>✅</button>
  {/if}

  <button on:click={remove}>🗑</button>
</li>
