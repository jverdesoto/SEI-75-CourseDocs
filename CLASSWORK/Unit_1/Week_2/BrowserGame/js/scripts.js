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

//event listeners

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
}
