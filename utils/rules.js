const required = { required: true, message: 'Обязательное поле' }
const usernamePattern = { pattern: /^[a-zA-Z0-9]+$/, message: 'Допустимы только латинские буквы или цифры' }
const usernameLength = { min: 3, max: 60, message: 'Длина не может быть меньше 4 символов' }
const passwordLength = { min: 6, message: 'Длина не может быть меньше 6 символов' }

export const loginRules = {
  username: [
    required,
    usernamePattern,
    usernameLength
  ],
  password: [
    required,
    passwordLength
  ]
}

export const postRules = {
  title: required,
  title_kg: required
}

export const rubricRules = {
  title: required,
  title_kg: required
}
