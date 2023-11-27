<script>
  import Input from "./textArea.svelte"
  import Description from "./description.svelte"
  import Dropdown from "./dropdown.svelte"
  import { slide } from "svelte/transition"
  import { onMount } from "svelte"
  import { widgetData } from "../dashBoardStore.js"
  import { clickOutside } from "$lib/clickOutside.js"

  export let element
  export let type = ""
  export let msg = ""
  export let label = null
  export let placeholder = ""
  export let required = false
  export let options = []
  export let name = ""
  export let id
  // export let i

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
  {#if label?.length || msg.length}-{/if}
  <span style="opacity:0.3;">{label ?? msg.slice(0, 20) + "..."}</span>

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
  <div
    class="menu"
    use:clickOutside
    on:click_outside={() => (showMenu = !showMenu)}
  >
    <button on:click={handleDelete}>
      <span class="material-symbols-outlined"> delete </span>
      <span>Delete {name}</span>
    </button>
  </div>
{/if}

<div class="shadow {isOpen ? 'show' : 'hide'}">
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
    height: fit-content;
    background: #f3f4f6;
    right: 65px;
    border: 1px solid lightgrey;
    box-shadow:
      0 2px 5px 0 rgba(0, 0, 0, 0.1),
      0 2px 3px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    button {
      all: unset;
      cursor: pointer;
      height: 30px;
      padding: 0.25em 0.5em;
      font-size: 14px;
      border-bottom: 1px solid lightgrey;
      background-color: #f3f4f6;
      display: flex;
      gap: 0.25em;
      width: auto;
      max-width: 213px;
      &:hover {
        background-color: #f0f0f0;
      }
      &:last-child {
        border-bottom: none;
      }
    }
    span {
      align-self: center;
      opacity: 0.7;
    }
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  // .shadow {
  //   box-shadow: 5px 4px 3px -1px #f3f3f3, -5px 2px 3px -1px #f3f3f3;
  // }
</style>
