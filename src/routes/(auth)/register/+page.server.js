import { fail } from "@sveltejs/kit"
import { Validator } from "$lib/components/auth/Validator.js"

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData()
    const email = data.get("email")
    const name = data.get("name")
    const password = data.get("password")
    const confirm = data.get("confirm")
    const cgv = data.get("cgv")

    const errors = {
      email: new Validator(email).required().email().test(),
      name: new Validator(name).required().minLength(2).maxLength(30).username().test(),
      password: new Validator(password).required().minLength(8).maxLength(50).test(),
      confirm: new Validator(confirm).required().match(password).test(),
      cgv: cgv ? false : true
    }

    const hasErrors = Object.values(errors).some(error => error)

    if (hasErrors) {
      return fail(400, { errors, email, name, password, confirm, cgv })
    }
  }
}