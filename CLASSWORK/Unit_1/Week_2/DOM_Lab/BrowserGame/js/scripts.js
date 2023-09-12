// ??constants 
 const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
 }


// state variables
let board; // array of 7 columns arrays
let turn; // 1 or -1 show which player
let winner; // null = no winner, 1 or -1 = a winner, or 'T' = tie game.


// ??cached ElementInternals



// ??event listeners



// ??functions
init();

// initialiase all state, then call render
function init () {
    //to visualise the array below to the one rendered
    //turn your head anti clockwise 90 degress ;)
    board = [
        [1, 0, 0, 0, 0, -1], // this is column 0 i.e. the first column
        [0, 0, 0, 0, 0, 0], // this is column 1 
        [0, 0, 0, 0, 0, 0], // this is column 2
        [-1, 0, 0, 0, 0, 0], // this is column 3
        [0, 0, 0, 0, 0, 0], // this is column 4
        [0, 0, 0, 0, 0, 0], // this is column 5
        [0, 0, 0, 0, 0, 1], // this is column 6

    ];
    turn=1;
    winner=null;
    render();
};

// visualise all states in the DOM
function render () {
    renderBoard();
    renderMessage();
    renderControls();
    // ^^ this show/hides UI elements (controls)

}

function renderBoard (){
    board.map(function (colArr, colIndex) {
    //  iterate over the cells in the cur column (colArr)
    colArr.map(function (cellValue, rowIndex) {
console.log(colIndex, rowIndex, cellValue);
        const cellId = `C${colIndex}R${rowIndex}`
        const CellEll = document.getElementById(cellId);
        CellEll.style.backgroundColor = COLORS[cellValue];
    })
 })
};

function renderMessage () {

};

function renderControls () {

};


