
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
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];

// event listeners
document.getElementById('markers').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init);

// functions
init();
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

// In repsonse to user interaction, update all impacted
// then render
function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    // Guards
    if (colIdx === -1) return;
    // shortcut to the column array
    const colArr = board[colIdx];
    // find the index of the first 0 in colArr
    const rowIdx = colArr.indexOf(0);
    // update the board to state the current player value (turn)
    colArr[rowIdx] = turn;
    // switch player turn
    turn *= -1;
    winner = getWinner(colIdx, rowIdx);
    render();
}

// check for winner in board
// return null if no winner, 1/-2 if a player has won, 'T'
function getWinner(colIdx, rowIdx) {
    return checkVerticalWin(colIdx, rowIdx) ||
    checkHorizontalWin(colIdx,rowIdx);
}

function checkHorizontalWin(colIdx, rowIdx) {
    const adjCountLeft =countAdjacent(colIdx, rowIdx);
    // countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] ; null;
}

// Vertical win
function checkVerticalWin(colIdx, rowIdx) {
    return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null;
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
    // shortcut bariable to the player value
    const player = board[colIdx][rowIdx];
    // Track count of adjacent cells with the same player value
    let count = 0;
    // initialise new coordinates
    colIdx += colOffset;
    rowIdx += rowOffset;
    while (
        // Ensure colIDX is within bounds of the board array
        board[colIdx] !== undefined &&
        board[colIdx][rowIdx] !== undefined &&
        board[colIdx][rowIdx] === player
        ) {
        count++;
        colIdx += colOffset;
        rowIdx += rowOffset;
    }
    return count;
}

function renderBoard() {
    board.forEach(function (colArr, colIdx) {
        colArr.forEach(function (cellVal, rowIdx) {
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
    // <cond expression> ? truthy exp> : <falsy exp>
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
    // Iterate over the marker elements to hide/show
    // according to the column being full (no 0s) or not
    markerEls.forEach(function (markerEl, colIdx) {
        const hideMarker = !board[colIdx].includes(0) || winner;
        markerEl.style.visibility = hideMarker ? 'hidden' : ' visible'
    });
}

