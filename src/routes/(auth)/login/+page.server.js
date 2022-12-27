import { Validator } from "$lib/components/auth/Validator.js";
import { json, fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get('email')
    const password = data.get('password')

    const errors = {
      email: new Validator(email).required().email().test(),
      password: new Validator(password).required().test()
    }

    const hasErrors = Object.values(errors).some(error => error)

    if (hasErrors) {
      return fail(400, { errors, email })
    }
  }
}