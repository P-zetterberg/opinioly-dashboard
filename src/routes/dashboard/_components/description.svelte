<script>
  import { updateDataItemKey } from "../dashBoardStore"

  export let id
  export let element
  export let msg
</script>

<div class="row__item">
  <textarea
    spellcheck="false"
    class="input"
    id="desc"
    value={msg}
    on:input={(e) => updateDataItemKey(id, "msg", e.target.value, element)}
  />
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
    width: 100%;
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
  textarea {
    border: none;
    border-radius: var(--border-radius);
    width: 100%;
    resize: vertical;
    min-height: 100px;
    font-size: 14px;
    font-weight: 300;
  }
  textarea:focus {
    outline: transparent;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
</style>
