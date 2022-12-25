<script>
  import Error from "$lib/components/Error.svelte";
  import { Validator } from "$lib/components/auth/Validator.js";
  import Email from "$lib/components/auth/Email.svelte";
  import Password from "$lib/components/auth/Password.svelte";

  let [formValues, errors] = [{}, {}];

  const handleSubmit = () => {
    errors.username = new Validator(formValues.username)
      .required()
      .username()
      .minLength(3)
      .maxLength(20)
      .test();
    errors.email = new Validator(formValues.email).required().email().test();
    errors.password = new Validator(formValues.password)
      .required()
      .password()
      .minLength(8)
      .maxLength(50)
      .test();
    errors.confirm = new Validator(formValues.confirm)
      .required()
      .password()
      .test();
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
    bind:value={formValues.username}
  />
  <Error text={errors.username} />

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

  <button class="button-1">Sign Up</button>
</form>
