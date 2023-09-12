// document.getElementById('primary').addEventListener('click', () => {
//     console.log('You clicked me!');

// })

// document.getElementById('primary').addEventListener('click', () => {
//     console.log('You clicked me!');
//     document.getElementById('secondary').innerHTML = 'You betrayed me';

// })

// document.getElementById('primary').addEventListener('click', () => {
//     document.getElementById('secondary').innerHTML = 'You betrayed me';

// })

// const data = [

//     {
//         name: 'Rick',
//         location: 'London',

//     },
//     {
//         name: 'Andy',
//         location: 'Quito',

//     }

// ]
//     document.getElementById('primary').addEventListener('click', () => {
//         document.getElementById('secondary').innerHTML = 'You betrayed me';
    

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


document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();

    const userName = document.getElementById('userName').value
    const userEmail = document.getElementById('userEmail').value


    const myModal = new bootstrap.Modal(document.getElementById('modalcontainer'))
    myModal.show();

    document.getElementById('modal-body').innerHTML =  `Hello ${userName}, your email is ${userEmail}`


    // const elmodal = document.createElement('div')
    // elmodal.classList.add('modal')
    // elmodal.style.tabIndex = '-1'

    // const modalDialog = document.createElement('div')
    // modalDialog.classList.add('modal-dialog')
    // elmodal.appendChild(modalDialog)

    // const modalContent = document.createElement('div')
    // modalContent.classList.add('modal-content')
    // modalDialog.appendChild(modalContent)

    // const modalHeader = document.createElement('div')
    // modalHeader.classList.add('modal-Header')
    // modalContent.appendChild(modalHeader)

    // const modalTitle = document.createElement('h5')
    // modalTitle.classList.add('modal-title')
    // modalTitle.innerHTML.value;
    // modalHeader.appendChild(modalTitle)

    // const btnClose = document.createElement('button')
    // btnClose.classList.add('btn-close')
    // modalHeader.appendChild(btnClose)

    // const modalBody = document.createElement('p')
    // modalBody.classList.add('modalBody')
    // modalBody.innerHTML = `"Hello name your email is email"`;
    // modalHeader.appendChild(modalBody)

    // document.getElementById('submit').appendChild(elmodal)


})

