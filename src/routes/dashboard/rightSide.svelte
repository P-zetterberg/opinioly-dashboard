<script>
  import {
    widgetData,
    updateDataItemKey,
    updateItem,
  } from "./dashBoardStore.js"
  /**
   * @type {null}
   */
  export let element = null
</script>

<div class="elements">
  <div class="item">
    <label for="desc">Description</label>
    <textarea
      spellcheck="false"
      class="element"
      id="desc"
      value={$widgetData.data[0].msg}
      on:input={(e) => updateDataItemKey(0, "msg", e.target.value, element)}
    />
  </div>

  <div class="item">
    <label for="textinput">{$widgetData.data[2].label}</label>
    <input
      class="element"
      id="textinput"
      type="text"
      value={$widgetData.data[2].placeholder}
      on:input={(e) =>
        updateDataItemKey(2, "placeholder", e.target.value, element)}
    />
  </div>
  <div class="item">
    <label for="textarea">{$widgetData.data[3].label}</label>
    <div>
      <input
        type="checkbox"
        id="required"
        name="vehicle1"
        bind:checked={$widgetData.data[3].required}
        on:change={(e) =>
          updateDataItemKey(3, "required", e.target.checked, element)}
      />
      <label for="required"> Required</label>
    </div>
  </div>
  <div class="item">
    <input
      class="element"
      type="text"
      value={$widgetData.buttonText}
      on:input={(e) => updateItem("buttonText", e.target.value, element)}
    />
  </div>
</div>

<style lang="scss">
  .elements {
    margin-top: 2em;
  }
  .item {
    display: flex;
    flex-direction: column;
  }
  .input__container {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 600;
      align-self: start;
    }
  }
  .element {
    border: 1px solid;
    border-radius: 0px;
    border-color: lightgrey;
    background: #ffffff;
    height: 45px;
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
