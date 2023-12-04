<script>
  export let data

  let widgets = data.widgets
</script>

<main>
  <h1>Dashboard</h1>
  <div class="container">
    <div class="left__panel"></div>
    <div class="right__panel">
      {#each widgets as widget}
        <a href={`dashboard/widget/${widget.name}`}>{widget.name}</a>
      {/each}
    </div>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: relative;
  }
  .container {
    display: flex;
    gap: 1em;
  }
  .right__panel {
    position: relative;
    width: 100%;
    min-width: 432px;
    background-color: #fcfcfc;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-shadow:
      0 2px 10px 0 rgba(0, 0, 0, 0.1),
      0 2px 5px 0 rgba(0, 0, 0, 0.2);
    height: 100%;
    max-height: 630.6px;
    overflow-y: auto;
    height: auto;
  }
  h1 {
    margin-top: 0.5em;
  }
  .left__panel {
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 20px;
    width: 185px;
    height: 630.6px;
    background-color: #fcfcfc;
    display: flex;
    flex-direction: column;
    padding: 1em;
    box-shadow:
      0 2px 10px 0 rgba(0, 0, 0, 0.1),
      0 2px 5px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    flex-shrink: 0;
  }
  .badge {
    position: absolute;
    top: 5px;
    margin: 0;
    left: 5px;
    opacity: 0.7;
    background: #e7e6e6;
    padding: 0.2em 0.5em;
    font-weight: 700;
  }
</style>
