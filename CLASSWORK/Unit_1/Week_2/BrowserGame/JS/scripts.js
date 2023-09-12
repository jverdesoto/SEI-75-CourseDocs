
/*----- constants -----*/


/*----- state variables -----*/
let board; // array of 7 col arrays
let turn;  // 1 or -1
let winner;  // null = no winner; 1 or -1 winner; 'T' = ties
/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

//Initialize all state, then call render()
function init() {
// to visualize the board mapping in the DOM
// rotate the board array 90 degrees counter clockwise
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

function render() {

}