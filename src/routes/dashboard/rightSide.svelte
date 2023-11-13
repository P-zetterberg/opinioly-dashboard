<script>
  import {
    widgetData,
    updateDataItemKey,
    updateItem,
    updateArrayOrder,
  } from "./dashBoardStore.js"
  import Sortable from "sortablejs/modular/sortable.complete.esm.js?module"
  import ComponentRenderer from "./componentRenderer.svelte"
  import { onMount } from "svelte"
  let foo
  export let element = null
  onMount(() => {
    Sortable.create(foo, {
      group: {
        name: "foo",
        put: true,
        pull: false,
      },
      handle: ".handle",
      animation: 200,
      store: {
        set: function (sortable) {
          var order = sortable.toArray()
          updateArrayOrder(order, element)
        },
      },
    })
  })
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
</svelte:head>
<div class="settings__container">
  <p class="badge title">Settings</p>
  <div class="settings">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto?
    Animi molestias illum possimus quis laudantium ab, quos accusantium autem
    facere maxime officia ipsam officiis ipsum veritatis, pariatur nostrum
    temporibus?
  </div>
</div>
<div class="elements" bind:this={foo}>
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

  {#each $widgetData.data as item, i (item.id)}
    <div class="item" data-id={item.id}>
      <ComponentRenderer {i} {...item} {element} />
    </div>
  {/each}
</div>

<style lang="scss">
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
  .settings__container {
    margin-top: 2em;
  }
  .elements {
    padding-top: 2em;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
    //box-shadow: 5px 4px 3px -1px #f3f3f3, -5px 2px 3px -1px #f3f3f3;
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
