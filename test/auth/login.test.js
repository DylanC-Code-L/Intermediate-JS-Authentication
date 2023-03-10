import { beforeAll, afterAll, describe, test, expect, beforeEach, afterEach } from "vitest";
import puppeteer from "puppeteer";
import { fillFields, getFields } from "../helpers/Fields";

let page, browser

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true, slowMo: 10 })
})

afterAll(async () => {
  await browser.close()
})

describe("Login", () => {
  beforeEach(async () => {
    page = await browser.newPage()
    await page.goto("http://localhost:3000/login")
  })

  test("on login page", async () => {
    const h1 = await page.$eval('main > h1', el => el.textContent)
    expect(h1).toEqual("Sign in")
  })

  describe("should fail", () => {
    test("input empty", async () => {
      const submit = await fillFields(page, ['email'])
      await submit.click()

      await page.waitForNavigation()

      const errorPassword = await page.$eval("input[type='password'] + span", el => el.textContent)
      expect(errorPassword).toEqual("Required field !")
    })

    test("wrong email and password", async () => {
      const submit = await fillFields(page, ['email', 'password'])
      await submit.click()

      await page.waitForNavigation()

      const errorPassword = await page.$eval("form > span", el => el.textContent)
      expect(errorPassword).toEqual("Email or password incorrect !")
    })
  })

  describe("should success", async () => {
    test("correct email and password", async () => {
      const { email, password, submit } = await getFields(page)
      await email.type("admin@gmail.com")
      await password.type("admin1234")
      await submit.click()

      await page.waitForNavigation()

      const h1 = await page.$eval('h1', el => el.textContent)
      expect(h1).toEqual("You are login")
    })
  })
})