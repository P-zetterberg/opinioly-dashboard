<script>
  import { updateDataItemKey } from "../dashBoardStore"

  export let id
  export let element
  export let label
  export let options = []
  export let required = false

  function updateArray(index) {
    const newArray = [...options]
    if (index == 0) {
      newArray.push("Example option")
    } else newArray.splice(index, 1)

    options = newArray
    updateDataItemKey(id, "options", options, element)
  }
  function handleInputChange(index, event) {
    options[index] = event.target.value
    updateDataItemKey(id, "options", [...options], element)
  }
</script>

<div class="row__item">
  <label for="textarea">Label</label>
  <input
    class="input"
    id="dropdown"
    value={label}
    on:input={(e) => updateDataItemKey(id, "label", e.target.value, element)}
  />
</div>
<div class="row__item">
  <label for="textarea">Options</label>
  <div class="flex">
    <div class="inputs">
      {#each options as option, i (i)}
        <div class="flex">
          <input
            class="input"
            id="dropdown"
            value={option}
            on:input={(e) => handleInputChange(i, e)}
          />
          <div class="add__option {i <= 0 ? '' : 'remove'}">
            <span
              role="button"
              tabindex="0"
              on:keypress={updateArray(i)}
              on:click={updateArray(i)}
              class="material-symbols-outlined icon"
            >
              {i <= 0 ? "add_circle" : "remove_circle"}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="required">
  <input
    type="checkbox"
    id="required{id}"
    name="required"
    bind:checked={required}
    on:change={(e) =>
      updateDataItemKey(id, "required", e.target.checked, element)}
  />
  <label for="required{id}"> Required</label>
</div>

<style lang="scss">
  .input {
    border: 1px solid;
    border-radius: 0px;
    border-color: lightgrey;
    background: #ffffff;
    padding: 5px;
    transition: border-color ease-in 150ms;
    font-size: 14px;

    // &.error {
    //   border-left: 5px solid red;
    //   color: red;

    //   &::placeholder {
    //     opacity: 1;
    //   }
    // }
  }
  .row__item {
    display: flex;
    flex-direction: column;
  }
  .required {
    align-self: flex-end;
    margin-left: 0.5em;
    margin-top: 0.3em;

    label {
      cursor: pointer;
    }
  }
  input:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline: transparent;
  }
  input[type="checkbox"] {
    accent-color: #c2ebd1;
    cursor: pointer;
  }
  .add__option {
    margin-left: 0.2em;
    display: flex;
    gap: 0.2em;
    color: black;
    opacity: 0.3;
    margin-top: 0.3em;
    height: min-content;
    cursor: pointer;
    transition:
      rotate 200ms ease-in-out,
      opacity 200ms ease-in-out;
    &.remove:hover {
      rotate: 180deg;
      opacity: 0.5;
    }
    &:hover {
      rotate: 90deg;
      opacity: 0.5;
    }
  }
  .flex {
    display: flex;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
    .flex {
      &:last-child .input {
        border-bottom: 1px solid lightgrey;
        &:focus {
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
</style>
