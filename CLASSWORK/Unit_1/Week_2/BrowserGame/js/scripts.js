/*----- constants -----*/
const colours = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
}

/*----- state variables -----*/
let board //array of 7 column arrays
let turn // 1 or -1
let winner // null = no winner (yet); 1 or -1 winner; 'T' = tie

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init()

// Initialise all state, then call render()
function init() {
    // To visualise mapping of the board to the DOM,
    // Rotate the board array 90 degrees anti-clockwise
    board = [
        [0, 0, 0, 0, 0, 0], // col 0
        [0, 0, 0, 0, 0, 0], // col 1
        [0, 0, 0, 0, 0, 0], // col 2
        [0, 0, 0, 0, 0, 0], // col 3
        [0, 0, 0, 0, 0, 0], // col 4
        [0, 0, 0, 0, 0, 0], // col 5
        [0, 0, 0, 0, 0, 0], // col 6
    ]
    turn = 1
    winner = null
    render()
}

// Visualise all state in the DOM
function render() {
    renderBoard()
    renderMessage()
    // Hide/show UI elements (markers and play again button)
    renderControls()
}

function renderBoard() {
    board.forEach((colArr, colIdx) => {
        // Iterate over the cells in the current column (colArr)
        colArr.forEach((cellVal, rowIdx) => {
            const cellId = `c${colIdx}r${rowIdx}`
            const cellEl = document.getElementById(cellId)
            cellEl.style.backgroundColor = colours[cellVal]
        })
    })
}

function renderMessage() {

}

function renderControls() {

}