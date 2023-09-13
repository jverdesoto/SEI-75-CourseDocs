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
        [1, 1, 1, 1, 1, 1] //column 6
    ];
    
    playerTurn = 1;
    winner = null;
    render();
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
            console.log(`Cell Id = ${cellId}`);
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
            // cellEl.style.backgroundColor = "white";
            // console.log(colArr, rowIdx, cellVale);
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
        const hideMarker = !board[colIdx].include(0) || winner;
        markerEl.style.visibility =  hideMarker ? 'visible': 'hidden';
    });
}

function handleDrop(evt){
    console.log(evt.target);

}
