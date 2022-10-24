import { getLocalStorage } from "./localStorage.js";

import { getPosts } from "./request.js";

import { baseUrl } from "./request.js";
const verifyPermission = () => {
    const user = getLocalStorage()

    if(user == '') {
        window.location.replace('index.html')
    }
}
verifyPermission()

const ulPostList = document.getElementById('ulPosts')

async function renderPostsB (array) {
        ulPostList.innerHTML = '';
        array.forEach((element, index) => {

        const li = document.createElement('li')
        const cardContainer = document.createElement('div')
        const cardContainerHeader = document.createElement('div')
        const cardContainerHeaderProfile = document.createElement('div')
        const cardImg = document.createElement('img')
        const cardName = document.createElement('h2')
        const cardDate = document.createElement('span')
        const cardContainerBtn = document.createElement('div')
        const cardBtnEdit = document.createElement('button')
        const cardBtnDelete = document.createElement('button')
        const cardContainerTitle = document.createElement('div')
        const cardTitle = document.createElement('h2')
        const cardContainerContent = document.createElement('div')
        const cardContent = document.createElement('p')
        const cardContainerShowModal = document.createElement('div')
        const cardShowModalText = document.createElement('button')
        
        
        cardImg.src = element.user.avatar
        cardName.innerText = element.user.username
        cardDate.innerText = '23/10/1992'
        cardBtnEdit.innerText = 'Editar'
        cardBtnDelete.id = 'btnDelete'
        cardBtnDelete.innerText = 'Excluir'
        cardTitle.innerText = element.title
        cardContent.innerText = element.content
        cardShowModalText.innerText = 'Acessar Publicação'
        cardShowModalText.id = 'showPost'

        cardShowModalText.addEventListener('click', event =>{
        const selectMainContainer = document.querySelector('.body')
        const modalBackground = document.createElement('div');
        const modalContainer = document.createElement('div');
        const modalContainerHeader = document.createElement('div');
        const modalImg = document.createElement('img');
        const modalName = document.createElement('h2');
        const modalDate = document.createElement('span');
        const modalCloseBtn = document.createElement('button')
        const modalContainerTitle = document.createElement('div');
        const modalTitle = document.createElement('h2');
        const modalContainerContent = document.createElement('div');
        const modalContent = document.createElement('p');


        modalCloseBtn.addEventListener('click', event => {
            event.preventDefault()
            modalBackground.remove()
        })
        modalImg.src = element.user.avatar;
        modalName.innerText = element.user.username;
        modalDate.innerText = '22/10/1992';
        modalCloseBtn.innerText = 'X'
        modalTitle.innerText = element.title;
        modalContent.innerText = element.content;

        modalTitle.classList.add('textTitle')
        modalContent.classList.add('textContent')
        modalBackground.classList.add('modalbg');
        modalContainer.classList.add('modal');
        modalImg.classList.add('modal_img')
        modalContainerHeader.classList.add('modal_container_header')
        
        modalContainerHeader.append(modalImg, modalName, modalDate, modalCloseBtn);
        modalContainerTitle.appendChild(modalTitle);
        modalContainerContent.appendChild(modalContent);
        modalContainer.append(modalContainerHeader, modalContainerTitle, modalContainerContent);
        modalBackground.appendChild(modalContainer);
        selectMainContainer.appendChild(modalBackground);
        return selectMainContainer
        })

        cardBtnEdit.addEventListener('click', event => {
            const selectMainContainer = document.querySelector('.body')
            const modalBackground = document.createElement('div');
            const modalContainer = document.createElement('div');
            const modalContainerHeader = document.createElement('div');
            const modalHeaderText = document.createElement('h2');
            const modalCloseBtn = document.createElement('button')
            const modalContainerTitle = document.createElement('div');
            const modalTitleLabel = document.createElement('label')
            const modalTitle = document.createElement('textarea');
            const modalContainerContent = document.createElement('div');
            const modalContentLabel = document.createElement('label')
            const modalContent = document.createElement('textarea');
            const modalContainerButtons = document.createElement('div')
            const modalCancelBtn = document.createElement('button')
            const modalSaveBtn = document.createElement('button')



        modalCloseBtn.addEventListener('click', event => {
            event.preventDefault()
            modalBackground.remove()
        })

        modalHeaderText.innerText = 'Edição';
        modalCloseBtn.innerText = 'X'
        modalTitleLabel.innerText = 'Título do post'
        modalTitle.innerText = element.title;
        modalContentLabel.innerText = 'Conteúdo do post'
        modalContent.innerText = element.content;
        modalCancelBtn.innerText = 'Cancelar'
        modalSaveBtn.innerText = 'Salvar Alterações'


        modalTitle.classList.add('textTitle')
        modalContent.classList.add('textContent')
        modalBackground.classList.add('modalbg');
        modalContainer.classList.add('modal');
        modalContainerHeader.classList.add('modal_container_header')
        modalContainerButtons.classList.add('container_card_edit_buttons')
        
        modalCancelBtn.addEventListener('click', event => {
            modalBackground.remove()
        })

        modalSaveBtn.addEventListener('click', async event => {
            console.log(modalContent.value)
            async function editPost () {
                console.log(element.id)
                const localStorage = getLocalStorage() 
                    const request = await fetch(`${baseUrl}${'posts/'}${element.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.token}`
                        },body: JSON.stringify({title: `${modalTitle.value}`,
                               content: `${modalContent.value}`
                        }),
                    })
            }
            editPost()
            modalBackground.remove()
            location.reload()
        })


        modalContainerHeader.append(modalHeaderText, modalCloseBtn);
        modalContainerTitle.append(modalTitleLabel, modalTitle);
        modalContainerContent.append(modalContentLabel, modalContent);
        modalContainerButtons.append(modalCancelBtn, modalSaveBtn)

        modalContainer.append(modalContainerHeader, modalContainerTitle, modalContainerContent, modalContainerButtons);
        modalBackground.appendChild(modalContainer);
        selectMainContainer.appendChild(modalBackground);
        return selectMainContainer
        })



        cardBtnDelete.addEventListener('click', event => {
            console.log(baseUrl)
            const selectMainContainer = document.querySelector('.body')
            const modalBackground = document.createElement('div');
            const modalContainer = document.createElement('div');
            const modalContainerHeader = document.createElement('div');

            const modalHeaderText = document.createElement('h2');

            const modalCloseBtn = document.createElement('button')
            const modalContainerTitle = document.createElement('div');
            const modalTitle = document.createElement('h2')
            const modalContainerContent = document.createElement('div');
            const modalDescription = document.createElement('p')
            const modalContainerButtons = document.createElement('div')
            const modalCancelBtn = document.createElement('button')
            const modalSaveBtn = document.createElement('button')



        modalCloseBtn.addEventListener('click', event => {
            event.preventDefault()
            modalBackground.remove()
        })

        modalHeaderText.innerText = 'Confirmação de exclusão';
        modalCloseBtn.innerText = 'X'
        modalTitle.innerText = 'Tem certeza que deseja excluir este post?'
        modalDescription.innerText = 'Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir'
        modalCancelBtn.innerText = 'Cancelar'
        modalSaveBtn.innerText = 'Sim, excluir este post'


        modalBackground.classList.add('modalbg');
        modalContainer.classList.add('modal');
        modalContainerHeader.classList.add('modal_container_header')
        modalContainerButtons.classList.add('container_card_edit_buttons')
        
        modalSaveBtn.addEventListener('click', event => {
            console.log('ese')
            async function deletePost () {
                console.log(element.id)
                const localStorage = getLocalStorage() 
            
            
                    await fetch(`${baseUrl}${'posts/'}${element.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.token}`
                        }
                        })
                                        
            }
            deletePost()
            modalBackground.remove()
            location.reload()
        })

        modalCancelBtn.addEventListener('click', event => {
            modalBackground.remove()
        })

        modalContainerHeader.append(modalHeaderText, modalCloseBtn);
        modalContainerTitle.appendChild(modalTitle);
        modalContainerContent.appendChild(modalDescription);
        modalContainerButtons.append(modalCancelBtn, modalSaveBtn)

        modalContainer.append(modalContainerHeader, modalContainerTitle, modalContainerContent, modalContainerButtons);
        modalBackground.appendChild(modalContainer);
        selectMainContainer.appendChild(modalBackground);
        return selectMainContainer

        })




        cardContainer.classList.add('container_posts')
        cardContainerHeader.classList.add('container_header_posts')
        cardContainerHeaderProfile.classList.add('container_header_profile')
        cardContainerBtn.classList.add('container_header_buttons')
        cardContainerTitle.classList.add('container_title')
        cardContainerContent.classList.add('container_description')
        cardContainerShowModal.classList.add('show_modal')


        cardContainerBtn.append(cardBtnEdit, cardBtnDelete)
        cardContainerHeaderProfile.append(cardImg, cardName, cardDate)
        cardContainerHeader.append(cardContainerHeaderProfile, cardContainerBtn)
        cardContainerTitle.appendChild(cardTitle)
        cardContainerContent.appendChild(cardContent)
        cardContainerShowModal.appendChild(cardShowModalText)
        cardContainer.append(cardContainerHeader, cardContainerTitle, cardContainerContent, cardContainerShowModal)
        li.append(cardContainer)
        ulPostList.append(li)
        return ulPostList
        
    });
    
}
renderPostsB(await getPosts())

