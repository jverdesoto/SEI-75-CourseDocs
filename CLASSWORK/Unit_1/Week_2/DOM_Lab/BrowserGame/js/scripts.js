// constants 
 const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
 }


// state variables
let board; // array of 7 columns arrays
let turn; // 1 or -1 show which player
let winner; // null = no winner, 1 or -1 = a winner, or 'T' = tie game.


// cached ElementInternals
const messageEll = document.querySelector('h1');
const playAgainButton = document.querySelector('button');
const markerElements = [...document.querySelectorAll('#markers > div')]


// event listeners
document.getElementById('markers').addEventListener('click', handleDrop)


// functions
init();

// initialiase all state, then call render
function init () {
    //to visualise the array below to the one rendered
    //turn your head anti clockwise 90 degress ;)
    board = [
        [0, 0, 0, 0, 0, 0], // this is column 0 i.e. the first column
        [0, 0, 0, 0, 0, 0], // this is column 1 
        [0, 0, 0, 0, 0, 0], // this is column 2
        [0, 0, 0, 0, 0, 0], // this is column 3
        [0, 0, 0, 0, 0, 0], // this is column 4
        [0, 0, 0, 0, 0, 0], // this is column 5
        [0, 0, 0, 0, 0, 0], // this is column 6

    ];
    turn=1;
    winner=null;
    render();
};

// in response to user interaction, update all impacted 
// state and then call render();
function handleDrop (e) {
    const colIndex = markerElements.indexOf(e.target)
    // Guards
    if (colIndex === -1 || winner) return;
    // shortcut to the column array
    const colArr = board[colIndex];    
    // find index of the first zero
    const rowIndex = colArr.indexOf(0)
    // update board state with current player value (turn)
    colArr[rowIndex] = turn;
    // Now we needd to take turns for the player
    turn *= -1;
    // check for a winner
    winner = getWinner()

    render()
}

function getWinner {
    
}

// visualise all states in the DOM
function render () {
    renderBoard();
    renderMessage();
    renderControls();
    // ^^ this show/hides UI elements (controls)

}

function renderBoard (){
    //  iterate over the cells in the cur column (colArr)
    board.forEach(function (colArr, colIndex) {
        colArr.forEach(function(cellVal, rowIndex ) {
            const cellId = `c${colIndex}r${rowIndex}`
            const cellEll = document.getElementById(cellId);
            cellEll.style.backgroundColor = COLORS[cellVal]
        });
    });
}

function renderMessage () {
    if (winner === 'T') {
        messageEll.innerText = "It's a tie!";
    } else if (winner) {
        messageEll.innerHTML = `<span style="color: ${COLORS[winner]}"> ${COLORS[winner].toUpperCase()} </span> Wins!`
     } else {
        // in this condition, game is still in play
        messageEll.innerHTML = `<span style="color: ${COLORS[turn]}"> ${COLORS[turn].toUpperCase()} </span>'s Turn`
        }
    }

function renderControls () {
    // Ternary expression is what we use when we want one of two values
    // syntax is <conditional expression> ? <truthy expression> : <falsy expression>
    playAgainButton.style.visibility = winner ? 'visible' : 'hidden';
    //now iterate over the marker elements to hide or show according to the column being full or not or !== 0
    markerElements.forEach(function(markerElement, colIndex) {
        const hideMarker = !board[colIndex].includes(0) || winner;
        markerElement.style.visibility = hideMarker ? 'hidden' : 'visible'
    })
};

