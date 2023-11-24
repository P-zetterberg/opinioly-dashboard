<script>
  import {
    widgetData,
    updateDataItemKey,
    updateItem,
    updateArrayOrder,
    colorData,
    addVar,
  } from "../dashBoardStore"
  import { onMount } from "svelte"
  import "@melloware/coloris/dist/coloris.css"

  export let element

  onMount(async () => {
    const Coloris = (await import("@melloware/coloris")).default
    Coloris.init()
    Coloris({
      el: "#coloris-primary",
      defaultColor: "#c2ebd1",
      theme: "polaroid",
    })
    Coloris({
      el: "#coloris-error",
      defaultColor: "#DB3434",
      theme: "polaroid",
    })
    Coloris({
      el: "#coloris-text",
      defaultColor: "#000000",
      theme: "polaroid",
    })
    Coloris({
      el: "#coloris-submit-text",
      defaultColor: "#ffffff",
      theme: "polaroid",
    })
    Coloris({
      el: "#coloris-submit-color",
      defaultColor: "#000000",
      theme: "polaroid",
    })
  })
</script>

<div class="wrapper">
  <div class="flex-col">
    <label for="primary">Primary color</label>
    <input
      type="text"
      id="coloris-primary"
      class="input primary"
      value="#c2ebd1"
      on:input={(e) => addVar("--primary-color", e.target.value)}
    />
  </div>
  <div class="flex-col">
    <label for="error">Title color</label>
    <input
      type="text"
      id="coloris-error"
      class="input error"
      value="#000000"
      on:input={(e) => addVar("--primary-text", e.target.value)}
    />
  </div>
  <div class="flex-col">
    <label for="error">Submit color</label>
    <input
      type="text"
      id="coloris-submit-text"
      class="input error"
      value="#ffffff"
      on:input={(e) => addVar("--primary-button-text", e.target.value)}
    />
  </div>
  <div class="flex-col">
    <label for="error">Submit background</label>
    <input
      type="text"
      id="coloris-submit-color"
      class="input error"
      value="#000000"
      on:input={(e) => addVar("--primary-button", e.target.value)}
    />
  </div>

  <div class="flex-col">
    <label for="error">Error color</label>
    <input
      type="text"
      id="coloris-error"
      class="input error"
      value="#f05c5c"
      on:input={(e) => addVar("--error", e.target.value)}
    />
  </div>
</div>
<div class="wrapper">
  <div class="flex-col">
    <label for="title">Title</label>
    <input
      class="input"
      type="text"
      value={$widgetData.mainTitle}
      on:input={(e) => updateItem("mainTitle", e.target.value, element)}
    />
  </div>
  <div class="flex-col">
    <label for="button">Submit text</label>
    <input
      class="input"
      type="text"
      value={$widgetData.buttonText}
      on:input={(e) => updateItem("buttonText", e.target.value, element)}
    />
  </div>
  <div class="flex-col">
    <label for="button">Toggle text</label>
    <input
      class="input"
      type="text"
      value={$widgetData.toggleText}
      on:input={(e) => updateItem("toggleText", e.target.value, element)}
    />
  </div>
  <div class="flex-col radius">
    <label for="frame">Frame radius</label>
    <input
      id="frame"
      min="0"
      type="number"
      class="input"
      on:input={(e) => addVar("--frame-radius", e.target.value + "px")}
    />
  </div>
  <div class="flex-col radius">
    <label for="border">Element radius</label>
    <input
      id="border"
      min="0"
      type="number"
      class="input"
      on:input={(e) => addVar("--border-radius", e.target.value + "px")}
    />
  </div>
</div>

<style lang="scss">
  .input {
    width: 200px;
    border: 1px solid;
    border-radius: 0px;
    border-color: lightgrey;
    background: #ffffff;
    height: 32px;
    padding: 5px;
    transition: border-color ease-in 150ms;
    font-size: 14px;
    cursor: pointer;
  }
  input:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline: transparent;
  }
  .radius {
    input {
      width: 100px;
    }
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .primary,
  .error {
    width: 75px;
  }
  .wrapper {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
  }
</style>
