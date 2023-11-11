<script>
  import {
    widgetData,
    updateDataItemKey,
    updateItem,
  } from "./dashBoardStore.js"
  import { flip } from "svelte/animate"
  import { dndzone } from "svelte-dnd-action"
  import ComponentRenderer from "./componentRenderer.svelte"
  import { onMount } from "svelte"

  export let element = null
  onMount(() => {})
</script>

<div class="elements">
  <!-- <div class="item">
    <label for="desc">Description</label>
    <textarea
      spellcheck="false"
      class="element"
      id="desc"
      value={$widgetData.data[0].msg}
      on:input={(e) => updateDataItemKey(0, "msg", e.target.value, element)}
    />
  </div> -->
  {#each $widgetData.data as item, i (i)}
    <div class="item">
      <ComponentRenderer {...item} {element} />
    </div>
  {/each}
</div>

<style lang="scss">
  .elements {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
  .item {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
    // background-color: #f3f4f6;
    // box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    padding-left: 1em;
    border-left: 5px solid #edecec;
    padding-bottom: 1em;
  }

  .input__container {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 600;
      align-self: start;
    }
  }

  textarea {
    border: none;
    border-radius: var(--border-radius);
    width: 100%;
    resize: vertical;
    min-height: 75px;
    font-size: 14px;
    font-weight: 300;
  }
  textarea:focus {
    outline: transparent;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
</style>
