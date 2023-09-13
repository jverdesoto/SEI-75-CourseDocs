
// constants
const COLOURS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange',
}
// state variables
let board; // array of 7 column arrays
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 = winner; 'T' = Tied game



// cached elements
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];

// event listeners
document.getElementById('markers').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init);

// functions
init();
// Initialise all state, then call render()
function init() {
    // To visualise the board's mapping to the DOM,
    // rotate the board array -90 degrees. 
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
// Visualise all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    // Hide/show UI elements (controls)
    renderControls();
}

function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    // Guards
    if (colIdx === -1) return;
    // shortcut to the column array
    const colArr = board[colIdx];
    // find the index of the first 0 in colArr
    const rowIdx = colArr.indexOf(0);
    if (rowIdx === -1) return;  // Column is full, no more moves allowed

    // Animate the drop before updating the board
    animateDrop(colIdx, rowIdx, turn).then(() => {
        colArr[rowIdx] = turn;
        turn *= -1;
        winner = getWinner(colIdx, rowIdx);
        render();
    });
}

    // winner function
    function getWinner(colIdx, rowIdx) {
        return checkVerticalWin(colIdx, rowIdx) || checkHorizontalWin(colIdx, rowIdx) || checkDiagonalWin(colIdx, rowIdx);
    }
    // check for winner in board
    // return null if no winner, 1/-2 if a player has won, 'T'
    // New function to check for a horizontal win
    function checkHorizontalWin(colIdx, rowIdx) {
        const leftCount = countAdjacent(colIdx, rowIdx, -1, 0);
        const rightCount = countAdjacent(colIdx, rowIdx, 1, 0);
        return (leftCount + rightCount >= 3) ? board[colIdx][rowIdx] : null;
    }

    // New function to check for a diagonal win
    function checkDiagonalWin(colIdx, rowIdx) {
        const leftUpCount = countAdjacent(colIdx, rowIdx, -1, -1);
        const rightDownCount = countAdjacent(colIdx, rowIdx, 1, 1);
        const leftDownCount = countAdjacent(colIdx, rowIdx, -1, 1);
        const rightUpCount = countAdjacent(colIdx, rowIdx, 1, -1);
        return (leftUpCount + rightDownCount >= 3 || leftDownCount + rightUpCount >= 3) ? board[colIdx][rowIdx] : null;
    }

    // Vertical win
    function checkVerticalWin(colIdx, rowIdx) {
        return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null;
    }

    function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
        // shortcut bariable to the player value
        const player = board[colIdx][rowIdx];
        // Track count of adjacent cells with the same player value
        let count = 0;
        // initialise new coordinates
        colIdx += colOffset;
        rowIdx += rowOffset;
        while (
            // Ensure colIDX is within bounds of the board array
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

    function renderBoard() {
        board.forEach(function (colArr, colIdx) {
            colArr.forEach(function (cellVal, rowIdx) {
                const cellId = `c${colIdx}r${rowIdx}`;
                const cellEl = document.getElementById(cellId);
                cellEl.style.backgroundColor = COLOURS[cellVal];
            });
        });
    }

    function renderMessage() {
        if (winner === 'T') {
            messageEl.innerText = "It's a Tie!!!";
        } else if (winner) {
            messageEl.innerHTML = `<span style="color:${COLOURS[winner]}">${COLOURS[winner].toUpperCase()}</span> WINS!`;
        } else {
            // game in play
            messageEl.innerHTML = `<span style="color:${COLOURS[turn]}">${COLOURS[turn].toUpperCase()}</span>'s Turn`;
        }
    }

    function renderControls() {
        // Ternary expression is the go to when you want 1 of 2 values returned
        // <cond expression> ? truthy exp> : <falsy exp>
        playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
        // Iterate over the marker elements to hide/show
        // according to the column being full (no 0s) or not
        markerEls.forEach(function (markerEl, colIdx) {
            const hideMarker = !board[colIdx].includes(0) || winner;
            markerEl.style.visibility = hideMarker ? 'hidden' : ' visible'
        });
    }

    // animation of dropping the thingy
    function animateDrop(colIdx, rowIdx, player) {
        // return a "Promise" to indicate when animation is done
        return new Promise((resolve) => {
            // get the DOM element for the target cell
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);

            // set marker colour
            cellEl.style.backgroundColor = COLOURS[player];

            // set initial position of marker above board
            cellEl.style.top = '-100px';

            // talk to css
            cellEl.classList.add('animate-drop');

            // cause the animation to get to the final position
            // use setTimeout so the initial styles are applied first
            setTimeout(() => {
                cellEl.style.top = '0px';
            }, 0);

            // listen event for the end of the animation
            cellEl.addEventListener('transitionend', () => {
                // remove the animation class to reset the element's state
                //back to original code
                cellEl.classList.remove('animate-drop');

                // resolve the Promise to indicate the animation is complete
                resolve();
            });
        });
    }


// animation not working hmmmm

// A Promise in JavaScript is an object that represents a value that may be available now, in the future, or never. It's a way to handle asynchronous operations, like reading a file, making an API call, or in your case, waiting for an animation to complete.
// the `resolve` function is what you call to indicate that the Promise has been fulfilled, or in other words, that the asynchronous operation has been successfully completed.
// 1. new Promise with `new Promise((resolve) => { ... })`.
// 2. Inside the Promise, start the animation.
// 3. When the animation is complete (`transitionend` event),  call `resolve()` to indicate that this particular Promise is now complete.
// By returning this Promise from `animateDrop` function, use `.then()` in your `handleDrop` function to wait for the animation to complete BEFORE updating the game.
// to remember easier: the promise is saying "Hey, I've got some stuff to do, but I promise to let you know when I'm done." And `resolve` is saying, "I'm done now, promise fulfilled"
