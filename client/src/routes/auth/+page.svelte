<script>
  import Form from "../../lib/auth/Form.svelte";

  let signUp = true;
</script>

<main class="px-[15vw] py-[10vh]">
  <h1 class="text-4xl mb-8">
    {#if signUp}
      Create your account
    {:else}
      Sign in
    {/if}
  </h1>

  <Form {signUp} />
</main>
