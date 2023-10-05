function init() {
    // ! Variables and Elements
    // ? elements
    // create grid
    const grid = document.querySelector('.grid')
    // ? variables
    //  config
    const width = 10
    const height = 10
    const cellCount = width * height
    let cells = []
    // character config
    const startingPosition = 0
    let currentPosition = startingPosition
    // meow
    const meowSound = document.getElementById('meowSound');

    // ! Functions
    // create grid cells
    function createGrid() {
        // use the cellCount to create our grid cells
        for (let i = 0; i < cellCount; i++) {
            // create div cell
            const cell = document.createElement('div')
            // add index to div element
            cell.innerText = i
            // add index as an attribute
            cell.dataset.index = i
            // add the height and width to each grid cell (div)
            cell.style.height = `${100 / height}%`
            cell.style.width = `${100 / width}%`
            // add cell to grid
            grid.appendChild(cell)
            // add newly created div cell to array 
            cells.push(cell)
        }
        // add cat character class to starting position
        addCat(startingPosition)

    }

    // ? add cat class
    function addCat(position) {
        console.log('CAT BEING ADDED TO THE FOLLOWING CELL ->', position)
        cells[position].classList.add('cat')
    }

    // ? remove cat class
    function removeCat() {
        console.log('CAT REMOVED')
        cells[currentPosition].classList.remove('cat')
    }
    
    // ? Handle movement
    function handleMovement(event) {

        const key = event.keyCode
        const up = 38
        const down = 40
        const left = 37
        const right = 39


        // remove cat from previous position before updating current position
        removeCat()
        // check which key was pressed and execute code
        if (key === up && currentPosition >= width) {
            console.log('UP')
            currentPosition -= width
        } else if (key === down && currentPosition + width <= cellCount - 1) {
            console.log('DOWN')
            currentPosition += width
        } else if (key === left && currentPosition % width !== 0) {
            console.log('LEFT')
            currentPosition--
        } else if (key === right && currentPosition % width !== -1) {
            console.log('RIGHT')
            currentPosition++
            console.log(currentPosition)
        } else {
            console.log('INVALID KEY')
        }


        // add cat class once currentPosition has been updated
        addCat(currentPosition)
        meowSound.currentTime = 0;
        meowSound.play();
        

    }
    // ! events
    document.addEventListener('keydown', handleMovement)
    // ! page load
    createGrid() // create grid

}

window.addEventListener('DOMContentLoaded', init)