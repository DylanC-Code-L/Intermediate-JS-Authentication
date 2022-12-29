import { UserFactory } from "../factories/user"

export const getFields = async (page) => {
  const email = await page.$('input[name="email"]')
  const name = await page.$('input[name="name"]')
  const password = await page.$('input[name="password"]')
  const confirm = await page.$('input[name="confirm"]')
  const cgv = await page.$('input[name="cgv"]')
  const submit = await page.$('button[type="submit"]')

  return { email, name, password, confirm, cgv, submit }
}

export const fillFields = async (page, fields) => {
  const user = new UserFactory()
  const inputFields = await getFields(page)

  for await (const field of fields) {
    if (field === 'cgv') await inputFields[field].click()
    else await inputFields[field].type(user[field])
  }

  return await inputFields.submit
}