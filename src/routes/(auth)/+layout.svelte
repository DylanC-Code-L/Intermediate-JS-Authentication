<script>
  import { page } from "$app/stores";

  let signUp = $page.url.pathname === "/register";

  const toggleSignUp = () => (signUp = !signUp);
</script>

<main class="px-[15vw] py-[10vh]">
  {#if signUp}
    <h1 class="text-4xl mb-8">Create your account</h1>
  {:else}
    <h1 class="text-4xl mb-8">Sign in</h1>
  {/if}

  <slot {signUp} />

  {#if signUp}
    <a
      class="underline mx-auto block mt-4"
      href="/login"
      on:click={toggleSignUp}
    >
      Already an account ?
    </a>
  {:else}
    <a
      class="underline mx-auto block mt-4"
      href="/register"
      on:click={toggleSignUp}
    >
      No account ?
    </a>
  {/if}
</main>
