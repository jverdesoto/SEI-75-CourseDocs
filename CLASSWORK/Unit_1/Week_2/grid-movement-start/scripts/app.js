function init() {
// ! Variables and Elements

// ? Elements
//CREATE GRID
const grid = document.querySelector(".grid")




// ? Variables
// board config
const width = 10
const height = 10
const cellCount = width * height
let cells = []

// charac config

const startingPosition = 0
let currentPosition = startingPosition



//! Functions
//CREATE GRID CELLS()
function createGrid(){
//Use the cellCount to create our grid cells
for (let i = 0; i < cellCount; i++){
    //create div cell
    const cell = document.createElement('div')
    
    // add index to div element
    cell.innerText = i
    
    //add index as attribute
    cell.dataset.index  = i
    // Add the height and widh to each grid cell (div)
    cell.style.height = `${100 / height}%`
    cell.style.width = `${100 / width}%`
    
    
    //add ceel to grid
    grid.appendChild(cell)
    // Add newly created div cell to celss array
    cells.push(cell)
    }
    // add cat charac to start pos
addCat(startingPosition)
}

//? ADD CAT CLASS
function addCat(position){
console.log("CAT added to POSITION", position)
cells[position].classList.add('cat')
}

 // ?REMOVE CAt CLASS
 function removeCat(){
    console.log('cat remove')
    cells[currentPosition].classList.remove('cat')
 }
//?  Handle MOvement

function handleMovement (event) {
    console.log(event.keyCode)
    const key = event.keyCode
    const up = 38
    const down = 40
    const left = 37
    const right = 39
   // remove cat from prev pos b4 update new pos
   
   removeCat()
   
    // check which key was pressed and excute code
    if (key === up  && currentPosition >= width) {
        console.log("up")
        currentPosition -= width
    } else if (key === down && currentPosition + width <= cellCount - 1) {
        console.log('down')
        currentPosition += width
    } else if (key === left && currentPosition % width !== 0 ) {
        currentPosition--
        console.log('left')
    } else if (key === right && currentPosition % width !== width -1) {
        currentPosition++
        console.log('right')
        
    } else {
        console.log ('Invalid key')
    }

    addCat(currentPosition)
}



//! Events
document.addEventListener('keyup', handleMovement)
//! pAge Loads
createGrid()

}

window.addEventListener('DOMContentLoaded', init)