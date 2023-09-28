// document.getElementById('primary').addEventListener('click', () => { //selecting the primary button. When clicked, execute this function.
// document.getElementById('secondary').innerHTML = 'You betrayed me'; // The function is to select the secondary button and alter the inner HTML to say '...' 

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

document.getElementById('submitBtn').addEventListener('click', () => {
    event.preventDefault();
    const myModal = new bootstrap.modal(document.getElementById(modal-container))
    myModal.show();

const fullName = document.getElementById("inputName").value;

const emailAddress = document.getElementById("inputEmail").value;



//     const el = document.createElement('div')
//     el.classList.add('modal-container')
    
//     const modal = document.createElement('div')
//     modal.classList.add('modal-header')

//     const modalTitle = document.createElement('h1')
//     modalTitle.classList.add('modal-title')
//     modalTitle.innerHTML = 'Hello'

//     const modalBody = document.createElement('div')
//     modalBody.classList.add('modal-body')
//     modalBody.innerHTML = (fullName, emailAddress)

//     const modalClose = document.createElement('button')
//     modalClose.classList.add('btn btn-secondary')
//     modalClose.innerHTML = 'Close'   

//     el.appendChild(el)
//     el.appendChild(modalTitle)
//     el.appendChild(modalBody)
//     el.appendChild(modalClose)

//     document.getElementsByClassName('container').appendChild(el)
 })