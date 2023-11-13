<script>
  import TextArea from "./_components/textArea.svelte"
  import { slide } from "svelte/transition"
  import { onMount } from "svelte"

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
  let textArea = {
    id,
    label,
    placeholder,
    required,
    name,
    element,
  }
  onMount(() => {
    if (i === 0) isOpen = true
  })
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
  </span></label
>
{#if isOpen}
  <div transition:slide class="shadow">
    <div class="row">
      {#if type === "textinput"}
        <!-- <TextInput {label} {placeholder} {required} {i} /> -->
      {:else if type === "textarea"}
        <TextArea {...textArea} />
        <!-- <TextArea {i} {label} {placeholder} {required} {name} {element} /> -->
      {:else if type === "dropdown"}
        <!-- <Dropdown {label} {required} {options} {i} /> -->
      {:else}
        <!-- <Description {msg} /> -->
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
    margin-top: 0.5em;
    padding-left: 0.5em;
    padding-bottom: 0.5em;
  }
  // .shadow {
  //   box-shadow: 5px 4px 3px -1px #f3f3f3, -5px 2px 3px -1px #f3f3f3;
  // }
</style>
