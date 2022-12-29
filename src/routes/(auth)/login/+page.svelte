<script>
  import Email from "$lib/components/auth/Email.svelte";
  import Password from "$lib/components/auth/Password.svelte";
  import Error from "$lib/components/Error.svelte";

  export let form;
</script>

<form method="post" class="flex flex-col">
  <Error error={form?.errors?.global} />
  <Email value={form?.email} error={form?.errors?.email} />
  <Password error={form?.errors?.password} />

  <button class="button-1" type="submit">Sign In</button>
</form>
