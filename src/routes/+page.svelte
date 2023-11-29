<script>
  import { userData } from "../userStore"
  export let data
</script>

{#if data.session}
  <h1>Welcome logged in</h1>
{:else}
  <h1>Welcome to SvelteKit</h1>
{/if}

<style>
</style>
