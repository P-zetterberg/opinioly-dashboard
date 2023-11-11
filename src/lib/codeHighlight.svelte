<script>
  // @ts-ignore
  import Prism from "prismjs"

  export let code = ""
  export let type = "HTML"

  function copyToClipboard() {
    navigator.clipboard
      .writeText(code)
      .then(function () {
        console.log("Code copied to clipboard")
      })
      .catch(function (err) {
        console.error("Copy to clipboard failed: ", err)
      })
  }
</script>

<div class="code-container">
  <span class="lang">{type}</span>
  <button on:click={copyToClipboard} class="copy-button">Copy</button>
  <pre class="language-html"><code class="language-html test">
    {@html Prism.highlight(code, Prism.languages["html"])}
</code></pre>
</div>

<style lang="scss">
  .code-container {
    position: relative;
    font-size: 12px;
    width: 400px;
    code {
      // white-space: pre-wrap;
      white-space: pre-line;
      overflow: unset;
    }
  }
  .lang {
    position: absolute;
    left: 10px;
    top: 10px;
    color: #fff;
    pointer-events: none;
  }
  .copy-button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: rgba(128, 128, 128, 0.247);
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  .copy-button:hover {
    background-color: rgba(128, 128, 128, 0.347);
  }
  pre {
    border-radius: 0;
  }
</style>
