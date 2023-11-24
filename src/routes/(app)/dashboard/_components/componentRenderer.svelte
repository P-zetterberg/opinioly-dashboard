<script>
  import Input from "./textArea.svelte"
  import Description from "./description.svelte"
  import Dropdown from "./dropdown.svelte"
  import { slide } from "svelte/transition"
  import { onMount } from "svelte"
  import { widgetData } from "../dashBoardStore.js"

  export let element
  export let type = ""
  export let msg = ""
  export let label = ""
  export let placeholder = ""
  export let required = false
  export let options = []
  export let name = ""
  export let id
  export let i

  let isOpen = false
  let propsForAll = {
    id,
  }
  let input = {
    ...propsForAll,
    label,
    placeholder,
    required,
  }
  let description = {
    ...propsForAll,
    msg,
  }
  let dropdown = {
    ...propsForAll,
    label,
    options,
    required,
  }
  let showMenu = false

  function handleDelete() {
    $widgetData.data = $widgetData.data.filter((item) => item.id !== id)
    element.refreshData(JSON.stringify({ data: $widgetData.data }), 2)
  }
  function handleAdd() {}
  // onMount(() => {
  //   if (i === 1) isOpen = true
  // })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label
  class="title badge handle"
  for="textarea"
  on:click={() => (isOpen = !isOpen)}
  >{name}
  <span class="material-symbols-outlined icon">
    {isOpen ? "expand_less" : "expand_more"}
  </span>
  <span
    role="button"
    on:keypress={() => (showMenu = !showMenu)}
    tabindex="0"
    on:click={(e) => {
      showMenu = !showMenu
      e.stopPropagation()
    }}
    class="material-symbols-outlined icon"
  >
    more_vert
  </span>
</label>
{#if showMenu}
  <div class="menu">
    <span on:click={handleDelete}>Delete element</span>
  </div>
{/if}

{#if isOpen}
  <div transition:slide class="shadow">
    <div class="row">
      {#if type === "textinput"}
        <Input {...input} {element} />
      {:else if type === "textarea"}
        <Input {...input} {element} />
      {:else if type === "dropdown"}
        <Dropdown {...dropdown} {element} />
      {:else}
        <Description {...description} {element} />
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  .badge {
    background: #f3f4f6;
    padding: 0.2em 0.5em;
    font-weight: 700;
    position: relative;

    .icon {
      position: absolute;
      right: 5px;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 150ms ease-in-out;
      height: 100%;

      &:nth-child(2) {
        right: 30px;
      }
      &:hover {
        opacity: 1;
      }
    }
    &:hover .icon:nth-child(1) {
      opacity: 1;
    }
  }
  .handle {
    cursor: move;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
    opacity: 1;
  }
  .row {
    display: flex;
    flex-direction: row;
    gap: 1em;
    flex-wrap: wrap;
    margin-top: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-bottom: 1em;
  }
  .menu {
    position: absolute;
    z-index: 999;
    height: auto;
    min-height: 200px;
    background: rgb(104, 104, 255);
    right: 17px;
  }
  // .shadow {
  //   box-shadow: 5px 4px 3px -1px #f3f3f3, -5px 2px 3px -1px #f3f3f3;
  // }
</style>
