
// constants
const COLOURS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange',
}
// state variables
let board; // array of 7 column arrays
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 = winner; 'T' = Tied game



// cached elements
const messageEl = document.querySelector('h1');

// event listeners

// functions

// Initialise all state, then call render()
function init() {
    // To visualise the board's mapping to the DOM,
    // rotate the board array -90 degrees. 
    board = [
        [0, 0, 0, 0, 0, 0], //column 0
        [0, 0, 0, 0, 0, 0], //column 1
        [0, 0, 0, 0, 0, 0], //column 2
        [0, 0, 0, 0, 0, 0], //column 3
        [0, 0, 0, 0, 0, 0], //column 4
        [0, 0, 0, 0, 0, 0], //column 5
        [0, 0, 0, 0, 0, 0], //column 6
    ];
    turn = 1;
    winner = null;
    render();
}
// Visualise all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    // Hise/show UI elements (controls)
    renderControls();
}

function renderBoard() {
    board.forEach(function (colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx){
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLOURS[cellVal];
        });
    });
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!!";
    } else if (winner) {
        messageEl.innerHTML = `<span style="color:${COLOURS[winner]}">${COLOURS[winner].toUpperCase()}</span> WINS!`;
    } else {
        // game in play
        messageEl.innerHTML = `<span style="color:${COLOURS[turn]}">${COLOURS[turn].toUpperCase()}</span>'s Turn`;
    }
}

function renderControls() {
 // Ternary expression is the go to when you want 1 of 2 values returned
}