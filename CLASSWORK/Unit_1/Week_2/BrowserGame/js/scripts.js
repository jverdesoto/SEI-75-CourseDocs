//! Constants


//! State Variables
let board; // array of 7 columns
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 winner; 'T' = Tie game


//! Cached elements


//! event listeners 


//! functions
init()

// Initialize all state, then call render()
function init() {
    // To visualise the boards mapping to the DOM
    // Rotate the board array 90d anti-clockwise
    board = [
        [1, 0, 0, 0, 0, -1], // col 0
        [0, 0, 0, 0, 0, 0], // col 1
        [0, 0, 0, 0, 0, 0], // col 2
        [-1, 0, 0, 0, 0, 0], // col 3
        [0, 0, 0, 0, 0, 0], // col 4
        [0, 0, 0, 0, 0, 0], // col 5
        [0, 0, 0, 0, 0, 1], // col 6
    ];
    turn = 1;
    winner = null;
    render();
}

// Visualise all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    // Hide/Show UI elements (controls)
    renderControls();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        // Iterate over the cells in the cur column (colArr)
        colArr.forEach(function(cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
        })
    });
}

function renderMessage() {

}

function renderControls() {

}