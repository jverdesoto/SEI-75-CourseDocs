// --------- constants   --------- //
 const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
 };

// --------- state variables  --------- //
let board; // array 7 columns arrays
let turn; // 1 or -1 
let winner; // null = no winner; 1 or -1 = winner; 'T' = tie


// --------- cached elements --------- //
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = document.querySelectorAll('#markers > div')

// --------- event listeners --------- //
document.getElementById('markers').addEventListener('click', handleDrop);

// --------- functions --------- //
init();


// Initialise all state, then call render()
function init() {

        // imagine the arrays below are rotated 90 degree counter-clockwise and you can visualise the board

    board = [ // don't use 'let board' as otherwise board would only be localised to this function. We want to call the global variable.
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
                cellEl.style.backgroundColor = COLORS[cellVal];       
    });
    });
}

function renderMessage () {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!!";
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`

    } else {

        // Game is in play
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn'`
    }
}

function renderControls() {
        // Ternary exp is go to when you want 1 of 2 values returned
        //<conditional exp> ? <truthy exp> : <falsy exp>

        //How I would code it ->

        // if (winner != null) {
        //     playAgainBtn.style.visibility = 'hidden'
        // } else {
        //     playAgainBtn.style.visibility = 'visible'
        // }
     
        // How instructor would code it --->

 playAgainBtn.style.visibility = winner ? 'visible': 'hidden';
        //  Iterate over the marker elements to hide/show
        // according to the column being full (no 0's) or not
        markerEls.forEach((markerEl, colIdx) => {
            const hideMarker = !board[colIdx].includes(0) || winner;
            markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
        });
}