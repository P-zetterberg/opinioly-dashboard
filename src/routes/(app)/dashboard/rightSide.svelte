<script>
  import {
    widgetData,
    updateDataItemKey,
    updateItem,
    updateArrayOrder,
    colorData,
    addVar,
  } from "./dashBoardStore.js"
  import Sortable from "sortablejs/modular/sortable.complete.esm.js?module"
  import ComponentRenderer from "./_components/componentRenderer.svelte"
  import { onMount } from "svelte"
  import Settings from "./_components/settings.svelte"

  let foo
  export let element = null
  onMount(async () => {
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

<div class="settings__container">
  <p class="badge title">Settings</p>
  <div class="settings">
    <Settings {element} />
  </div>
</div>
<div class="elements" bind:this={foo}>
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
  }
  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #dbdee4;
    //box-shadow: 5px 4px 3px -1px #f3f3f3, -5px 2px 3px -1px #f3f3f3;
    border-top: none;
    &:first-child {
      border-top: 1px solid #dbdee4;
    }
  }
  .settings {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
  }
</style>
