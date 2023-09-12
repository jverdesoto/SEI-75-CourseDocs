/*----- constants -----*/


/*----- state variables -----*/
let board ;//Array of 7 Arrays
let turn;//1 or -1
let winner; //null= no winner 1 or -1 = winner;"T" means tie

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init()
//initialize all state, then call render()
//to visuali`e the boards mapping to the dom.
//rotate the board array 90 degrees counter-clockwise
function init(){
    board = [
        [0, 0, 0, 0, 0, 0, 0],// col 0,
        [0, 0, 0, 0, 0, 0, 0],// col 1
        [0, 0, 0, 0, 0, 0, 0],// col 2
        [0, 0, 0, 0, 0, 0, 0],// col 3
        [0, 0, 0, 0, 0, 0, 0],// col 4
        [0, 0, 0, 0, 0, 0, 0],// col 5
        [0, 0, 0, 0, 0, 0, 0],// col 6
    ];
turn=1;
winner=null;
render()
//visualize all state in the dom
}
function render() {
    renderBoarder();
    renderMessage();
    //hide/show ui elements
    renderControls();

}
function renderBoarder(){
board.forEach(function(colArr, colIdx) {
    //iterate over the cells in the cur culomn (colArr)
    colArr.forEach(function(cellVal, rowIdx){
const cellId = `c${colIdx}r${rowIdx}`;
const ceeEl = document.getElementById(cellId)
    })
});
}
function renderMessage(){

}
function renderControls(){

}