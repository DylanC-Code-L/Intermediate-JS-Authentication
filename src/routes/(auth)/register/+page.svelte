<script>
  import Error from "$lib/components/Error.svelte";
  import Email from "$lib/components/auth/Email.svelte";
  import Password from "$lib/components/auth/Password.svelte";

  export let form;
</script>

<form method="post" class="flex flex-col">
  <Email value={form?.email} error={form?.errors?.email} />

  <label class="label-auth" for="name">Full name</label>
  <input
    class="input-auth"
    type="text"
    id="name"
    name="name"
    placeholder="Enter your full name"
    value={form?.name ?? ""}
  />
  <Error error={form?.errors?.name} />

  <Password value={form?.password} error={form?.errors?.password} />
  <Password
    value={form?.confirm}
    error={form?.errors?.confirm}
    confirmPassword={true}
  />

  <div class="flex items-center">
    <input
      class="w-4 h-4 cursor-pointer"
      type="checkbox"
      id="cgv"
      name="cgv"
      checked={form?.cgv}
    />
    <label
      class="label-auth {!form?.errors?.cgv
        ? 'text-slate-400'
        : 'text-red-500'} ml-2 cursor-pointer"
      for="cgv">Please accept the CGV to continue.</label
    >
  </div>

  <button class="button-1">Sign Up</button>
</form>
