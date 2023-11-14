<script>
  import Waves from "../../assets/waves.svelte"
  import RightSide from "./rightSide.svelte"
  import { widgetData } from "./dashBoardStore.js"

  let element
  let id = "b303f712-1b7c-4165-a054-b733be36c996"
  let styles =
    "--primary-color:red;--primary-color:red;--primary-color:red;--primary-color:red;--primary-color:red;--primary-color:red;"
  const URL = "http://localhost:3000/widget/opinioly.js"
  const script = `<script defer src=${URL}>
    <${"/"}script>`
  const code = `
  <op-widget
        widgetId="${id}"
        styles="${styles}">
  </op-widget>`
</script>

<svelte:head>
  <title>Opinioly | Dashboard - New widget</title>
  <script async src={URL}></script>
</svelte:head>

<main>
  <h1>Dashboard</h1>
  <div class="container">
    <div class="left__panel">
      <span class="badge">Preview</span>
      <opinioly-widget
        bind:this={element}
        type="web"
        widgetId="214a858e-aa49-4165-9bc6-da06c1136755"
        webData={JSON.stringify($widgetData)}
      />

      <!-- <CodeHighlight type="Script" code={script} />
      <CodeHighlight {code} /> -->
    </div>
    <div class="right__panel">
      <RightSide {element} />
    </div>
  </div>
</main>

<Waves />

<style lang="scss">
  @import "https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-okaidia.min.css";
  main {
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: relative;
  }
  .container {
    display: flex;
    gap: 1em;
  }
  .right__panel {
    position: relative;
    width: 100%;
    min-width: 432px;
    background-color: #fcfcfc;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    height: 100%;
    max-height: 630.6px;
    overflow-x: scroll;
  }
  h1 {
    margin-top: 1em;
  }
  .left__panel {
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 20px;
    width: fit-content;
    height: fit-content;
    background-color: #fcfcfc;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    position: relative;
  }
  .badge {
    position: absolute;
    top: 5px;
    margin: 0;
    left: 5px;
    opacity: 0.7;
    background: #e7e6e6;
    padding: 0.2em 0.5em;
    font-weight: 700;
  }
  opinioly-widget {
    margin-top: 2em;
  }
  opinioly-widget::part(main) {
    position: static;
    box-shadow: none;
  }
  opinioly-widget::part(toggle) {
    position: static;
    display: block;
    margin: 1em 0;
    margin-left: auto;
    margin-bottom: 0.6em;
  }
</style>
