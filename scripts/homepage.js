import { getLocalStorage } from "./localStorage.js";

import { getPosts, getProfile } from "./request.js";

import { baseUrl } from "./request.js";
import toast from "./toast.js";
const verifyPermission = () => {
    const user = getLocalStorage()

    if(user == '') {
        window.location.replace('index.html')
    }
}
verifyPermission()


console.log(await getPosts())
const containerProfileSelection = document.querySelector('.container_header_interactions')


async function renderProfileImg () {
    const object = await getProfile()
    const profileImg = document.createElement('img')

    profileImg.src = object.avatar
    profileImg.id = 'imageProf'

    localStorage.setItem('teste10', `${object.username}`)

    containerProfileSelection.appendChild(profileImg)

    const imageProf = document.getElementById('imageProf')
    
    imageProf.addEventListener('mouseover', event => {
        event.preventDefault()
        const body = document.querySelector('body')
        const containerLeave = document.createElement('div')
        const username = document.createElement('span')
        const btnLeave = document.createElement('button')
        const btnLeaveImg = document.createElement('img')

        username.classList = 'username text2'
        btnLeaveImg.src = '../../assets/img/exit.png'
        btnLeaveImg.classList = 'leave_image'
        btnLeave.classList = 'btn_leave'
        username.innerText = `@${object.username}`
        containerLeave.classList = 'leavestuff'

        btnLeave.appendChild(btnLeaveImg)
        containerLeave.append(username, btnLeave)
        body.appendChild(containerLeave)

        btnLeave.addEventListener('click', event => {
            localStorage.clear()
            window.location.href = 'index.html'
        })
        // containerLeave.addEventListener('mouseout', event => {
        //     event.preventDefault()
        //     document.querySelector('.leavestuff').remove()
        // })
    })
}
renderProfileImg()



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
        const cardShowModalContainherHeader = document.createElement('div')
        
        const date = new Date(element.createdAt)
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        let month = months[date.getMonth()];
            console.log(month)

        cardImg.src = element.user.avatar
        cardName.innerText = element.user.username
        cardDate.innerText = `| ${month}`
        cardBtnEdit.innerText = 'Editar'
        cardBtnEdit.classList = 'text3 edit_btn'
        cardBtnDelete.id = 'btnDelete'
        cardBtnDelete.innerText = 'Excluir'
        cardBtnDelete.classList = 'text3 delete_btn'
        cardTitle.innerText = element.title
        cardContent.innerText = (`${element.content}`.substring(0,145)+'...')
        cardShowModalText.innerText = 'Acessar Publicação'
        cardShowModalText.id = 'showPost'
        cardShowModalText.classList = 'text7 show_modal_btn'
        
        


        cardShowModalText.addEventListener('click', event =>{
            event.preventDefault()
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
        modalDate.innerText = month
        modalCloseBtn.innerText = 'X'
        modalTitle.innerText = element.title;
        modalContent.innerText = element.content;

        modalContainerContent.classList = 'modal_container_content'
        modalContainerTitle.classList = 'modal_container_title'
        modalTitle.classList = ('textTitle_show text9')
        modalContent.classList = ('textContent_show text6')
        modalBackground.classList.add('modalbg');
        modalContainer.classList.add('modal');
        modalImg.classList.add('modal_img')
        modalContainerHeader.classList.add('modal_container_header')
        modalName.classList = 'text2'
        modalDate.classList = 'text8'
        cardShowModalContainherHeader.classList = 'profile_modal'
        modalContainerTitle.classList = 'modal_container_title'

        cardShowModalContainherHeader.append(modalImg, modalName, modalDate)
        modalContainerHeader.append(cardShowModalContainherHeader, modalCloseBtn);
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

        modalHeaderText.classList = 'text1'
        modalTitleLabel.classList = 'text2'
        modalTitle.classList = ('textTitle')
        modalContentLabel.classList = 'text2'
        modalContent.classList = ('textContent text10')
        modalBackground.classList.add('modalbg');
        modalContainer.classList.add('modal');
        modalContainerHeader.classList.add('modal_container_header')
        modalContainerButtons.classList = ('container_card_edit_buttons')
        modalCancelBtn.classList = 'modal_cancel_button text2 '
        modalSaveBtn.classList = 'modal_save_button text2'


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
            const modalConfirmButton = document.createElement('button')



        modalCloseBtn.addEventListener('click', event => {
            event.preventDefault()
            modalBackground.remove()
        })

        modalHeaderText.innerText = 'Confirmação de exclusão';
        modalCloseBtn.innerText = 'X'
        modalTitle.innerText = 'Tem certeza que deseja excluir este post?'
        modalDescription.innerText = 'Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir'
        modalCancelBtn.innerText = 'Cancelar'
        modalConfirmButton.innerText = 'Sim, excluir este post'

        modalConfirmButton.classList = 'modal_confirm_button text2'
        modalCancelBtn.classList = 'modal_cancel_button text2'
        modalDescription.classList = 'text6'
        modalContainerTitle.classList = 'text9'
        modalBackground.classList.add('modalbg');
        modalContainer.classList.add('modal_delete');
        modalContainerHeader.classList = ('modal_container_header text1')
        modalContainerButtons.classList.add('container_card_edit_buttons')
        
        modalConfirmButton.addEventListener('click', event => {
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
            const body = document.querySelector('.body')
                const toast = document.createElement('div')
                const toastImg = document.createElement('img')

                toastImg.src = '../../assets/img/delete.png'
                toast.classList = 'toastwo_container'
                toast.appendChild(toastImg)
                body.appendChild(toast)
            setTimeout(() => {
                location.reload()
            }, 4000);
            


        })

        modalCancelBtn.addEventListener('click', event => {
            modalBackground.remove()
        })

        modalContainerHeader.append(modalHeaderText, modalCloseBtn);
        modalContainerTitle.appendChild(modalTitle);
        modalContainerContent.appendChild(modalDescription);
        modalContainerButtons.append(modalCancelBtn, modalConfirmButton)

        modalContainer.append(modalContainerHeader, modalContainerTitle, modalContainerContent, modalContainerButtons);
        modalBackground.appendChild(modalContainer);
        selectMainContainer.appendChild(modalBackground);
        return selectMainContainer
        })

        cardContainer.classList.add('container_posts')
        cardContainerHeader.classList.add('container_header_posts')
        cardContainerHeaderProfile.classList =('container_header_profile text3')
        cardContainerBtn.classList = (`container_header_buttons`)
        cardContainerTitle.classList =('container_title text5')
        cardContainerContent.classList = ('container_description text6')
        cardContainerShowModal.classList =('show_modal text7')
        li.classList = 'li_style'

        cardContainerBtn.append(cardBtnEdit, cardBtnDelete)
        cardContainerHeaderProfile.append(cardImg, cardName, cardDate)
        cardContainerHeader.append(cardContainerHeaderProfile, cardContainerBtn)
        cardContainerTitle.appendChild(cardTitle)
        cardContainerContent.appendChild(cardContent)
        cardContainerShowModal.appendChild(cardShowModalText)
        cardContainer.append(cardContainerHeader, cardContainerTitle, cardContainerContent, cardContainerShowModal)
        li.append(cardContainer)
        ulPostList.append(li)
                
        if(cardName.textContent !== localStorage.getItem('teste10')){
            cardContainerBtn.remove()
        }

        return ulPostList
        
    });
    
}
renderPostsB(await getPosts())

async function createNewPost () {
    const selectCreateBtn = document.getElementById('create')
    selectCreateBtn.addEventListener('click', event => {
        const selectMain = document.querySelector('.body')
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


        modalCreatePublishBtn.classList = 'modal_create_publish_button'
        modalCreateCancelBtn.classList = 'modal_cancel_button'
        modalCreateContainerButtons.classList = 'modal_create_container_buttons'
        modalCreateTitlePost.classList = 'text1'
        modalCreateTitleInput.classList = 'textTitle text6'
        modalCreateTitleLabel.classList = 'text2'
        modalCreateContent.classList = 'text_content_create text6'
        modalCreateContentLabel.classList = 'text2'
        modalCreateBg.classList.add('modalbg');
        modalCreateContainer.classList.add('modal_create');
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

