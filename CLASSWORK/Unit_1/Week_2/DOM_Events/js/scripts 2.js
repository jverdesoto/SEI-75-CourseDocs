// const data = [

//     {
//         name: 'Aisha',    
//         location: 'London'
//     }

// ]


// document.getElementById('primary').addEventListener('click', () => {
//     console.log('You clicked me')
//     document.getElementById('secondary').innerHTML = 'You betrayed me'

// const el = document.createElement('div')
// el.classList.add('card')

// const cardBody = document.createElement('div')
// cardBody.classList.add('card-body')

// const cardTitle = document.createElement('h5')
// cardTitle.classList.add('card-title')
// cardTitle.innerHTML = data[0].name

// const cardText = document.createElement('p')
// cardText.classList.add('card-text')
// cardText.innerHTML = data[0].location

// cardBody.appendChild(cardTitle)
// cardBody.appendChild(cardText)

// el.appendChild(cardBody)

// document.getElementById('here').appendChild(el)

// })

// const inputYourName = document.getElementById

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })


// const modalBody = document.createElement('div')
// modalBody.classList.add('modal-body')
// modalBody.innerHTML = 

const inputName = document.getElementById('inputName').value

const inputEmail = document.getElementById('inputEmail').value


document.getElementById('submitBtn').addEventListener('click',()=> {
    const modalEl = document.createElement('div')

modalEl.classList.add('modal-header')
const modalTitle = document.createElement('h1')
modalTitle.classList.add('modal-title')
modalTitle.innerHTML = 'Hello'

const modalBody = document.createElement('div')
modalBody.classList.add('modal-body')
modalBody.innerHTML =(inputName, inputEmail)


const modalclose = document.createElement('button')
modalClose.classList.add(btn-btn-secondary)
modalClose.innerHTML = 'Close'

el.appendChild(modalEl)
el.appendChild(modalTitle)
el.appendChild(modalBody)
el.appendChild(modalClose)

})

//using bootstrap create a form - form elements - basic input. where you can input your name and email address. when you click submit, should display modal title saying hello and text saying hello name. the value of the name that you input on form and email address. so grab the info from the form and input it into a modal object.