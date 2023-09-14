/*----- constants -----*/
const COLORS = {
    '0' : 'white',
    '1' : 'purple',
    '-1' : 'orange'
}

/*----- state variables -----*/
let board ;//Array of 7 Arrays
let turn;//1 or -1
let winner; //null= no winner 1 or -1 = winner;"T" means tie

/*----- cached elements  -----*/

const messageEl = document.querySelector('h1')
const playAgainBtn =document.querySelector('button') 
const markerEls = [...document.querySelectorAll('#markers > div')]
/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop)
playAgainBtn.addEventListener('click', init)

/*----- functions -----*/
init()
//initialize all state, then call render()
//to visuali`e the boards mapping to the dom.
//rotate the board array 90 degrees counter-clockwise
function init(){
    board = [
        [1, 0, 0, 0, 0, 0],// col 0,
        [0, 0, 0, 0, 0, 0],// col 1
        [0, 0, 0, 0, 0, 0],// col 2
        [-1, 0, 0, 0, 0, 1],// col 3
        [0, 0, 0, 0, 0, 0],// col 4
        [0, 0, 0, 0, 0, 0],// col 5
        [0, 0, 0, 0, 0, -1],// col 6
    ];
turn = 1;
winner = null;
render()

}
//In response to use interactions update all impacted
//state, then call render()
function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target)
    //Guards...
    if (colIdx === -1) return;
    //shortcut to the column array
    const colArr = board[colIdx];
    const rowIdx = colArr.indexOf(0)
    //update the board state with the cur player value(turn)
    colArr[rowIdx] = turn
    //switch player turn
    turn *= -1;
    //check for winner
    winner = getwinner(colIdx, rowIdx)
    render()
}
//check for winner in board state and
//return null if no winner , 1,-1 if a player has won , 'T' if tie
function getwinner(colIdx, rowIdx){
return checkVerticalwin(colIdx, rowIdx);
}
function checkVerticalwin (colIdx, rowIdx) {
    return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx, rowIdx] : null ;
}
function countAdjacent (colIdx, rowIdx, colOffset, rowOffset){
    //shortcut variable to the player value
    const player = board[[colIdx], [rowIdx]];
    //track count of adjacent cells with the same player value
    let count = 0
    //initialize new coordinates
    colIdx +=colOffset
    rowIdx +=rowOffset
    // console.log(player);

    while (
        //ensure colIdx is within bounds of the board array
        board[colIdx] !== undefined &&
        board[colIdx][rowIdx] !== undefined &&
        board[colIdx][rowIdx] === player
    ){
        count ++
        colIdx += colOffset
        rowIdx +=rowOffset
    }
    return count
}
//visualize all state in the dom
function render() {
    renderBoard();
    renderMessage();
    //hide/show ui elements
    renderControls();

}
function renderBoard(){
board.forEach(function(colArr, colIdx) {
    //iterate over the cells in the our column (colArr)
    colArr.forEach(function(cellVal, rowIdx){
       
const cellId = `c${colIdx}r${rowIdx}`;
const cellEl = document.getElementById(cellId);
// console.log(cellEl);
cellEl.style.backgroundColor = COLORS[cellVal]
    })
});
}
function renderMessage(){
if(winner ==='T'){
messageEl.innerText = "It's a tie !!!"
}else if (winner) {
    messageEl.innerHTML = `<span style="color:${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`

}else {
messageEl.innerHTML = `<span style="color:${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`
}
}
function renderControls(){
    // Ternary expression is the go to when you want 1 of 2 values returned
// <conditional exp> ? <truthy exp> : <falsy exp>
playAgainBtn.style.display = winner ? 'visible': 'hidden';
//Iterrate over the marker elements to hide/show
//according to the column being full (no 0's) or not
markerEls.forEach(function(markerEl, colIdx) {
    const hideMarker = !board[colIdx].includes(0) || winner;
    markerEl.style.visibility = hideMarker ? 'hidden' : 'visible' ;
})
}
function handleDrop(evt) {
    console.log(evt.target);
}