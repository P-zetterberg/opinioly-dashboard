<script>
  import Waves from "../../assets/waves.svelte"
  import CodeHighlight from "./codeHighlight.svelte"
  let id = "b303f712-1b7c-4165-a054-b733be36c996"
  let styles =
    "--primary-color:red;--primary-color:red;--primary-color:red;--primary-color:red;--primary-color:red;--primary-color:red;"
  const code = `
  <op-widget 
        widgetId="${id}"
        styles="${styles}">
  </op-widget>`
</script>

<main>
  <div class="form__container">
    <h1>Dashboard</h1>
    <CodeHighlight {code} />
  </div>
</main>

<!-- <Waves /> -->

<style lang="scss">
  @import "https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-okaidia.min.css";
  main {
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: relative;
  }

  .form__container {
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 20px;
    width: 100%;
    height: 500px;
    // background-color: #fcfcfc;
    display: flex;
    flex-direction: column;
    margin-top: 5em;
  }
</style>
