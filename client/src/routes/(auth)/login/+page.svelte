<script>
  import Password from "$lib/components/auth/Password.svelte";
  import { Validator } from "$lib/components/auth/Validator.js";
  import Email from "$lib/components/auth/Email.svelte";

  let [formValues, errors] = [{}, {}];

  const handleSubmit = () => {
    errors.email = new Validator(formValues.email).required().email().test();
    errors.password = new Validator(formValues.password).required().test();
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
  <Email bind:formValues bind:errors />
  <Password bind:formValues bind:errors />

  <button class="button-1">Sign In</button>
</form>
