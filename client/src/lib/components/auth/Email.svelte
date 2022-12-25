<script>
  import Error from "../Error.svelte";

  export let formValues, errors;
</script>

<label class="label-auth" for="email">Email</label>
<input
  class="input-auth"
  type="email"
  id="email"
  placeholder="Enter your email address"
  bind:value={formValues.email}
/>

<Error text={errors.email} />
