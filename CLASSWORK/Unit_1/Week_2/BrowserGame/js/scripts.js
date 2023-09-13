// constants 

const colors = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
}

// state variables

let board; // array of 7 col arrays
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 = winner; 'T' = tie game

// cached elements 

const messageElement = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const markerElements = [...document.querySelectorAll('#markers > div')]  //turned a node list into an array


// event listeners

document.getElementById('markers').addEventListener('click', handleDrop)
playAgainBtn.addEventListener('click', init)


// functions
init();

// initialize all state, then call render()
function init(){
    //to visualize the board's mapping to the DOM
    //rotate the board anti-clockwise
    board = [
        [0, 0, 0, 0, 0, 0], // col 0
        [0, 0, 0, 0, 0, 0], // col 1
        [0, 0, 0, 0, 0, 0], // col 2
        [0, 0, 0, 0, 0, 0], // col 3
        [0, 0, 0, 0, 0, 0], // col 4
        [0, 0, 0, 0, 0, 0], // col 5
        [0, 0, 0, 0, 0, 0], // col 6
    ];
    turn = 1;
    winner = null;
    render();
}

//visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    //hide or show UI elements(controls - play again, marker elements)
    renderControls();  
}

function renderBoard(){
    board.forEach((columnArr, columnIndex) => {
        //iterate over the cells in the current column
        columnArr.forEach((cellValue, rowIndex) => {
            const cellId = `c${columnIndex}r${rowIndex}`
            const cellElement = document.getElementById(cellId);
            cellElement.style.backgroundColor = colors[cellValue]
        });
    });
}

function renderMessage(){
    if (winner === 'T'){
        messageElement.innerText = "it's a tie!"
    }
    else if (winner) {
        messageElement.innerHTML = `<span style="color: ${colors[winner]}">${colors[winner].toUpperCase()}</span> WINS!`
    }
    else {
        messageElement.innerHTML = `<span style="color: ${colors[turn]}">${colors[turn].toUpperCase()}</span>'s turn`
    }
}

function renderControls(){
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden' 

    //hide/show markers if column is full or not
    markerElements.forEach((marker, columnIndex) => {
        const hideMarker = !board[columnIndex].includes(0) || winner;
        marker.style.visibility = hideMarker ? 'hidden' : 'visible'
    });
}


//user interaction, update all impacted state, then call render
function handleDrop(event) {
    const columnIndex = markerElements.indexOf(event.target)

    //Guards
    if (columnIndex === -1){
        return //return the value, stop that function from running
    }

    //shortcut to the column array
    const columnArr = board[columnIndex]
    //find index of the first zero in that column array
    const rowIndex = columnArr.indexOf(0)

    //update the board with the current player value
    board[columnIndex][rowIndex] = turn

    //switch player turn
    turn *= -1

    //check for winner
    winner = getWinner()
    render()
}

//check for winner in board state
//return null if no winner, 1 or -1 if a player has won, 'T' if tie
function getWinner(columnIndex, rowIndex) {
    return checkVerticalWin(columnIndex, rowIndex)
}

function checkVerticalWin(columnIndex, rowIndex){
    return countAdjacent(columnIndex, rowIndex, 0, -1) === 3 ? board[columnIndex][rowIndex] : null
}

function countAdjacent(columnIndex, rowIndex, columnOffset, rowOffset) {
    //what is the player value?
    const player = board[columnIndex][rowIndex];
    //track count of adjacent cells with the same player value
    let count = 0

    //initialize new coordinates
    columnIndex += columnOffset
    rowIndex += rowOffset
    
    while (
        //make sure we are looking at columnIndex that is within bounds of the board array
        board[columnIndex] !== undefined && 
        board[columnIndex][rowIndex] !== undefined &&
        board[columnIndex][rowIndex] === player
        ) {
        count ++
        columnIndex += columnOffset
        rowIndex += rowOffset
    }
    return count
    
}