// --------- constants   --------- //


// --------- state variables  --------- //
let board; // array 7 columns arrays
let turn; // 1 or -1 
let winner; // null = no winner; 1 or -1 = winner; 'T' = tie


// --------- cached elements --------- //


// --------- event listeners --------- //


// --------- functions --------- //
init();


// Initialise all state, then call render()
function init() {

        // imagine the arrays below are rotated 90 degree counter-clockwise and you can visualise the board

    board = [ // don't use 'let board' as otherwise board would only be localised to this function. We want to call the global variable.
        [0, 0, 0, 0, 0, -1], // col 0
        [0, 0, 0, 0, 0, 0], // col 1
        [-1, 0, 0, 0, 0, 0], // col 2
        [0, 0, 0, 0, 0, 0], // col 3
        [0, 0, 0, 0, 0, 0], // col 4
        [0, 0, 0, 0, 0, 1], // col 5
];
    turn = 1;
    winner = null;
    render();
}

//  visualise all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    // hide/show UI elements
    renderControls();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
//  iterate over each of the cells in the cur columns (colArr)
        colArr.forEach(function(cellVal, rowIdx) {
                const cellId = `c${colIdx}r${rowIdx}`;
                const cellEl = document.getElementById(cellId);
 
        console.log(colIdx, rowIdx, cellVal);
    })
    })
}

function renderMessage () {

}

function renderControls() {

}