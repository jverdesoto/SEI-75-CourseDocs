// Constants
const COLORS = {
 '0': 'white',
 '1': 'purple',
 '-1': 'orange'
};

// State variables
let board; // array of 7 collumns
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 = winner; 'T' = tie



// Cached elements
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = document.querySelectorAll('#markers > div');
// Event listeners
document.getElementById('markers').addEventListener('click', handleDrop)

// Functions
init();

// Initialize all state, then call render()
function init() {
    // To visualize the board's mapping to the DOM.
    // (Rotate the board array 90 degrees counter-clockwise)
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

function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    // Guards
    if (colIdx === -1) return;
    // shortcut to the column array
    const colArr = board[colIdx];
    // find the index of the first 0 in colArr
    const rowIdx = colArr.indexOf(0);
    // update the board state with the current player value (turn)
    colArr[rowIdx] = turn;
    // switch player turn
    turn *= -1; // turn = turn * -1;
    // check for winner
    winner = getWinner();
    render();
    }

    function getWinner(){
        
    }

// Visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    // Hide/show UI elements (controls)
    renderControls();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        
     colArr.forEach(function(cellVal, rowIdx) {
        const cellId = `c${colIdx}r${rowIdx}`;
        const cellEl = document.getElementById(cellId);
        cellEl.style.backgroundColor = COLORS[cellVal];
    });
    });
}

function renderMessage() {
    if (wiiner === 'T') {
        messageEl.innerText = "It's a tie!";
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
    } else {
        //game is in play
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
    }
}

function renderControls() {
// Ternary expression is the go to when you want 1 of 2 values returned
// <condition exp> ? <truthy exp> : <falsy exp>    
    playAgainBtn.style.visibility = winner ? 'visible': 'hidden';
    // Iterate over the marker elements to hide/show
    // according to the column being full (no 0's) or not
    markerEls.forEach(function(markerEl, colIdx){
        const hideMarker = !board[colIdx].includes(0) || winner;
        markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
});
}
