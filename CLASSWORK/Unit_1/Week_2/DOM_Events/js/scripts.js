// Respond to submit button
document.getElementById("submit-button").addEventListener("click", () => {
    // Get name & email input from form
    const nameInput = document.getElementById("inputName")
    const name = nameInput.value
    const emailInput = document.getElementById("inputEmail")
    const email = emailInput.value
    
    // Add name & email to modal
    const modalBody = document.querySelector(".modal-body")
    modalBody.innerHTML = `
        <p>Name: ${name}</p> 
        <p>Email: ${email}</p>
    `
})