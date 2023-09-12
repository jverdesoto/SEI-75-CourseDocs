const data = [
    {
        name: 'Rick',
        location: '<strong>London</strong>'
    },
    {
        name: 'Andy',
        location: 'Quito'
    }
]

document.getElementById('primary').addEventListener('click', () => {
    document.getElementById('secondary').innerHTML = 'You betrayed me'

    const el = document.createElement('div')
    el.classList.add('card')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = data[0].name

    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerHTML = data[0].location

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)

    el.appendChild(cardBody)

    document.getElementById('here').appendChild(el)
})