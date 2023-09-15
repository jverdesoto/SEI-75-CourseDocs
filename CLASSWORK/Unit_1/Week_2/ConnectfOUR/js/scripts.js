/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange',
}
 

 

/*----- state variables -----*/
let board; //array of 7 col arrays
let turn; // 1 or -1
let winner; // null= no w; 1 or -1= win; "T"= tied game;


 

 

/*----- cached elements  -----*/

 const messageEL = document.querySelector('h1');
 const PlayAgainBtn = document.querySelector('button');
 const markerEls = [...document.querySelectorAll('#markers > div')];

 

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);
 PlayAgainBtn.addEventListener('click', init);

 

/*----- functions -----*/
init();

function init() {

board= [
    [0,0,0,0,0,0], //column 0
    [0,0,0,0,0,0], //column 1
    [0,0,0,0,0,0], //column 2
    [0,0,0,0,0,0], //column 3
    [0,0,0,0,0,0], //column 4
    [0,0,0,0,0,0], //column 5
    [0,0,0,0,0,0], //column 6
];
turn = 1;
winner = null;
render();
}
function handleDrop (evt) {
const colIdx = markerEls.indexOf(evt.target);
//guards...
if(colIdx === -1) return;
//shortcuts to the column array
const colArr = board[colIdx];
// find the inddex of the first 0 in colorArr
const rowIdx = colArr.indexOf(0);
//update the board state with the cur player
colArr[rowIdx] = turn;
//switch player turn
turn *= -1; //(turn = turn * -1)
// check for winner
winner = getWinner(colIdx,rowIdx);
render ();
}

// check for winner (null, tie, p1/-1)
function getWinner (colIdx,rowIdx) {
 return checkVerticalWin(colIdx,rowIdx) ||
        checkHorizontalWin (colIdx, rowIdx) ||
        checkDiagonalWinNESW (colIdx, rowIdx) ||
        checkDiagonalWinNWSE (colIdx, rowIdx);
}
function checkDiagonalWinNWSE(colIdx,rowIdx) {
     const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1);
     const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1);
return (adjCountNW + adjCountSE) === 3 ? board[colIdx][rowIdx] : null;
}

function checkDiagonalWinNESW(colIdx,rowIdx) {
     const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1);
     const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1);
return (adjCountNE+ adjCountSW) === 3 ? board[colIdx][rowIdx] : null
}
function checkHorizontalWin(colIdx,rowIdx) {
     const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0);
     const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
return (adjCountLeft+ adjCountRight)=== 3 ? board[colIdx][rowIdx] : null

}
function checkVerticalWin (colIdx,rowIdx) {

    return countAdjacent(colIdx,rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null

}

function countAdjacent (colIdx,rowIdx, colOffset, rowOffset) {
//shortcut variable to p value

const player= board[colIdx][rowIdx]
// track count of adjacent cells
let count = 0;
// Initialize new coordinates
colIdx += colOffset;
rowIdx += rowOffset;
;

while (
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


// Visualize all state in DOM 
function render() {
renderBoard();
renderMessage();
// hide/show UI elements (controls)
renderControls();
}

function renderBoard() {
board.forEach(function (colArr,colIdx) {
    //iterate over the cells in the cur column
    colArr.forEach(function(cellVal, rowIdx){
     const cellId = `c${colIdx}r${rowIdx}`;
     const cellEl = document.getElementById(cellId);
     cellEl.style.backgroundColor = COLORS[cellVal];
    });
  });
}
function renderMessage() {
if (winner === 'T') {
messageEL.innerText = "It's a Tie !"
}else if (winner) {
    messageEL.innerHTML = `<span style="color:${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
}else{
messageEL.innerHTML = `<span style="color:${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
}
}
function renderControls() {

    PlayAgainBtn.style.visibility= winner ? 'visible': 'hidden';
    markerEls.forEach(function(markerEl, colIdx) {
    const hideMarker =  !board[colIdx].includes(0) || winner;
    markerEl.style.visibility = hideMarker? 'hidden' : 'visible';


    });
    }


