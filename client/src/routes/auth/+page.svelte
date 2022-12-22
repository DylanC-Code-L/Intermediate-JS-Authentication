<script>
  import Form from "../../lib/auth/Form.svelte";

  let signUp = true;

  const toggleSignUp = () => (signUp = !signUp);
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

  <button class="underline mx-auto block mt-4" on:click={toggleSignUp}>
    {#if signUp}
      Already an account ?
    {:else}
      No account ?
    {/if}
  </button>
</main>
