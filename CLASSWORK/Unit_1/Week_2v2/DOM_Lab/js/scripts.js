document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    const modalInfo = document.getElementById('modalInfo');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('emailAddress').value;
      modalInfo.innerHTML = `Full Name: ${fullName}<br>Email: ${email}`;
      modal.show();
    });
    const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
  });





// const data = [

//     {

//     }
// ]



// document.getElementById('primary').addEventListener('click', () => {
//     console.log('You clicked me');
//     document.getElementById('secondary').innerHTML = 'You betrayed me';

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


  