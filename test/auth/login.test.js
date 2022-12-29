import { beforeAll, afterAll, describe, test, expect, beforeEach, afterEach } from "vitest";
import puppeteer from "puppeteer";
import { fillFields } from "../helpers/Fields";

let page, browser

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false })
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
  })
})