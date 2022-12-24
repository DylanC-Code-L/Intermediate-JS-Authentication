<script>
  import Error from "../Error.svelte";

  export let formValues, errors;
  export let confirmPassword = false;
</script>

{#if !confirmPassword}
  <label class="label-auth" for="password">Password</label>
  <input
    class="input-auth"
    type="password"
    id="password"
    placeholder="Enter your password"
    bind:value={formValues.password}
  />
  <Error condition={errors.password} text="Password isn't valid !" />
{:else}
  <label class="label-auth" for="confirm">Confirm password</label>
  <input
    class="input-auth"
    type="password"
    id="confirm"
    placeholder="Confirm your password"
    bind:value={formValues.confirm}
  />
  <Error condition={errors.confirm} text="Passwords don't match !" />
{/if}
