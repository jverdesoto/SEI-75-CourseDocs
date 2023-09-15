function init() {

    // ! VARIABLES & ELEMENTS

    // ? ELEMENTS
    // CREATE GRID
    const grid = document.querySelector('.grid')

    // ? VARIABLES
    // CONFIG
    const width = 10
    const height = 10
    const cellCount = width * height
    let cells = []

    // CHARACTER CONFIG
    const startPosition = 0
    let currentPosition = startPosition

    // ! FUNCTIONS
    // CREATE GRID CELLS
    function createGrid(){
        // Use the cellCount to create our grid cells
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div')
            // Add index to div element
            cell.innerText = i
            // Add index as an atribute
            cell.dataset.index = i
            // Add the height & width to each grid cell (div)
            cell.style.height = `${100 / height}%`
            cell.style.width = `${100 / width}%`              
            // Add cell to grid
            grid.appendChild(cell)
            // Add a newly created div cell to cells array
            cells.push(cell)
        } 
        addCat(startPosition)
    }
    // ? ADD CAT CLASS
    function addCat(position) {
    // Add cat character class to starting position
    cells[position].classList.add('cat')  
    }

    // ? REMOVE CAT CLASS
    function removeCat() {
        console.log('CAT REMOVED')
        cells[currentPosition].classList.remove('cat')
    }

    // ? HANDLE MOVEMENT
    function handleMovement(event) {
        const key = event.keyCode

        const up = 38
        const down = 40
        const left = 37
        const right = 39
        
        // Remove cat from previous positions before updating current position to new cell
        removeCat()

        console.log(currentPosition, width, currentPosition % width)
        
        // Check wich key was pressed and execute code
        if (key === up && currentPosition >= width) {
            console.log('UP')
            currentPosition -= width
        } else if (key === down && currentPosition + width >= cellCount - 1) {
            console.log('DOWN'); 
            currentPosition += width           
        }else if (key === left && currentPosition % width !== 0) {
            console.log('LEFT');
            currentPosition--
        }else if (key === right && currentPosition % width !== width - 1) {
            console.log('RIGHT');            
            currentPosition++
        }else {
            console.log('INVALID KEY');
        }
        // Add cat class once currentPosition
        addCat(currentPosition)
    }
    

    // ! EVENTS
    document.addEventListener('keyup', handleMovement)

    // ! PAGE LOAD
    createGrid()

}


window.addEventListener('DOMContentLoaded', init)