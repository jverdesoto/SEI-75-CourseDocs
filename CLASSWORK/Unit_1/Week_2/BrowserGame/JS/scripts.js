
/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange',
}

/*----- state variables -----*/
let board; // array of 7 col arrays
let turn;  // 1 or -1
let winner;  // null = no winner; 1 or -1 winner; 'T' = ties

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handledrop);
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/
init();

//Initialize all state, then call render()
function init() {
// to visualize the board mapping in the DOM
// rotate the board array 90 degrees counter clockwise
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

// In response to user interation, update all impacted
// state, then call render
function handledrop(e) {
    const colIdx = markerEls.indexOf(e.target);
    // Guards...
    if (colIdx === -1) return
    // Shortcut to column array
    const colArr = board[colIdx];
    // Find the index of the first 0 in colArray
    const rowIdx = colArr.indexOf(0);
    // Update board state with the current player value (turn)
    colArr[rowIdx] = turn;
    // Switch player turn
    turn *= -1; //turn = turn * -1;
    // Check for winner
    winner = getWinner() 
    


    render();
}

// Visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    // Hide and show UI elements (controls)
    renderControls();
}

function renderBoard(){
    board.forEach(function(colArr, colIdx) {
        // Iterate over the cells in the cur column (colArray)
        colArr.forEach(function(cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];     
        });
    });
}

function renderMessage(){
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!";
    } else if (winner){
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
    } else {
        // Game is in play
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
    }
}

function renderControls(){
    // Ternary expression is the go to when you want 1 of 2 values returned
    // <conditional expression> ? <truthy exp> : <falsy exp>
    playAgainBtn.style.visibility = winner ? 'visible': 'hidden';
    // Iterate over the marker elements to hide/show
    // according to column being full (no 0's) or not
    markerEls.forEach(function(markerEls, colIdx) {
        const hideMarker = !board[colIdx].includes(0) || winner;
        markerEls.style.visibility = hideMarker ? 'hidden' : 'visible';
     });
}

