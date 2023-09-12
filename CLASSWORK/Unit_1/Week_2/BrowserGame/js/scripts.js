
/*----- constants -----*/


/*----- state variables -----*/

let board; //array of 7 column arrays
let turn; //1 or -1
let winner; //null = no winner; 1 or -1 winner; 'T' = 'tie'

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();
//intialize all state. then call render()
function init() {
    //To visualise the board's mapping to the DOM 
    //Rotate the board array 90 degrees counter-clockwise
board = [
    [1, 0, 0, 0, 0, -1,], //column 0
    [0, 0, 0, 0, 0, 0,], //column 1
    [0, 0, 0, 0, 0, 0,], //column 2
    [-1, 0, 0, 0, 0, 0,], //column 3
    [0, 0, 0, 0, 0, 0,], //column 4
    [0, 0, 0, 0, 0, 0,], //column 5
    [0, 0, 0, 0, 0, 1,], //column 6
];
turn = 1;
winner = null;
render();
}

//Visualise all state in the DOM
function render() {
renderBoard();
renderMessage();
//Hide/show UI elments (controls)
renderControls(); 
}

function renderBoard() {
board.forEach(function(colArr, colIdx) {
    //iterate over the cells in the cur column (colArr)
    colArr.forEach(function(cellVal, rowIdx) {
const cellId = `c${colIdx}r${rowIdx}`;
const cellEl = document.getElementById(cell)
});

});
function renderMessage () {

}

function renderControls() {

}