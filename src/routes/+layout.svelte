<script>
  import "../global.scss"
  import brandLogo from "../assets/opinioly_small_height.svg"
  import { userData } from "../../src/userStore.js"
  import { onMount } from "svelte"

  export let data

  async function getUserData() {
    const response = await fetch(
      `http://localhost:3000/auth/get/${data?.session?.user?.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    let res = await response.json()
    $userData = res
  }

  onMount(() => {
    if ($userData) return
    if (data?.session) getUserData()
  })
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&family=League+Gothic&family=Montserrat:wght@100;300&family=Poppins:wght@100;200;300;400;500;600;700;900&family=Roboto:wght@300;400;500;700;900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
</svelte:head>
<nav>
  <a href={!data?.session ? "/" : "/dashboard"}
    ><img src={brandLogo} width="150" alt="brand logo" class="logo" /></a
  >
  <div class="nav__items">
    {#if !data?.session}
      <a href="/">Home</a>
      <a href="/pricing">Pricing</a>
      <a href="/features">Features</a>
      <a href="/dashboard">Dashboard</a>
    {/if}
  </div>
  {#if data?.session}
    <form action="/logout" method="POST">
      <button
        style="height:25px ;"
        type="submit"
        on:click={() => ($userData = null)}>Logout</button
      >
    </form>
    <h4 class="welcome">
      Profile
      <span class="material-symbols-outlined icon"> expand_more </span>
    </h4>
  {:else}
    <div class="nav__ctas">
      <a href="/login">Sign in</a>
      <a class="signup" href="/register">Sign up</a>
    </div>
  {/if}
</nav>

<slot />

<style lang="scss">
  h4 {
    margin: 0;
  }
  nav {
    display: flex;
    align-items: center;
    padding: 1rem 0rem;
    background-color: var(--color-primary);
    color: var(--color-white);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1rem;

    a {
      transition: color 0.2s ease-in-out;
      text-decoration: none;
      color: rgba(22, 22, 22, 0.699);
      &:hover {
        color: black;
      }
    }
  }
  .logo {
    cursor: pointer;
  }
  .nav__items {
    display: flex;
    gap: 2em;
    margin: 0 auto;
  }
  .nav__ctas {
    display: flex;
    gap: 2em;

    a:first-child {
      align-self: center;
    }
  }
  .signup {
    background-color: #c2ebd1;
    padding: 0.5em 1em;
    color: black;
    &:hover {
      opacity: 0.85;
    }
  }
  .welcome {
    display: flex;
    cursor: pointer;
  }
</style>
