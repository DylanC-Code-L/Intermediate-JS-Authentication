import { beforeAll, afterAll, describe, test, expect, beforeEach, afterEach } from "vitest";
import puppeteer from "puppeteer";
import { fillFields page, } from "../helpers/fillFields"page,;

let page, browser

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false })
})

afterAll(async () => {
  await browser.close()
})

describe("Register", () => {
  beforeEach(async () => {
    page = await browser.newPage()
    await page.goto("http://localhost:3000/register")
  })

  test("on register page", async () => {
    const h1 = await page.$eval('main > h1', el => el.textContent)
    expect(h1).toEqual("Create your account")
  })

  test("should fail", async () => {
    const submit = await fillFields(page, ['email', 'name', 'password', 'confirm'])
    await submit.click()

    await page.waitForNavigation()
    const labelIsRed = await page.$eval("label[for='cgv']", el => el.getAttribute('class').includes('text-red-500'))

    expect(labelIsRed).toBeTruthy()
  })

  test("should pass", async () => {
    const submit = await fillFields(page, ['email', 'name', 'password', 'confirm', 'cgv'])
    await submit.click()

    await page.waitForNavigation()

    const h1 = await page.$eval('h1', el => el.textContent)
    expect(h1).toEqual("You are login")
  })
})