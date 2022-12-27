<script>
  import Email from "$lib/components/auth/Email.svelte";
  import Password from "$lib/components/auth/Password.svelte";

  export let form;
</script>

<form method="post" class="flex flex-col">
  <Email value={form?.email} error={form?.errors?.email} />
  <Password error={form?.errors?.password} />

  <button class="button-1">Sign In</button>
</form>
