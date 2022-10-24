import { login } from "./request.js";

const eventLogin = () => {
  const form = document.querySelector('.form_login_interactions')
  const elements = [...form.elements]

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const body = {}

    elements.forEach((elem) => {
      if (elem.tagName == 'INPUT' && elem.value !== ''){
        body[elem.id] = elem.value
      }
    })
    await login(body)
  })
}
eventLogin()