<script>
  import {fade, fly} from "svelte/transition";

  export let text;
  export let status;
  export let remove;
  export let toggle;

  $: completed = status === "completed";
</script>

<style>
  .completed {
    text-decoration: line-through;
    color: green;
  }
</style>

<li in:fly={{x: 900, duration: 500}}>
  <span class:completed>{text}</span>

  {#if completed}
    <button on:click={() => toggle('pending')}>❌</button>
  {:else}
    <button on:click={() => toggle('completed')}>✅</button>
  {/if}

  <button on:click={remove}>🗑</button>
</li>
