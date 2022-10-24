const backToLoginBtn1 = document.getElementById('backToLogin1')
const backToLoginBtn2 = document.getElementById('backToLogin2')

function backToLogin (button){
button.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = 'index.html'})
}
backToLogin(backToLoginBtn1)
backToLogin(backToLoginBtn2)

import { registerUser } from "./request.js";

const eventRegister = () => {
    const form = document.querySelector('.form_interactions_two')
    const registerBtn = document.getElementById('newUserRegisterBtn')
    const username = document.getElementById('newUserUsername')
    const email = document.getElementById('newUserEmail')
    const avatar = document.getElementById('newUserAvatar')
    const password = document.getElementById('newUserPassword')

    document.getElementById("newUserRegisterBtn").disabled = true;

    form.addEventListener('keydown', event =>{
      const elements = [...form.elements]
      elements.forEach(element => {
        if(element.tagName == 'INPUT' && element.value !== ''){
          document.getElementById("newUserRegisterBtn").disabled = false;
        }
      });
    })

      registerBtn.addEventListener('click', async (event) => {
      event.preventDefault()
      const body = {
        username: `${username.value}`,
        email: `${email.value}`,
        password: `${password.value}`,
        avatar: `${avatar.value}`,
      }
      await registerUser(body)
    })
  }
  eventRegister()

