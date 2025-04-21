<script>
  import Hello from "$lib/components/Hello.svelte";
  import QuestionAndAnswer from "$lib/components/QuestionAndAnswer.svelte";

  let qa = {
    question: "Can this work?",
    answer: "Yes it can!",
  };
</script>

<Hello />
<QuestionAndAnswer {...qa} />
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>