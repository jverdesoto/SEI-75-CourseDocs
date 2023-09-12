// document.getElementById("primary").addEventListener("click", () => {
//     document.getElementById("secondary").innerHTML = "You betrayed me"
// } )

document.getElementById('formSaveButton').addEventListener("click", (e) => {
    e.preventDefault()
    

    
    const myModal = new bootstrap.Modal(document.getElementById("myModal"))
    myModal.show()

    document.querySelector(".modal-title").innerHTML = "Hello"

    let name = document.getElementById("nameInput").value
    console.log(name);
    let email = document.getElementById("exampleInputEmail1").value

    function bodyMaker () {
        return `${name} (${email})`
    }

    document.querySelector(".modal-body").innerHTML = bodyMaker()
})
