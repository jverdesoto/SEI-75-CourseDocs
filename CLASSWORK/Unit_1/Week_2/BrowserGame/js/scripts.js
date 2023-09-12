// constants 

// state variables

let board; // array of 7 col arrays
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 = winner; 'T' = tie game

// cached elements 

// event listeners

// functions
init();

// initialize all state, then call render()
function init(){

    //to visualize the board's mapping to the DOM
    //rotate the board anti-clockwise
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

//visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    //hide or show UI elements(controls - play again, marker elements)
    renderControls();  
}

function renderBoard(){
    board.forEach((columnArr, columnIndex) => {
        //iterate over the cells in the current column
        columnArr.forEach((cellValue, rowIndex) => {
            const cellId = `c${columnIndex}r${rowIndex}`
            const cellElement = document.getElementById(cellId);
        });

        
    });
}

function renderMessage(){

}

function renderControls(){

}