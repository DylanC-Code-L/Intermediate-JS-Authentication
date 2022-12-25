export class Validator {
  constructor(value = "") {
    this.value = value
    this.validators = []
  }

  required() {
    const isValid = !this.value || this.value === '' ? "Required field !" : undefined
    this.validators.push(isValid)
    return this
  }

  email() {
    const isValid =
      this.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.value)
        ? 'Invalid email address !'
        : undefined;

    this.validators.push(isValid)
    return this
  }

  username() {
    const isValid = this.value && !/^[a-zA-Z0-9]+$/i.test(this.value) ? 'Invalid username !' : undefined;
    this.validators.push(isValid)
    return this
  }

  password() {
    const isValid = this.value && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(this.value) ? 'Invalid password !' : undefined;
    this.validators.push(isValid)
    return this
  }

  minLength(min) {
    const isValid = this.value.length < min ? `Must be ${min} characters or more` : undefined;
    this.validators.push(isValid)
    return this
  }

  maxLength(max) {
    const isValid = this.value.length > max ? `Must be ${max} characters or less` : undefined;
    this.validators.push(isValid)
    return this
  }

  match(value) {
    const isValid = this.value !== value ? "Values don't match !" : undefined;
    this.validators.push(isValid)
    return this
  }

  test() {
    this.validators = this.validators.filter(validator => validator !== undefined)
    return this.validators[0]
  }
}