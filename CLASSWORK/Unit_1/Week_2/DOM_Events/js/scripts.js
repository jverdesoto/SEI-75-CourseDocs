/*
const data = [
    {
        name: 'John',
        location:'From Space'
    },
    {
        name: 'The Rock',
        location: 'From the Mountain'
    }
]

document.getElementById('primary').addEventListener('click', () => {
    console.log('You clicked me')
    document.getElementById('secondary').innerHTML = 'You betrayed me'

    const el = document.createElement('div')    
    el.classList.add('card')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = data[1].name

    const cardText =document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerHTML = data[1].location

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)

    el.appendChild(cardBody)

    document.getElementById('here').appendChild(el)
})
*/
/*
const submitButton = document.getElementById('submit');
const myModal = new bootstrap.Modal(document.querySelector('.modal'));

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  // Get the email input value
  const emailInput = document.getElementById('exampleInputEmail1').value;

  // Change the modal body text
  const modalBody = myModal._element.querySelector('.modal-body');
  modalBody.textContent = `Thank you for submitting your email: ${emailInput}`;

  const modalTitle = document.querySelector('.modal-title');
  modalTitle.textContent = 'Hello!';

  // Show the modal
  myModal.show();
});*/


const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default form submission

  //had to break this in two
  const myModal = document.querySelector('.modal'); 
  const bootstrapModal = new bootstrap.Modal(myModal); // Create a Bootstrap modal instance

  myModal.addEventListener('shown.bs.modal', () => {
    const myInput = document.getElementById('exampleInputEmail1'); // Select the input field inside the modal
    
    // Change the text content of the modal body
    const modalBody = document.querySelector('.modal-body');
    modalBody.textContent = 'Thank you for submiting. Please check your email for further details';
    //Change the modal welcome
    const modalTitle = document.querySelector('.modal-title');
    modalTitle.textContent = `Hello ${myInput.value}!`;
  });

  bootstrapModal.show(); // Show the modal using Bootstrap's show method
});


