<script>
  import "../global.scss"
  import brandLogo from "../assets/opinioly_small_height.svg"
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&family=League+Gothic&family=Montserrat:wght@100;300&family=Poppins:wght@100;200;300;400;500;600;700;900&family=Roboto:wght@300;400;500;700;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<nav>
  <a href="/"
    ><img src={brandLogo} width="150" alt="brand logo" class="logo" /></a
  >
  <div class="nav__items">
    <a href="/">Home</a>
    <a href="/about">Pricing</a>
    <a href="/settings">Features</a>
  </div>
  <div class="nav__ctas">
    <a href="/login">Sign in</a>
    <a class="signup" href="/register">Sign up</a>
  </div>
</nav>

<slot />

<style lang="scss">
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
</style>
