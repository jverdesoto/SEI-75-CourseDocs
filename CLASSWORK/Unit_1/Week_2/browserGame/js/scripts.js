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
const markerEls = [...document.querySelectorAll('#markers > div')];

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init)

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

// In response to user interaction, update all impacted state, then
// call render();
function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    // Guards...
    if(colIdx === -1 || winner) return;
    // Shortcut to the column array
    const colArr = board[colIdx];
    // Find index of the first 0 in colArr
    const rowIdx = colArr.indexOf(0);
    // Update the board state with current player value (turn)
    colArr[rowIdx] = turn;
    // Switch player turn
    turn *= -1;
    // Check for winner 
    winner = getWinner(colIdx, rowIdx);
    render();
}

// Check for winner in board state and return null
// if no winner, 1/ -1 if a player has won, or 'T' if tie
function getWinner(colIdx, rowIdx) {
    return checkVerticalWin(colIdx, rowIdx) ||
    checkHorizontalWin(colIdx, rowIdx);
}

function checkHorizontalWin(colIdx, rowIdx){
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0);
    const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
    return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null;
}

function checkVerticalWin(colIdx, rowIdx){
    return countAdjacent(colIdx, rowIdx, 0, -1 ) === 3 ? board[colIdx][rowIdx] : null;
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
    // Shortcut variable to the player value
    const player = board[colIdx][rowIdx];
    // Track count of adjancent cells with same player value
    let count = 0;
    // Initialise new coordinates
    colIdx += colOffset;
    rowIdx += rowOffset;
    while (
        // Ensure colIdx is within bounds of the board array
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

