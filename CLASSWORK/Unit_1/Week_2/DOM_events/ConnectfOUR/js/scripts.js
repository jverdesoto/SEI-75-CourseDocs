/*----- constants -----*/

 

 

/*----- state variables -----*/
let board; //array of 7 col arrays
let turn; // 1 or -1
let winner; // null= no w; 1 or -1= win; "T"= tied game;


 

 

/*----- cached elements  -----*/

 

 

/*----- event listeners -----*/

 

 

/*----- functions -----*/
init();

function init() {

board= [
    [0,0,0,0,0,0], //column 0
    [0,0,0,0,0,0], //column 1
    [0,0,0,0,0,0], //column 2
    [0,0,0,0,0,0], //column 3
    [0,0,0,0,0,0], //column 4
    [0,0,0,0,0,0], //column 5
    [0,0,0,0,0,0], //column 6
];
turn = 1;
winner = null;
render();
}

function render() {


}
