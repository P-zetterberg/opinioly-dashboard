<script>
  export let data
  let feedbacks = data.widget.data[0].feedbacks
</script>

<h1>{data.widget.name}</h1>
{#each feedbacks as { feedback }}
  <p>{feedback.feedback.label}</p>
  <p>{feedback.feedback.value}</p>
{/each}
