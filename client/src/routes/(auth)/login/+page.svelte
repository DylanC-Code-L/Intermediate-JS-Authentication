<script>
  import Password from "$lib/auth/Password.svelte";
  import { validator } from "$lib/auth/Validator.js";
  import Email from "$lib/auth/Email.svelte";

  let [formValues, errors] = [{}, {}];

  const handleSubmit = () => {
    errors = validator(formValues);
    debugger;
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
  <Email bind:formValues bind:errors />
  <Password bind:formValues bind:errors />

  <button class="button-1">Sign In</button>
</form>
