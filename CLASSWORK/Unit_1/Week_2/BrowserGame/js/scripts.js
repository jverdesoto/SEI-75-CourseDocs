/*----- constants -----*/
const colours = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
}

/*----- state variables -----*/
let board //array of 7 column arrays
let turn // 1 or -1
let winner // null = no winner (yet); 1 or -1 winner; 'T' = tie

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
// Creates an array from the node list using the spread operator, so that array methods can be used on it
const markerEls = [...document.querySelectorAll('#markers > div')]

/*----- event listeners -----*/
document.getElementById("markers").addEventListener("click", handleDrop)
playAgainBtn.addEventListener("click", init)

/*----- functions -----*/
init()

// Initialise all state, then call render()
function init() {
    // To visualise mapping of the board to the DOM,
    // Rotate the board array 90 degrees anti-clockwise
    board = [
        [0, 0, 0, 0, 0, 0], // col 0
        [0, 0, 0, 0, 0, 0], // col 1
        [0, 0, 0, 0, 0, 0], // col 2
        [0, 0, 0, 0, 0, 0], // col 3
        [0, 0, 0, 0, 0, 0], // col 4
        [0, 0, 0, 0, 0, 0], // col 5
        [0, 0, 0, 0, 0, 0], // col 6
    ]
    turn = 1
    winner = null
    render()
}

// In response to user interaction, update all impacted state
// Then call render()
function handleDrop(evt) {
    // Finds the index of the target of the event - eg. which div was clicked
    const colIdx = markerEls.indexOf(evt.target)
    // Guards...
    if (colIdx === -1) return
    //Shortcut to the column array
    const colArr = board[colIdx]
    // Find the index of the first 0 in colArr
    const rowIdx = colArr.indexOf(0)
    // Update the board state with the cur player value (turn)
    colArr[rowIdx] = turn
    // Switch player turn
    turn *= -1
    // Check for winner
    winner = getWinner(colIdx, rowIdx)
    // Render changes
    render()
}

// Check for winner in board state - return null / 1 / -1 / 'T'
function getWinner(colIdx, rowIdx) {
    return checkVerticalWin(colIdx, rowIdx) ||
        checkHorizontalWin(colIdx, rowIdx) ||
        checkDiagonalWinNESW(colIdx, rowIdx) ||
        checkDiagonalWinNWSE(colIdx, rowIdx)
}

// Functions which check different combinations of offsets for countAdjacent, 
// returning the player or null according to the count
function checkVerticalWin(colIdx, rowIdx) {
    return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null
}

function checkHorizontalWin(colIdx, rowIdx) {
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0)
    const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0)
    return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null
}

function checkDiagonalWinNESW(colIdx, rowIdx) {
    const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1)
    const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1)
    return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null
}

function checkDiagonalWinNWSE(colIdx, rowIdx) {
    const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1)
    const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1)
    return (adjCountNW + adjCountSE) >= 3 ? board[colIdx][rowIdx] : null
}

// Counts numbers which match the current player
function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
    // Shortcut variable to the player value
    const player = board[colIdx][rowIdx]
    // Track count of adjacent cells with the same player value
    let count = 0
    // Initialise new coordinates
    colIdx += colOffset
    rowIdx += rowOffset
    while (
        // Ensure colIdx is within bounds of the board array
        board[colIdx] !== undefined &&
        board[colIdx][rowIdx] !== undefined &&
        // Continue to look for the current player's value
        board[colIdx][rowIdx] === player
    ) {
        count ++
        colIdx += colOffset
        rowIdx += rowOffset
    }

    return count
}

// Visualise all state in the DOM
function render() {
    renderBoard()
    renderMessage()
    // Hide/show UI elements (markers and play again button)
    renderControls()
}

// Determine the background color of each cell, depending on their status in board
function renderBoard() {
    board.forEach((colArr, colIdx) => {
        // Iterate over the cells in the current column (colArr)
        colArr.forEach((cellVal, rowIdx) => {
            const cellId = `c${colIdx}r${rowIdx}`
            const cellEl = document.getElementById(cellId)
            cellEl.style.backgroundColor = colours[cellVal]
        })
    })
}

// Show message - if T, if winner, if game in progress
function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!!"
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${colours[winner]}">${colours[winner].toUpperCase()}</span> Wins!`
    } else {
        messageEl.innerHTML = `<span style="color: ${colours[turn]}">${colours[turn].toUpperCase()}</span>'s Turn`
    }
}

function renderControls() {
    // Hide or show the button depending on winner status (null / 1 / -1 / T)
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden'
    // Hide or show column headers when column is full (no 0s)
    // Iterates through columnEls node list (array)
    markerEls.forEach((markerEl, colIdx) => {
        const hideMarker = !board[colIdx].includes(0) || winner
        markerEl.style.visibility = hideMarker ? 'hidden' : 'visible'
    })
}