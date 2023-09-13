/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
}

/*----- state variables -----*/
let board; // array of 7 column arrays
let turn; // 1 or -1
let winner; // null, 1 or -1 -> winner or T -> for a Tie

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = document.querySelectorAll('#markers > div')

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop)

/*----- functions -----*/
init();

// Initialise all state, then call render()
function init() {
    // To visualise the board's mapping to the DOM,
    // rotate the board array 90 degrees counterclockwise
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
    // Hide/Show UI Elements
    renderControls();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        // Iterate over the cells in the current  column (colArr)
        colArr.forEach(function(cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
            console.log(cellEl);
        })
    })
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!!";
    }else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span>'s Turn`;
    } else {
        // Game is in play
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
    }
}

function renderControls() {
    // Ternary expression is the go to when you want 1 of 2 values returned
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
    // Iterate over the market elements to hide/show
    // according to the column being full or not
    markerEls.forEach(function(markerEl, colIdx) {
        const hideMarker = !board[colIdx].includes(0) || winner;
        markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
    })
}

function handleDrop(evt) {

}
