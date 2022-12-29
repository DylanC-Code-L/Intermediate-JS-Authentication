import { generateFromEmail, generateUsername } from "unique-username-generator"

export class UserFactory {
  constructor() {
    this.name = generateUsername("", 0, 10)
    this.email = this.name + "@test.com"
    this.password = "password"
    this.confirm = "password"

    return {
      name: this.name,
      email: this.email,
      password: this.password,
      confirm: this.confirm,
    }
  }
}