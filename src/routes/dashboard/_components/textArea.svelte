<script>
  import { updateDataItemKey } from "../dashBoardStore"
  export let label = ""
  export let required = false
  export let placeholder = ""
  export let i = 0
  export let name = ""
  export let element
</script>

<label class="title badge" for="textarea">{name}</label>
<div>
  <div class="row">
    <div class="row__item">
      <label for="textarea">Label</label>
      <input
        class="element"
        value={label}
        on:input={(e) => updateDataItemKey(i, "label", e.target.value, element)}
      />
    </div>
    <div class="row__item">
      <label for="textarea">Placeholder</label>
      <input
        class="element"
        value={placeholder}
        on:input={(e) =>
          updateDataItemKey(i, "placeholder", e.target.value, element)}
      />
    </div>
    <div class="required">
      <input
        type="checkbox"
        id="required{i}"
        name="required"
        bind:checked={required}
        on:change={(e) =>
          updateDataItemKey(i, "required", e.target.checked, element)}
      />
      <label for="required{i}"> Required</label>
    </div>
  </div>
</div>

<style lang="scss">
  .badge {
    opacity: 0.7;
    background: #e7e6e6;
    padding: 0.2em 0.5em;
    font-weight: 700;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
  }
  .element {
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
  .row {
    display: flex;
    flex-direction: row;
    gap: 1em;
    flex-wrap: wrap;
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
</style>
