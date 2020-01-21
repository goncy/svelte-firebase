<script>
  import user from "./stores/session/store"
  import {logout} from "./stores/session/actions.js"

  import Profile from "./components/Profile.svelte"

  import Todos from "./pages/Todos.svelte"
  import Login from "./pages/Login.svelte"
</script>

{#if $user}
  <Profile displayName={$user.displayName} photoURL={$user.photoURL} uid={$user.uid} />
  <button on:click={logout}>Logout</button>
  <hr>
  <Todos uid={$user.uid} />
{:else}
  <Login />
{/if}