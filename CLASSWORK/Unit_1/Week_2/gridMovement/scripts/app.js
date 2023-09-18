function init() {

//! VARIABLES & ELEMENTS

//? ELEMENTS
//CREATE GRID
const grid = document.querySelector('.grid')


//? VARIABLES
//BOARD CONFIG
const width = 10
const height = 10
const cellCount = width*height
let cells = [] //we will be able to iterate through this to access the index of the cell we want

//CHARACTER CONFIG
const startingPosition = 0
let currentPosition = startingPosition

//! FUNCTIONS

//? CREATE GRID CELLS
function createGrid(){
    //use cell count to create our grid cells
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div')
        //add index to each cell
        cell.innerText = i
        cell.dataset.index = i //same as setAttribute
        //add the height and width to each grid cell(div)
        cell.style.height = `${100 / height}`
        cell.style.width = `${100 / width}`
       //add cell to grid
        grid.appendChild(cell)
        //add new cell to cells array
        cells.push(cell)
        }
       

        //add cat character class to starting position
        addCat(startingPosition)
}

//? ADD CAT CLASS
function addCat(position){
    cells[position].classList.add('cat')
}

//? REMOVE CAT CLASS
function removeCat(position){
    cells[currentPosition].classList.remove('cat')
}


//? HANDLE MOVEMENT
function handleMovement(event){
    
    const key = event.keyCode
    const up = 38
    const down = 40
    const left = 37
    const right = 39

    //remove the cat before updating the code
    removeCat(currentPosition)

    
    //check which key was pressed and run code
    if(key === up && currentPosition >= width){
        currentPosition -= width
    }
    else if (key === down && currentPosition + width <= cellCount -1){
       currentPosition += width
    }
    else if (key === right && currentPosition % width !== (width -1)){
        currentPosition += 1
    }
    else if (key === left && currentPosition % width !== 0){
        currentPosition -= 1
    }
    else{ 
        console.log('invalid key')

    }

    addCat(currentPosition)
}


//! EVENTS
document.addEventListener('keydown', handleMovement)

//! PAGE LOAD
createGrid()
}



window.addEventListener('DOMContentLoaded', init)