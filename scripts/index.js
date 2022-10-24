/* Desenvolva seu código aqui */
// const acessBtn = document.getElementById('acessBtn')

// acessBtn.addEventListener('click', event => {
//     event.preventDefault()
//     console.log('o botao foi selectionado')
// })


const registerBtn = document.getElementById('registerBtn')

registerBtn.addEventListener('click', event => {
    event.preventDefault()

    // console.log('cadastro')
    window.location.href = 'register.html'
})

