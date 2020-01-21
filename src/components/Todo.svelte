<script>
  import {fade, fly} from "svelte/transition";
  
  export let text;
  export let status;
  export let remove;
  export let toggle;
  
  $: complete = status === "completed"
</script>

<li in:fly="{{x: 900, duration: 500}}">
  <span class:complete>{text}</span>

  {#if complete}
    <button on:click={() => toggle("pending")}>
      ❌
    </button>
  {:else}
  <button on:click={() => toggle("completed")}>
      ✅
    </button>
  {/if}

  <button on:click={remove}>
    🗑
  </button>
</li>

<style>
  .complete {
    text-decoration: line-through;
    color: green;
  }
</style>