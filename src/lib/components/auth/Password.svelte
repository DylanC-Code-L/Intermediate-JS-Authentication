<script>
  import Error from "../Error.svelte";

  export let error,
    value = "";
  export let confirmPassword = false;
</script>

{#if !confirmPassword}
  <label class="label-auth" for="password">Password</label>
  <input
    class="input-auth"
    type="password"
    id="password"
    name="password"
    {value}
    placeholder="Enter your password"
  />
  <Error {error} />
{:else}
  <label class="label-auth" for="confirm">Confirm password</label>
  <input
    class="input-auth"
    type="password"
    id="confirm"
    name="confirm"
    {value}
    placeholder="Confirm your password"
  />
  <Error {error} />
{/if}
