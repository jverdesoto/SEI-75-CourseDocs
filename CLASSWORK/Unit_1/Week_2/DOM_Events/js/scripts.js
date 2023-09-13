



 
//    const fullName = document.getElementById("inputName").value;

//     const emailAddress = document.getElementById("inputEmail").value; 

    

// document.getElementById('submitBtn').addEventListener('click', (event) => {
//     event.preventDefault()

//     const fullName = document.getElementById("inputName").value;
//     const emailAddress = document.getElementById("inputEmail").value;

 //   const el = document.getElementById('')
//    el.classList.add('modalContainer')
   
//     const modalFade = document.createElement('div')
//     modalFade.classList.add('modal', 'fade')
//     modalFade.setAttribute('id', 'fade')
//     modalFade.setAttribute('area-hidden', 'false')

//     const modalEl = document.createElement('div')
//     modalEl.classList.add('modal-header')

//     const modalTitle = document.createElement('h1')
//     modalTitle.classList.add('modal-title')
//     modalTitle.innerHTML = 'Hello'
    // const modalTitle = document.createElement('h5')
    //    modalTitle.classList.add('modal-title')
    //    modalTitle.innerHTML = 'Hello'
    


    // const modalText = document.createElement('p')
    // modalText.classList.add('modal-body')
    // modalText.innerHTML = `${fullName},  ${emailAddress}`

    // const modalClose = document.createElement('button')
    // modalClose.classList.add('btn', 'btn-secondary')
    // modalClose.innerHTML = 'Close'

    // el.appendChild(modalEl)
    // el.appendChild(modalTitle)
    // el.appendChild(modalBody)
    // el.appendChild(modalClose)

    // document.getElementById('container').appendChild(el)
   
    document.getElementById('formSaveButton').addEventListener("click", (e) => {
        e.preventDefault()
        
    
        
        const myModal = new bootstrap.Modal(document.getElementById("myModal"))
        myModal.show()
    
        document.querySelector(".modal-title").innerHTML = "Hello"
    
        let name = document.getElementById("nameInput").value
        console.log(name);
        let email = document.getElementById("exampleInputEmail1").value
    
        function bodyMaker () {
            return `${name}, ${email}`
        }
    
        document.querySelector(".modal-body").innerHTML = bodyMaker()
    })
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    






