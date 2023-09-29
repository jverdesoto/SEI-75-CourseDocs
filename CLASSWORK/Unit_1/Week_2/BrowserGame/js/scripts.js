console.log("Browser Game started");

/*----- constants -----*/
let border; // array of 7 column arrays
let playerTurn; // 1 or -1
let winner; // null = no winner; 1 or -1  = winner; 'T' = tie;

/*----- state variables -----*/
const COLORS = {
    '0':'white',
    '1':'blue',
    '-1':'Orange'
};

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/
init();

// Initializw all state, then call render()
function init(){
    board = [ 
        [0, 0, 0, 0, 0, 0], //column 0
        [0, 0, 0, 0, 0, 0], //column 1
        [0, 0, 0, 0, 0, 0], //column 2
        [0, 0, 0, 0, 0, 0], //column 3
        [0, 0, 0, 0, 0, 0], //column 4
        [0, 0, 0, 0, 0, 0], //column 5
        [0, 0, 0, 0, 0, 0] //column 6
    ];
    
    playerTurn = 1;
    winner = null;
    render();
}

function getWinner(colIdx, rowIdx){
    return checkVerticalWin(colIdx, rowIdx) 
    || checkHorizontallWin(colIdx, rowIdx) 
    || checkDiagonalWinNESW(colIdx, rowIdx)
    || checkDiagonalWinNESE(colIdx, rowIdx);
}

function checkHorizontallWin(colIdx, rowIdx){
    return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null;
}

function checkVerticalWin(colIdx, rowIdx){
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1,0);
    const adjCountRight = countAdjacent(colIdx, rowIdx, 1,0);

    return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null;
}

function checkDiagonalWinNESW(colIdx, rowIdx){
    const adjCountNE = countAdjacent(colIdx, rowIdx, 1,1);
    const adjCountSW = countAdjacent(colIdx, rowIdx, -1,-1);

    return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null;
}

function checkDiagonalWinNESE(colIdx, rowIdx){
    const adjCountNE = countAdjacent(colIdx, rowIdx, -1,1);
    const adjCountSW = countAdjacent(colIdx, rowIdx, 1,-1);

    return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null;
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset){
    const player = board[colIdx][rowIdx];
    let count = 0;
    // Initialize new coordinates
    colIdx += colOffset;
    rowIdx += rowOffset;
    while(board[colIdx] !== undefined && 
        board[colIdx][rowIdx] !== undefined && 
        board[colIdx][rowIdx] === player){
        // Ensure colIdex is within bounds of the board array
        count++;
        colIdx += colOffset;
        rowIdx += rowOffset;
    }
    console.log(player);
    return count;
}

function render(){
    // console.log(`border = ${border}`);
    renderBoard();
    // console.log(`winner = ${winner}`);
    renderMessage();
    // console.log(`trun = ${trun}`);
    renderControls();
}

function renderBoard(){
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx){
            const cellId = `c${colIdx}r${rowIdx}`;
            //console.log(`Cell Id = ${cellId}`);
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
        });
    });
}

function renderMessage(){
    // case if it a tie
    if(winner === 'T'){
        messageEl.innerText = "It's a Tie!!!";
    }// case if there is a winner 
    else if(winner){
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span>'s Wins!`;
    } //in cae of the game still in play
    else{
        messageEl.innerHTML = `<span style="color: ${COLORS[playerTurn]}">${COLORS[playerTurn].toUpperCase()}</span>'s turn`;
    }
}

function renderControls(){
    playAgainBtn.style.visibility = winner ? 'visible': 'hidden';
    // remove the marker when the column is full, there is no place to play on it.
    markerEls.forEach(function(markerEl, colIdx){
        const hideMarker = !board[colIdx].includes(0) || winner;
        markerEl.style.visibility =  !hideMarker ? 'visible': 'hidden';
    });
}

function handleDrop(evt){
    const colIdx = markerEls.indexOf(evt.target);
    //Guards... 
    if(colIdx === -1) return;
    const colArr = board[colIdx];
    const rowIdx = colArr.indexOf(0);
    // update the board state with the cur player value (ture).
    colArr[rowIdx] = playerTurn;
    // switch player turn
    playerTurn *= -1;
    //check for winner
    winner = getWinner(colIdx, rowIdx);

    render();
}
