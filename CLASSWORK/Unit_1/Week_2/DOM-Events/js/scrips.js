// document.getElementById('primary').addEventListener('click', ()=>{
//     document.getElementById('secondary').innerHTML = 'you betrayed me'
//     const el = document.createElement('div')
//     el.classList.add('card')
//     const cardBody = document.createElement('div')
//     cardBody.classList.add('card-body')
//     const cardTitle = document.createElement('h5')
//     cardTitle.classList.add('card-title')
//     cardTitle.innerHTML = data[0].location

//     cardBody.appendChild(cardTitle)
//     cardBody.appendChild(car)
// })

document.getElementById('btn').addEventListener('click',() =>{

    let btn = document.getElementById("exampleInputEmail1")
    let val = btn.value
    // console.log(val);
 document.getElementById('exampleModalLabel').innerHTML = `<h2>${val}</h2>`
    let yourName = document.getElementById("exampleInputPassword1")
    let nameval = yourName.value
    document.getElementById('modelBody').innerHTML = `<p>And your name is <b>${nameval}</b></p>`


//     const el = document.getElementById('exampleModalLabel')
//     el.document.createElement('p')
// //    const extra = document.createElement('p')
   
//     el.appendChild(`<p>And your name is <b>${val}</b></p>`)
    



})