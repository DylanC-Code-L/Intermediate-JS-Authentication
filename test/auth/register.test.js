import { beforeAll, afterAll, describe, test, expect } from "vitest";
import puppeteer from "puppeteer";
import { UserFactory } from "../factories/user";

let page, browser

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true })
  page = await browser.newPage()
})

afterAll(async () => {
  await browser.close()
})

describe("Register", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/register")
    return "done"
  })

  test("on register page", async () => {
    const h1 = await page.$eval('main > h1', el => el.textContent)
    expect(h1).toEqual("Create your account")
  })

  test("should pass", async () => {
    const { email, name, password, confirm, cgv, submit } = await getFields()
    const user = new UserFactory()
    
    await email.type(user.email)
    await name.type(user.name)
    await password.type(user.password)
    await confirm.type(user.password)
    await cgv.click()
    await submit.click()

    await page.waitForNavigation()

    const h1 = await page.$eval('h1', el => el.textContent)
    expect(h1).toEqual("You are login")
  })

  test("should fail", async () => {

  })
})

const getFields = async () => {
  const email = await page.$('input[name="email"]')
  const name = await page.$('input[name="name"]')
  const password = await page.$('input[name="password"]')
  const confirm = await page.$('input[name="confirm"]')
  const cgv = await page.$('input[name="cgv"]')
  const submit = await page.$('button[type="submit"]')

  return { email, name, password, confirm, cgv, submit }
}