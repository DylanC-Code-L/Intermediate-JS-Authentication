<script>
  import Error from "../Error.svelte";

  export let value = "",
    error;
</script>

<label class="label-auth" for="email">Email</label>
<input
  class="input-auth"
  type="email"
  id="email"
  name="email"
  {value}
  placeholder="Enter your email address"
/>

<Error {error} />
