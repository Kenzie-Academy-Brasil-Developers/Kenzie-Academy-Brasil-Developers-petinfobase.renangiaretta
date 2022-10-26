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
    const form = document.querySelector('.form_register')
    const registerBtn = document.getElementById('newUserRegisterBtn')
    const username = document.getElementById('newUserUsername')
    const email = document.getElementById('newUserEmail')
    const avatar = document.getElementById('newUserAvatar')
    const password = document.getElementById('newUserPassword')

    registerBtn.classList = 'btn_register'
    document.getElementById("newUserRegisterBtn").disabled = true;

    form.addEventListener('keyup', event =>{
      // const elements = [...form.elements]
      // elements.forEach(element => {
      //   if(element.tagName == 'INPUT' && (element.value).every !== ''){
      //     document.getElementById("newUserRegisterBtn").disabled = false;
      //   }
      // });
      if(username.value !== '' && email.value !== '' && avatar.value !== '' && password.value !== ''){
        document.getElementById("newUserRegisterBtn").disabled = false;
        registerBtn.style.background = 'var(--brand100)'
      }
      else if(username.value !== '' || email.value !== '' || avatar.value !== '' || password.value || ''){
        document.getElementById("newUserRegisterBtn").disabled = true;
        registerBtn.style.background = '#364ec7ad'
      }
    })

      registerBtn.addEventListener('click', async event => {
        event.preventDefault()
        registerBtn.remove()
        const btnLoadImg = document.getElementById('containerRegisterBtn')
        const loadBtn = document.createElement('button')
        const loadImg = document.createElement('img')

        loadImg.src = '../../assets/img/spinner.png'
        loadBtn.appendChild(loadImg)
        btnLoadImg.appendChild(loadBtn)
        
        loadImg.classList.add('buttonImg')
        loadBtn.classList = 'btn_register ready_btn'

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