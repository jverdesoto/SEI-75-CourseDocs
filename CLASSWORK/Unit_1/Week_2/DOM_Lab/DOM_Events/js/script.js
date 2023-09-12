// document.getElementById('primary').addEventListener('click', () => {
//     document.getElementById('primary').innerHTML = 'You clicked me!'
//     document.getElementById('secondary').innerHTML = 'You betrayed me'

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
// }
// )

// const data = [
//     {
//         name: 'Rick',
//         location: 'London'
//     },
//     {
//         name: 'Andy',
//         location: 'Quito'
//     }
// ]



document.getElementById('myButton').addEventListener("click", (e) => {
    e.preventDefault(); 
    // Getting my references to input fields and modal content
    const nameInput = document.getElementById("exampleInputName");
    const emailInput = document.getElementById("exampleInputEmail1");
    const modalName = document.getElementById("modalName");
    const modalEmail = document.getElementById("modalEmail");

        // Get the entered name and email values
        const name = nameInput.value;
        const email = emailInput.value;

        // Update the modal  with the entered name and email
        modalName.innerText = name;
        modalEmail.innerText = email;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
    
});
