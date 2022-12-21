<script>
  import Form from "../../lib/auth/Form.svelte";

  let signUp = true;
</script>

{#if signUp}
  <h1>Create your account</h1>
{:else}
  <h1>Sign in</h1>
{/if}

<Form {signUp} />
