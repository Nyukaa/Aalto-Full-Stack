<script>
  import Counter from "$lib/components/Counter.svelte";
  import Hello from '$lib/components/Hello.svelte';
  import QuestionAndAnswer from '$lib/components/QuestionAndAnswer.svelte';
  let qa = {
    question: "Can this work?",
    answer: "Yes it can!",
  };
</script>
<Hello />
<Counter />
<QuestionAndAnswer {...qa} />
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
