<script>
  import TextArea from "./_components/textArea.svelte"
  export let element
  export let type = ""
  export let msg = ""
  export let label = ""
  export let placeholder = ""
  export let required = false
  export let options = []
  export let name = ""
  export let i
</script>

<TextArea {i} {label} {placeholder} {required} {name} {element} />
{#if type === "textinput"}
  <!-- <TextInput {label} {placeholder} {required} {i} /> -->
{:else if type === "textarea"}
  <!-- <TextArea {i} {label} {placeholder} {required} {name} {element} /> -->
{:else if type === "dropdown"}
  <!-- <Dropdown {label} {required} {options} {i} /> -->
{:else}
  <!-- <Description {msg} /> -->
{/if}
