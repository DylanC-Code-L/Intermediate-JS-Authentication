import { Validator } from "$lib/components/auth/Validator.js";
import { fail, redirect } from "@sveltejs/kit";
import { prisma } from "$lib/server/db.js"

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

    const user = await prisma.user.findFirst({ where: { email } })

    if (!user || user.password !== password) {
      return fail(400, { errors: { global: 'Email or password incorrect !' }, email })
    }

    cookies.set('session', user.id)
    throw redirect(308, '/')
  }
}