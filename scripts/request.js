import toast from "./toast.js"
import { getLocalStorage } from "./localStorage.js"


const baseUrl = 'http://localhost:3333/'

async function login (body) {
    try {
        const request = await fetch(baseUrl + 'login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if (request.ok) {
            const response = await request.json()
            // toast('', '')

            localStorage.setItem('user', JSON.stringify(response))

            document.getElementById('acessBtn').remove()
            const changeBtn = document.querySelector('.btnAcess')
            const btnLoad = document.createElement('button')
            const btnLoadImg = document.createElement('img')

            btnLoad.classList = 'form_btn_acess'
            btnLoadImg.classList = 'button_img'

            btnLoadImg.src = '../../assets/img/spinner.png'
            btnLoad.appendChild(btnLoadImg)
            changeBtn.appendChild(btnLoad)

            setTimeout(() => {
                window.location.replace('homepage.html')
            }, 4000);
            
            // console.log(response)
        
        }else {
            const createError = document.getElementById('errorLogin')
            createError.innerText = 'E-mail ou senha incorretos.'
            createError.style.color = 'var(--alert100)'
        }

    }catch (err){
        console.log(err)
    }
}


async function registerUser (body) {
    try {
        const request = await fetch(`${baseUrl}users/create`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        console.log(request)

            toast('', '')

            setTimeout(() => {
                window.location.replace('../login/index.html')
            }, 4000);

            toast('', '')


    }catch (err){
        toast('', '')
        console.log(err)
    }
}

const getPosts = async ()  => {
    const localStorage = getLocalStorage() 

        const request = await fetch(baseUrl + 'posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
            })
        const response = await request.json()
        return response
}

async function createPost (body) {
    try {
        const request = await fetch(`${baseUrl}posts/create`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(body)
        })
        console.log(request)

            toast('sucesso!', 'Cadastro feito com sucesso!')

            setTimeout(() => {
                window.location.replace('../pages/login/index.html')
            }, 4000);

            toast('Erro!', 'Algo deu errado')


    }catch (err){
        toast('Erro!', 'Algo deu errado')
        console.log(err)
    }
}

const getProfile = async ()  => {
    const localStorage = getLocalStorage() 

        const request = await fetch(`${baseUrl}users/profile`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
            })
        const response = await request.json()
        return response
        
}

export {
    login,
    registerUser,
    getPosts,
    getProfile,
    baseUrl
}