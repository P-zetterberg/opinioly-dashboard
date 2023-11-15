<script>
  import Waves from "../assets/waves.svelte"
  export let data
</script>

{#if data.session}
  <h1>Welcome {data.session.user.email}</h1>
{:else}
  <h1>Welcome to SvelteKit</h1>
{/if}

<Waves />

<style>
</style>
