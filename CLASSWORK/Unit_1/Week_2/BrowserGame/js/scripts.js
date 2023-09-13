//constants
const COLORS = {
  0: "white",
  1: "purple",
  "-1": "orange",
};
//state variables
let board; // array of 7 column arrays
let turn; // 1 or -1
let winner; //null, 1 or -1; 'T' = tie

//cached elements

const messageEl = document.querySelector("h1");
const playAgainBtn = document.querySelector("button");
const markerEls = [...document.querySelectorAll("#markers > div")];

//event listeners

document.getElementById("markers").addEventListener("click", handleDrop);
playAgainBtn.addEventListener("click", init);

//functions

init();
//initialize all state, then call render()
function init() {
  //rotate 90deg cc to visualise board
  board = [
    [0, 0, 0, 0, 0, 0], //col 0
    [0, 0, 0, 0, 0, 0], //col 1
    [0, 0, 0, 0, 0, 0], //col 2
    [0, 0, 0, 0, 0, 0], //col 3
    [0, 0, 0, 0, 0, 0], //col 4
    [0, 0, 0, 0, 0, 0], //col 5
    [0, 0, 0, 0, 0, 0], //col 6
  ];
  turn = 1;
  winner = null;
  render();
}

//Visualize all state in the DOM
function render() {
  renderBoard();
  renderMessage();
  //Hid/show UI elements
  renderControls();
}

function renderBoard() {
  board.forEach(function (colArr, colIdx) {
    //Iterate over the cells in the current column
    colArr.forEach(function (cellVal, rowIdx) {
      const cellId = `c${colIdx}r${rowIdx}`;
      const cellEl = document.getElementById(cellId);
      cellEl.style.backgroundColor = COLORS[cellVal];
    });
  });
}

function renderMessage() {
  if (winner === "T") {
    messageEl.innerText = "It's a Tie!!!";
  } else if (winner) {
    messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[
      winner
    ].toUpperCase()}</span> Wins!`;
  } else {
    messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[
      turn
    ].toUpperCase()}</span>'s Turn`;
  }
}

function renderControls() {
  playAgainBtn.style.visibility = winner ? "visible" : "hidden";
  //Iterate over the marker elements to hide/show
  //according to the column being full (no 0's)
  markerEls.forEach(function (markerEl, colIdx) {
    const hideMarker = !board[colIdx].includes(0) || winner;
    markerEl.style.visibility = hideMarker ? "hidden" : "visible";
  });
}

//Check for winner in board state
//retrun null if no winner, 1/-1 if a player has won, t for tie
function getWinner(colIdx, rowIdx) {
  return (
    checkVerticalWin(colIdx, rowIdx) ||
    checkHorizontalWin(colIdx, rowIdx) ||
    checkDiagonalWinNESW(colIdx, rowIdx) ||
    checkDiagonalWinNWSE(colIdx, rowIdx)
  );
}

function checkVerticalWin(colIdx, rowIdx) {
  return countAdjacent(colIdx, rowIdx, 0, -1) === 3
    ? board[colIdx][rowIdx]
    : null;
}

function checkHorizontalWin(colIdx, rowIdx) {
  const adjCountLef = countAdjacent(colIdx, rowIdx, -1, 0);
  const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
  return adjCountLef + adjCountRight >= 3 ? board[colIdx][rowIdx] : null;
}

function checkDiagonalWinNESW(colIdx, rowIdx) {
  const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1);
  const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1);
  return adjCountNE + adjCountSW >= 3 ? board[colIdx][rowIdx] : null;
}

function checkDiagonalWinNWSE(colIdx, rowIdx) {
  const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1);
  const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1);
  return adjCountNW + adjCountSE >= 3 ? board[colIdx][rowIdx] : null;
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
  //Shortcut variable to player value
  const player = board[colIdx][rowIdx];
  //Track count of adjacent cells with the same player value
  let count = 0;
  //initialize new coords
  colIdx += colOffset;
  rowIdx += rowOffset;
  while (
    //Ensure colIdx is within bounds of board array
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
//In response to user interaction update all impacted state then call render()
function handleDrop(e) {
  const colIdx = markerEls.indexOf(e.target);
  //Guards...
  if (colIdx === -1) return;

  //shortcut to col array
  const colArr = board[colIdx];
  //find i of first 0 in colArr
  const rowIdx = colArr.indexOf(0);
  //Update board state with the cur player val (turn)
  colArr[rowIdx] = turn;
  //Switch player turn
  turn *= -1;
  //check for winner
  winner = getWinner(colIdx, rowIdx);
  render();
}
