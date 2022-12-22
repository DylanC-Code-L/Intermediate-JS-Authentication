export const validator = ({ email, password, username, confirm }) => {
  const reEmail = /\S+@\S+\.\S+/;
  const emailValidator = reEmail.test(email);

  const rePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const passwordValidator = rePassword.test(password)

  const reUsername = /^[a-zA-Z0-9]{3,}$/;
  const usernameValidator = reUsername.test(username);

  const passwordConfirmValidator = password === confirm;

  return {
    email: !emailValidator,
    password: !passwordValidator,
    username: !usernameValidator,
    confirm: !passwordConfirmValidator,
  }
}