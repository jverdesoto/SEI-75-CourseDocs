function loadGame() {
  // ! VARIABLE & DOM ELEMENTS

  // ? DOM ELEMENTS
  // CREATE GRID
  const grid = document.querySelector(".grid");
  // console.log(grid)

  // ? VARIABLES
  // BOARD CONFIG how many cells the grid will have
  const width = 10;
  const height = 10;
  const cellCount = width * height;
  let cells = [];

  //CHARACTER CONFIG
  const startingPosition = 0;
  //the below is the same
  // let currentPosition = 0
  let currentPosition = startingPosition;

  // ! FUNCTIONS
  //this function is to start the ga e
  function createGrid() {
    //we know how many cells we can start inputing divs them in our grid
    //CREATE GRID CELLS
    //use the cell count to create our grid cells, for looop
    //i needs to be smalled than cellCount because its starts at 0 and finishes at 99 which is 100
    for (let i = 0; i < cellCount; i++) {
      // console.log(i)
      const cell = document.createElement("div");
      //add index to each cell div elements
      cell.innerText = i;
      //add index as an attribute like cell.id=i for example
      cell.dataset.index = i;
      //ADD THE HEIGHT AND WIDTH TO EACH GRID CELL(DIV)
      //below does it manually but we want to do it dynamically with the confg of the boar size
      // cell.style.height = '10%'
      // cell.style.width = '10%'
      cell.style.height = `${100 / height}%`;
      cell.style.width = `${100 / width}%`;
      //this is the same as above just different way of doing it
      // cell.setAttribute('data-index', i)
      //add cell to grid
      grid.appendChild(cell);
      // Add newly cteated div cells to cells array
      cells.push(cell);
      // console.log(cell)
    }

    // Add cat character class to starting position
    // console.log(cells)
    addCat(startingPosition);
  }

  // ? ADD CAT CLASS
  function addCat(position) {
    console.log("CAT BEING ADDED TO THE FOLLOWING CELL ->", position);
    //add charatcter to starting position by adding a class in the div
    cells[position].classList.add("cat");
  }

  // ? REMOVE CAT CLASS
  function removeCat() {
    console.log("CAT REMOVED");
    cells[currentPosition].classList.remove("cat");
  }

  // ? Handle movement
  //this tracks what key is being pressed on th ekeyboard, we have assinged
  // const to the number of each keyboard key to the direction movement
  function handleMovement(event) {
    // console.log(event)
    // console.log(event.keyCode)
    const key = event.keyCode;
    const up = 38;
    // const wUp = 87
    const down = 40;
    const left = 37;
    const right = 39;

    // Remove cat from previos position before updating current position to new cell
    removeCat();
    console.log(currentPosition, width, currentPosition % width);

    //check wchich key was pressed and execute code
    if (key === up && currentPosition >= width) {
      console.log("UP");
      currentPosition -= width;
    } else if (key === down && currentPosition + width <= cellCount - 1) {
      currentPosition += width;
      console.log("DOWN");
    } else if (key === left && currentPosition % width !== 0) {
      currentPosition--;
      console.log("LEFT");
    } else if (key === right && currentPosition % width !== width - 1) {
      console.log("RIGHT" && currentPosition);
      currentPosition++;
    } else {
      console.log("INVALID KEY");
    }

    //ADD CAT CLASS ONCE CURRENTPOSTION HAS BEEN UPDATED

    addCat(currentPosition);
  }
  // ! EVENTS
  document.addEventListener("keyup", handleMovement);

  // ! PAGE LOADS
  createGrid(); // create grid
}

window.addEventListener("DOMContentLoaded", loadGame);
