/* State Variebles:
- turn: 1/-1
- board: 2D array
    null -> no player
    1/-1 -> player at the cell
- winner: 
    null -> no winner/ in play
    1/-1 -> winner
    ,t, -> tie

    /*------ constants -----*/
    const COLORS = {
        '0': 'white',
        '1': 'purple',
        '-1': 'orange'
    };


/*------ state variebles -----*/
let board;  // this will be an array of colimn arrays
let turn;  // 1 or -1
let winner;  // null = no winner; 1 or -1 winner; 'T' = tied game

/*------ cashed elements -----*/
const  messageEl = document.querySelector('h1');
const  playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];


/*------ event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init)


/*------ functions -----*/
init();

// Initialise all state, then call render()
function init() {
    // to visualize the board's mapping to the DOM,
    // rotate the board array 90 degrees counter-clockwise 
    board = [
        [0, 0, 0, 0, 0, 0], //this is collumn 0
        [0, 0, 0, 0, 0, 0], //this is collumn 1
        [0, 0, 0, 0, 0, 0], //this is collumn 2
        [0, 0, 0, 0, 0, 0], //this is collumn 3
        [0, 0, 0, 0, 0, 0], //this is collumn 4
        [0, 0, 0, 0, 0, 0], //this is collumn 5
        [0, 0, 0, 0, 0, 0], //this is collumn 6
    ];
    turn = 1;
    winner = null;
    render();

}

// In responce to use interacton, to update all impacted
// state, then call render();
function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
     // Guards...
    if (colIdx === -1) return;
    // shortcut to the collum array
    const colArr = board[colIdx];
    // find index of the first 0 in collArr
    const rowIdx = colArr.indexOf(0);
    // update board state with current player value (turn)
    colArr[rowIdx] = turn;
    // Switch player turn
    turn *= -1;
    // Check for winner
    winner = getWinner(colIdx, rowIdx);
    render();
}
// Check for winner in board state
// return null if no winner , 1/-1 if a payer has won, 'T' if tie
function getWinner(colIdx, rowIdx){
    return checkVerticalWin(colIdx, rowIdx) ||
        checkHorizontalWin(colIdx, rowIdx) ||
        checkDiagonalWinNESW(colIdx, rowIdx) ||
        checkDiagonalWinNWSE(colIdx, rowIdx);
}
function checkDiagonalWinNWSE(colIdx, rowIdx) {
    const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1)
    const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1)
    return (adjCountNW + adjCountSE) >= 3 ? board[colIdx][rowIdx] : null;
}
function checkDiagonalWinNESW(colIdx, rowIdx) {
    const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1)
    const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1)
    return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null;
}
function checkHorizontalWin(colIdx, rowIdx) {
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0)
    const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0)
    return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null;
}

function checkVerticalWin(colIdx, rowIdx) {
    return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null;
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset){
    // shortcut variable to the player value
    const player = board[colIdx][rowIdx];
    //Track count of the adjacent cells with same player value
    let count = 0;
    //initialize new coordinates
    colIdx += colOffset
    rowIdx += rowOffset
    while (
        // Ensure that the colIdx is whithin bounds of the board array
        board[colIdx] !== undefined &&
        board[colIdx][rowIdx] !== undefined &&
        board[colIdx][rowIdx] === player 
    ) {
        count++;
        colIdx += colOffset
        rowIdx += rowOffset
    }
    return count
}


// Visualise all state in the dom
function render() {
    renderBoard();
    renderMessage();
    // Hide/show Ui elements (controls)
    renderControls();


}

function renderBoard() {
    board.forEach(function (colArr, colIdx) {
        // itirate over the cells in the cur column (colArr)
        colArr.forEach(function (cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
        })


    })
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!!"

    }else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()} Wins!`;
    }
    else {
        //Game is in play
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}'s Turn`;
    }
}

function renderControls() {
    // Ternanry expression is go to want 1 of 2 values returned
    //<conditional expression> ? <truthy expression> : <falsey expression> 
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
    // iterate over the marker el elements to hide/show
    // acording to the column being full or not 
    markerEls.forEach(function(markerEl, colIdx) {
        const hideMarker = !board[colIdx].includes(0) || winner;
        markerEl.style.visibility = hideMarker ? 'hidden' : 'visible'
    });
}