async function createNewPost () {
    const selectCreateBtn = document.getElementById('create')
    selectCreateBtn.addEventListener('click', event => {
        const selectMain = document.querySelector('.main_container')
        const modalCreateBg = document.createElement('div')
        const modalCreateContainer = document.createElement('div')
        const modalContainerHeader = document.createElement('div')
        const modalCreateTitlePost = document.createElement('h2')
        const modalCreateCloseBtn = document.createElement('button')
        const modalCreateContainerTitle = document.createElement('div')
        const modalCreateTitleLabel = document.createElement('label')
        const modalCreateTitleInput = document.createElement('textarea')
        const modalCreateContainerContent = document.createElement('div')
        const modalCreateContentLabel = document.createElement('label')
        const modalCreateContent = document.createElement('textarea')
        const modalCreateContainerButtons = document.createElement('div')
        const modalCreateCancelBtn = document.createElement('button')
        const modalCreatePublishBtn = document.createElement('button')



        modalCreateTitlePost.innerText = 'Criando novo post'
        modalCreateCloseBtn.innerText = 'X'
        modalCreateTitleLabel.innerText = 'Título do post'
        modalCreateTitleInput.placeholder = 'Digite o título aqui...'
        modalCreateContentLabel.innerText = 'Conteúdo do post'
        modalCreateContent.placeholder = 'Desenvolva o conteúdo do post aqui...'
        modalCreateCancelBtn.innerText = 'Cancelar'
        modalCreatePublishBtn.innerText = 'Publicar'


        modalCreateBg.classList.add('modalbg');
        modalCreateContainer.classList.add('modal');
        modalContainerHeader.classList.add('modal_container_header')
        modalCreateContainerButtons.classList.add('container_card_edit_buttons')

        modalCreateCloseBtn.addEventListener('click', event => [
            modalCreateBg.remove()
        ])

        modalCreateCancelBtn.addEventListener('click', event => [
            modalCreateBg.remove()
        ])

        modalCreatePublishBtn.addEventListener('click', async event => {
            console.log(modalCreateTitleInput.value, modalCreateContent.value)
            const localStorage = getLocalStorage()
                await fetch(`${baseUrl}posts/create`, {
                    method: 'POST',
                    headers: {'Content-type': 'Application/json',
                                'Authorization': `Bearer ${localStorage.token}`    
                }, body: JSON.stringify({title: `${modalCreateTitleInput.value}`,
                           content: `${modalCreateContent.value}`
                })
                })
                modalCreateBg.remove()
                location.reload()
        })

        modalContainerHeader.append(modalCreateTitlePost, modalCreateCloseBtn)
        modalCreateContainerTitle.append(modalCreateTitleLabel, modalCreateTitleInput)
        modalCreateContainerContent.append(modalCreateContentLabel, modalCreateContent)
        modalCreateContainerButtons.append(modalCreateCancelBtn, modalCreatePublishBtn)
        modalCreateContainer.append(modalContainerHeader, modalCreateContainerTitle, modalCreateContainerContent, modalCreateContainerButtons)
        modalCreateBg.appendChild(modalCreateContainer)
        selectMain.appendChild(modalCreateBg)
        return selectMain
    })
}
createNewPost()
