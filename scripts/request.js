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
            toast('sucesso', 'Login feito com sucesso')

            localStorage.setItem('user', JSON.stringify(response))

            setTimeout(() => {
                window.location.replace('homepage.html')
            }, 4000);
    
            console.log(response)
        
        }else {
            toast('Erro!', 'Algo deu errado!')
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

            toast('sucesso!', 'Cadastro feito com sucesso!')

            setTimeout(() => {
                window.location.replace('../login/index.html')
            }, 4000);

            // toast('Erro!', 'Algo deu errado')


    }catch (err){
        toast('Erro!', 'Algo deu errado')
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

            // setTimeout(() => {
                // window.location.replace('../pages/login/index.html')
            // }, 4000);

            // toast('Erro!', 'Algo deu errado')


    }catch (err){
        toast('Erro!', 'Algo deu errado')
        console.log(err)
    }
}











export {
    login,
    registerUser,
    getPosts,
    baseUrl
}