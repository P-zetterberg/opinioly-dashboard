<script>
  import { updateDataItemKey } from "../dashBoardStore"

  export let label = ""
  export let required = false
  export let placeholder = ""
  export let id = 0
  export let element
</script>

<div class="row__item">
  <label for="textarea">Label</label>
  <input
    class="input"
    value={label}
    on:input={(e) => updateDataItemKey(id, "label", e.target.value, element)}
  />
</div>
<div class="row__item">
  <label for="textarea">Placeholder</label>
  <input
    class="input"
    value={placeholder}
    on:input={(e) =>
      updateDataItemKey(id, "placeholder", e.target.value, element)}
  />
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
    height: 32px;
    padding: 5px;
    transition: border-color ease-in 150ms;
    font-size: 14px;

    &.error {
      border-left: 5px solid red;
      color: red;

      &::placeholder {
        opacity: 1;
      }
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

  .row__item {
    display: flex;
    flex-direction: column;
  }
  .required {
    align-self: flex-end;

    label {
      cursor: pointer;
    }
  }
  .closed {
    display: none;
  }
</style>
