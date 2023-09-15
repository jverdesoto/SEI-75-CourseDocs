function init() {

    // ! Variables & Elements

    // ? Elements
    // Create grid
    const grid = document.querySelector('.grid')

    // ? Variables
    // Board Config
    const width = 10
    const height = 10
    const cellCount = width * height
    let cells = []

    // Character Config
    const startingPosition = 0
    let currentPosition = startingPosition

    // ! Functions
    // ? Create grid cells
    function createGrid() {
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div')
            // Add index to div element
            cell.innerText = i
            // Add index as an attribute
            cell.dataset.index = i
            // Add height & width to each grid cell dynamically
            cell.style.height = `${100 / height}%`
            cell.style.width = `${100 / width}%`
    
            // Add cell to grid
            grid.appendChild(cell)
            // Add newly created div cell to cells array
            cells.push(cell)
        }

        // Add cat character to starting position
        console.log(cells)
        addCat(startingPosition)
    }

    // ? Add Cat Class
    function addCat(position) {
        console.log('Cat being added to this cell: ', position);
        cells[position].classList.add('cat')
    }

    // ? Remove Cat Class
    function removeCat() {
        console.log('Cat Removed');
        cells[currentPosition].classList.remove('cat')
    }

    // ? Handle Movement
    function handleMovement(event) {
        const key = event.keyCode

        const up = 87
        const down = 83
        const left = 65
        const right = 68

        // Remove cat from previous position before updating current position
        removeCat()

        console.log(currentPosition, height, currentPosition % height)
        // Check which key was pressed and execute code
        if (key === up && currentPosition >= width) {
            console.log('UP')
            currentPosition -= width
            console.log(currentPosition) 
        } else if (key === down && currentPosition + width <= cellCount - 1) {
            console.log('DOWN')
            currentPosition += width
            console.log(currentPosition) 
        } else if (key === left && currentPosition % width !== 0) {
            console.log('LEFT')
            currentPosition--
            console.log(currentPosition) 
        } else if (key === right && currentPosition % width !== width - 1) {
            console.log('RIGHT')
            currentPosition++
            console.log(currentPosition) 
        } else {
            console.log('INVALID KEY');
        }

        // Add cat class once current position has been updated
        addCat(currentPosition) 
    }

    // ! Events
    document.addEventListener('keydown', handleMovement)


    // ! Page load
    createGrid()


    

}

window.addEventListener('DOMContentLoaded', init)