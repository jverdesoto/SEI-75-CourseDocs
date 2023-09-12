

        const enterName = document.getElementById('userEmail').value
        const enterPassword = document.getElementById('userPassword').value


document.getElementById('user-email').addEventListener('keypress', () => {
        event.preventDefault()
        
        const enterName = document.getElementById('userEmail').value
        const enterPassword = document.getElementById('userPassword').value
        const modalName = document.getElementById('modalName').value
        const modalEmail = document.getElementById('modalEmail').value

        
})

const myModal = new bootstrap.Modal(document.getElementById(displayModal))


el.addEventListener('click', (event) => {
    
    document.getElementById("myDialog").showModal();

})




output.innerHTML = `<p>Your Email is: ${email}<p><p>Your password is: ${password}</p>`



// input a value and give it an id or a variable
// use that variable to modify the modal



// const el = document.createElement('div')
// el.classList.add('')

// constmodalTitle = document.createElement('p')
// modalTitle.classList.add('form-label')

// create elements for the modal


// document.getElementById('primary').addEventListener('click', () => {
// document.getElementById('secondary').innerHTML = 'You betrayed me';
// console.log('You clicked me');

// const el = document.createElement('div')
// el.classList.add('card')

// const cardBody = document.createElement('div')
// cardBody.classList.add('card-body')

// const cardTitle = document.createElement('h5')
// cardTitle.classList.add('cardTitle')
// cardTitle.innerHTML = data[0].name

// const cardText = document.createElement('p')
// cardText.classList.add('card-text')
// cardText.innerHTML = data[0].location

// cardBody.appendChild(cardTitle)
// cardBody.appendChild(cardText)

// el.appendChild(cardBody)

// document.getElementById('here').appendChild(el)
// })

// this grabs the element called primary and the event listener method will do something when the click happens
// a call back function lives within another function