<script lang="ts">
  import { goto } from "$app/navigation"

  let email = "pontus@zetterberg.io"
  let password = "qew123w2"
  let message = ""
  let firstname = ""
  let lastname = ""

  async function handleRegister() {
    const credentials = { email, password, firstname, lastname }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

      if (response.ok) {
        goto("/new-url")
      } else {
      }
    } catch (error) {}
  }
</script>

<main>
  <div class="form__container">
    <form>
      <h1>Create account</h1>
      <div class="form__name">
        <div>
          <label for="firstname">First Name *</label>
          <input
            class="form__input"
            required
            type="text"
            id="firstname"
            bind:value={firstname}
          />
        </div>
        <div>
          <label for="lastname">Last Name *</label>
          <input
            class="form__input"
            required
            type="text"
            id="lastname"
            bind:value={lastname}
          />
        </div>
      </div>
      <div class="form__item">
        <label for="email">Email *</label>
        <input
          class="form__input"
          required
          type="email"
          id="email"
          bind:value={email}
        />
      </div>

      <div class="form__item">
        <label for="password">Password </label>
        <input
          class="form__input"
          required
          type="password"
          id="password"
          bind:value={password}
        />
      </div>

      <button class="submit" on:submit={handleRegister}>Sign up</button>
    </form>
    <span class="login__redirect"
      >Already got an account? <a href="/login">Login here</a></span
    >
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      gap: 1em;
    }
  }
  .form__container {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 10px;
    width: 400px;
    height: 500px;
    background-color: #fcfcfc;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  h1 {
    margin-bottom: 0.5em;
  }
  .form__name {
    display: flex;
    gap: 0.5em;
    input {
      margin-top: 0.2em;
    }
    label {
      margin-bottom: 0;
    }
    div {
      display: flex;
      flex-direction: column;
      max-width: calc(50% - 0.25em);
    }
  }
  .form__item {
    display: flex;
    flex-direction: column;
  }
  .form__input {
    box-sizing: border-box;
    border: 1px solid;
    border-radius: 0px;
    border-color: lightgrey;
    background: #ffffff;
    height: 45px;
    padding: 5px;
    transition: border-color ease-in 150ms;
    border-radius: var(--border-radius);
    font-size: 14px;
  }
  label {
    font-weight: 600;
    align-self: start;
    margin-bottom: 0.2em;
  }
  input:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline: transparent;
  }
  .submit {
    all: unset;
    width: 100%;
    color: var(--primary-button-text, black);
    background-color: var(--primary-button, #c2ebd1);
    height: 45px;
    border-radius: var(--border-radius);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 600;
    cursor: pointer;
    transition: background-color ease-in 150ms, opacity ease-in 150ms;
    text-align: center;
    min-height: 45px;
    transition: scale ease-in 150ms;
    &:hover {
      background-color: var(--primary-button, #c2ebd1);
      opacity: 0.85;
    }
    &:disabled {
      background-color: var(--primary-button, #c2ebd1);
      opacity: 0.3;
      cursor: not-allowed;
    }
    &:active:not(:disabled) {
      scale: 1.02;
    }
  }
  .login__redirect {
    text-align: center;

    a {
      opacity: 1;
      color: rgb(22, 22, 22);
      font-weight: 600;
    }
  }
</style>
