<script>
  import Error from "$lib/Error.svelte";
  import { validator } from "$lib/auth/Validator.js";
  import Email from "$lib/auth/Email.svelte";
  import Password from "../../../lib/auth/Password.svelte";

  let [formValues, errors] = [{}, {}];

  const handleSubmit = () => {
    errors = validator(formValues);
    debugger;
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
  <Email bind:formValues bind:errors />

  <label class="label-auth" for="name">Full name</label>
  <input
    class="input-auth"
    type="text"
    id="name"
    placeholder="Enter your full name"
    bind:value={formValues.name}
  />
  <Error condition={errors.name} text="Name isn't valid" />

  <Password bind:formValues bind:errors />
  <Password bind:formValues bind:errors confirmPassword={true} />

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
</form>
