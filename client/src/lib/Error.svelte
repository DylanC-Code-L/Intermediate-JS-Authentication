<script>
  export let text, condition;
</script>

<span class="text-red-400 mb-5">
  {#if condition}{text}{/if}
</span>
