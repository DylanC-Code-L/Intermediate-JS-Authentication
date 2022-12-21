<script>
  export let signUp;

  const [formValues, errors] = [{}, {}];

  const handleSubmit = () => {};
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="email">Email</label><br />
  <input type="email" id="email" bind:value={formValues.email} /><br />

  {#if signUp}
    <label for="name">Full name</label>
    <input type="text" id="name" bind:value={formValues.name} />
  {/if}

  <label for="password">Password</label>
  <input type="password" id="password" bind:value={formValues.password} />

  {#if signUp}
    <label for="confirm">Confirm password</label>
    <input type="password" id="confirm" />

    <input type="checkbox" id="cgv" bind:checked={formValues.checked} />
    <label for="cgv">Please accept the CGV to continue.</label>

    <button disabled={!formValues.checked}>Sign Up</button>
  {:else}
    <button disabled={!formValues.checked}>Sign In</button>
  {/if}
</form>
