<script>
  import Error from "../Error.svelte";
  import { validator } from "./Validator.js";
  export let signUp;

  let [formValues, errors] = [{ signUp }, {}];

  const handleSubmit = () => {
    if (signUp && formValues.checked) errors = validator(formValues);
    debugger;
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
  <label class="label-auth" for="email">Email</label>
  <input
    class="input-auth"
    type="email"
    id="email"
    placeholder="Enter your email address"
    bind:value={formValues.email}
  />
  <Error condition={errors.email} text="Email isn't valid" />

  {#if signUp}
    <label class="label-auth" for="name">Full name</label>
    <input
      class="input-auth"
      type="text"
      id="name"
      placeholder="Enter your full name"
      bind:value={formValues.name}
    />
    <Error condition={errors.name} text="Name isn't valid" />
  {/if}

  <label class="label-auth" for="password">Password</label>
  <input
    class="input-auth"
    type="password"
    id="password"
    placeholder="Enter your password"
    bind:value={formValues.password}
  />
  <Error condition={errors.password} text="Password isn't valid" />

  {#if signUp}
    <label class="label-auth" for="confirm">Confirm password</label>
    <input
      class="input-auth"
      type="password"
      id="confirm"
      placeholder="Confirm your password"
      bind:value={formValues.confirm}
    />
    <Error condition={errors.confirm} text="Passwords don't match" />

    <div class="flex items-center">
      <input
        class="w-4 h-4 cursor-pointer"
        type="checkbox"
        id="cgv"
        bind:checked={formValues.checked}
      />
      <label class="label-auth text-slate-400 ml-2 cursor-pointer" for="cgv"
        >Please accept the CGV to continue.</label
      >
    </div>

    <button class="button-1" disabled={!formValues.checked}>Sign Up</button>
  {:else}
    <button class="button-1">Sign In</button>
  {/if}
</form>
