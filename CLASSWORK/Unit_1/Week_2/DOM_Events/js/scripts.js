// const data = [
//     {
//         name: 'Rick',
//         location: 'Sudbury'
//     },
//     {
//         name: 'Andy',
//         location: 'Quito'
//     }
// ]

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
const btn = document.getElementById('primary')

btn.addEventListener('click', () => {
    btn.style.display = 'none';

    const form = document.createElement('form')
    form.innerHTML = `<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail!" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputName">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">I agree to T&Cs</label>
  </div>
  <button type="button" id="subscribe" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Subscribe
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">You're all set!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="mBody">
        </div>
        <div class="modal-footer">
          <form target="_blank">
            <button type="submit" formaction="/Users/ionut/Desktop/javaScriptIntro/gulpjs/contactCard.html" target="_blank" class="btn btn-secondary" data-bs-dismiss="modal">Contact Card</button>
            <button type="submit" formaction="/Users/ionut/Desktop/javaScriptIntro/gulpjs/gallery.html" target="_blank" class="btn btn-primary">Gallery</button>
          </form>
        </div>
      </div>
    </div>
  </div>
`
document.getElementById('here').appendChild(form)
document.body.style.backgroundColor = 'salmon';
}, {once: true});
const emailInput = email.value
const nameInput = name.value
const email = document.getElementById('exampleInputEmail1');
const name = document.getElementById('exampleInputName');
modalBody = document.getElementById('mBody')
modalBody.innerHTML(`Thank you, ${nameInput}! The ${emailInput} address has been susbcribed to our weekly newsletter. Have a look on more of our projects!`)