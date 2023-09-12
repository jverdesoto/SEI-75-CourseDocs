const submitBtn = document.querySelector('.btn-primary')
const container = document.querySelector('.container')
const body = document.querySelector('body')
const modalContainer = document.getElementById('modal-container')


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    //create the modal
    const modalBox = document.createElement('div')
    modalBox.classList.add('modal')
    modalBox.setAttribute('tabindex', '-1')

    const modalDialog = document.createElement('div')
    modalDialog.classList.add('modal-dialog', '.modal-sm')

    const modalContent = document.createElement('div')
    modalContent.classList.add('modal-content')

    const modalHeader = document.createElement('div')
    modalHeader.classList.add('modal-header')

    const modalTitle = document.createElement('div')
    modalTitle.classList.add('modal-title')

    const dismissalBtn = document.createElement('button')
    dismissalBtn.classList.add('btn-close')
    dismissalBtn.setAttribute('data-bs-dismiss', "modal")
    dismissalBtn.setAttribute('aria-label', "Close")

    const modalBody = document.createElement('div')
    modalBody.classList.add('modal-body')

    modalContent.appendChild(modalHeader)
    // modalHeader.appendChild(dismissalBtn)

    modalContent.appendChild(modalBody)
   
    modalDialog.appendChild(modalContent)
    modalBox.appendChild(modalContent)

    modalContainer.appendChild(modalBox)
    

    //set title
        const title = document.createElement('h5')
        title.innerHTML = "Hello"
        modalHeader.appendChild(title)

    //grab the name
        const nameInput = document.getElementById('exampleInputName1')
        const name = nameInput.value

    //grab the email
        const emailInput = document.getElementById('exampleInputEmail1')
        const email = emailInput.value
        console.log(email)

    //populate the body
        const bodyText = document.createElement('p')
        bodyText.innerHTML = `Hello ${name}, your email address is now ${email}`
        modalBody.appendChild(bodyText)
        console.log(bodyText)

    //launch modal
    const myModal = new bootstrap.Modal(modalBox)
    myModal.show()
})









// const data =[
//     {
//         name: 'Rick',
//         location: 'London',
//     },
//     {
//         name: 'Andy',
//         location: 'Quito'
//     }
// ]

// document.getElementById('primary').addEventListener('click', () => {
//     document.getElementById('secondary').innerHTML = 'traitor'

//     const el = document.createElement('div')
//     el.classList.add('card')

//     const cardBody = document.createElement('div')
//     cardBody.classList.add('card-body')

//     const cardTitle = document.createElement('h5')
//     cardTitle.classList.add('card-title')
//     cardTitle.innerHTML = data[0].name

//     const cardText = document.createElement('p')
//     cardText.classList.add('card-text')
//     cardText.innerHTML = data[0].location

//     cardBody.appendChild(cardTitle)
//     cardBody.appendChild(cardText)
//     el.appendChild(cardBody)

//     document.getElementById('here').appendChild(el)

// })