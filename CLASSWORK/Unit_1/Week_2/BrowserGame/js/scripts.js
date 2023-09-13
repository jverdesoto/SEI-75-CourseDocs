/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange',
}

/*----- state variables -----*/
let board; // array of 7 col arrays
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 winner; 'T' = Tie game

/*----- cached elements -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];
/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop)
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/

init();
// initialize all stat, then call render() the render should show the updated state in the display
function init() {
  // to visualize the boards mapping to the DOM
  // rotate the board array 90 desgrees coutner-clockwise
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

// In response to user interaction, update all impacted
// state, then call render();
function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    // Guards...
    if (colIdx === -1 || winner) return;
    // Shortcut to the column array
    const colArr = board[colIdx];
    // Find the index of the first 0 in colArr
    const rowIdx = colArr.indexOf(0); 
    // Update the board state with the cur player (turn)
    colArr[rowIdx] = turn;
    // Switch player turn
    turn *= -1;
    // turn = turn * -1; means the same as above but is less concise
    //Check for winner
    winner = getWinner()
    render();
}

function getWInner() {

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
    // Iterate over the cells in the current column (colArr)
    colArr.forEach(function(cellVal, rowIdx) {
        const cellId =`c${colIdx}r${rowIdx}`; 
        const cellEl = document.getElementById(cellId);
        cellEl.style.backgroundColor = COLORS[cellVal]
        //cellEl calls the DOM element
        //.style telling the DOM we want to style it
        // = is telling the cellEl to change based on the COLORS object at the top
        // the [] brackets will change the background color based on whatever the cellVal is
        console.log(cellEl)
    });
    
  });  
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!!";
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins`;

    } else {
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
        

    }
}

function renderControls () {
  // Ternary  expression is the go to when you want 1 of 2 values returned
  // <conditional exp> ? <truthy exp> : <falsy exp>
  playAgainBtn.style.visibility = winner ? 'visible': 'hidden';
  // this makes the playagainbutton visible if there is a winner and invisible if not
  // Iterate over the marker elements to hide/show
  // according to the column being full (no 0's) or not
  markerEls.forEach(function(markerEl, colIdx){
    const hideMarker = !board[colIdx].includes(0) || winner;
    markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
    // this is a variable that access the board and the colIdx within the array
    // it uses the .includes method to search for 0
    // the ! means if not includes
  })
  
}

