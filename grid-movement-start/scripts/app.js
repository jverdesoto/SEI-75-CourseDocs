function init() {

    //! VARIABLES & ELEMENTS

    //? ELEMENTS
     //CREATE GRID
     const grid = document.querySelector('.grid')
     //console.log(grid)

    //? T VARIABLES
     
     //CONFIG
     const width = 20
     const height = 20
     const cellCount = width * height
     let cells = []

     //CHARACTER CONFIG
     const startingPosition = 209
     let currentPosition = 209

     //! FUNCTINS
     //CREATE GRID CELLS
      //Use the cell count to create grid cells
      for (let i = 0; i < cellCount; i++){
        // create div cell
        const cell = document.createElement('div')
        // add index to div element
        // cell.innerText = i
        // Add index as an atribute
        cell.dataset.id = i
        // ADD height & width to each cell
        cell.style.height = `${100 / height}%` 
        cell.style.width =  `${100 / width}%`
        // Add cell to grid
        grid.appendChild(cell)
        // add newly created div cells to our cells array
        cells.push(cell)
      }

      // Add cat Character class to starting poitions
      addCat(startingPosition)
    

    //? ADD CAT CLASS
    function addCat (position) {
        cells[position].classList.add('cat')
    }

    //? REMOVE CAT CLASS
    function removeCat(){
        cells[currentPosition].classList.remove('cat')
    }

    //? Handle movement 
    function handleMovement(event) {
        
        
        const key = event.keyCode
        const up = 38
        const down = 40
        const left = 37
        const right = 39

        // Remove cat from current pos before updating currentPosition
        removeCat()

        // Check which key was pressed and execute code
        if (key === up && currentPosition >= width) {
            console.log('UP')
            currentPosition-=width
        } else if (key === down && currentPosition + width <= cellCount - 1){
            console.log('DOWN')
            currentPosition+=width
        } else if (key === left && currentPosition % width !== 0){
            console.log('LEFT')
            currentPosition--
        } else if (key === right && currentPosition % width !== width - 1){
            console.log('RIGHT')
            currentPosition++
        } else {
            console.log('INVALID KEY')
        }

        //Add cat class once currentPostion has been updated 
        addCat(currentPosition)
    }

    //! EVENTS
    document.addEventListener('keyup', handleMovement)

    //! PAGE LOAD
    //createGrid() // create grid

}








window.addEventListener('DOMContentLoaded', init)