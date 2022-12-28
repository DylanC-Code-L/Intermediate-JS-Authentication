export class Validator {
  constructor(value = "") {
    this.value = value
    this.errors = []
  }

  required() {
    if (!this.value || this.value === '')
      this.errors.push("Required field !")

    return this
  }

  email() {
    if (this.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.value))
      this.errors.push('Invalid email address !')

    return this
  }

  username() {
    if (this.value && !/^[a-zA-Z0-9-_]+$/i.test(this.value))
      this.errors.push('Invalid username !')

    return this
  }

  password() {
    if (this.value && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(this.value))
      this.errors.push('Invalid password !')
    return this
  }

  minLength(min) {
    if (this.value.length < min)
      this.errors.push(`Must be ${min} characters or more`)
    return this
  }

  maxLength(max) {
    if (this.value.length > max)
      this.errors.push(`Must be ${max} characters or less`)

    return this
  }

  match(value) {
    if (this.value !== value)
      this.errors.push("Values don't match !")
    return this
  }

  test() {
    return this.errors[0]
  }
}