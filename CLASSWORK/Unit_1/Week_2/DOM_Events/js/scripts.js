const data = [
    {
        name: 'Rick',
        location: 'London'
    },
    {
        name: 'Andy',
        location: 'Quito'
    }
]


// document.getElementById('primary').addEventListener('click', () => {
//     document.getElementById('secondary').innerHTML = 'You betrayed me'
// })


// document.getElementById('primary').addEventListener('click', () => {
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
//     cardBody.appendChild(cardText) // Fill in the inner most elements first

//     el.appendChild(cardBody)

//     document.getElementById('here').appendChild(el)
// })

// Get name and email adress
// When pressing submit use a modal and have this info come up



document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault()
    const inputName = document.getElementById('inputName').value
    const inputEmail = document.getElementById('inputEmail').value

    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    myModal.show()

    document.getElementById('modal-body').innerHTML = `Name-${inputName}, Email-${inputEmail}`
    

})



    // const el = document.createElement('div')
    // el.classList.add('modalContainer')

    // const modalFade = document.createElement('div')
    // modalFade.classList.add('modal', 'fade')
    // modalFade.setAttribute('id', 'fade')
    // modalFade.setAttribute('aria-hidden', 'false')

    // const modalEl = document.createElement('div')
    // modalEl.classList.add('modal-header')

    // const modalTitle = document.createElement('h1')
    // modalTitle.classList.add('modal-title', 'fs-5')
    // modalTitle.innerHTML = 'Hello'

    // const modalBody = document.createElement('div')
    // modalBody.classList.add('modal-body')
    // modalBody.innerHTML = `${inputName}, ${inputEmail}`

    // const modalClose = document.createElement('button')
    // modalClose.classList.add('btn', 'btn-secondary')
    // modalClose.innerHTML = 'Close'

    // el.appendChild(modalFade)
    // el.appendChild(modalEl)
    // el.appendChild(modalTitle)
    // el.appendChild(modalBody)
    // el.appendChild(modalClose)

    // document.getElementById('container').appendChild(el)