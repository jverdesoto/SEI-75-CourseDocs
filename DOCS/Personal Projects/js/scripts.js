const tilesContainer = document.querySelector(".tiles");
const colors= ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;


//Game State
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
const element = document.createElement('div');
element.classList.add('tile');
element.setAttribute('data-color', color);


return element;

}

//Build up Tiles

for(let i = 0; i < tileCount; i ++) {
const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
const color = colorsPicklist[randomIndex] ;
const tile = buildTile(color);

colorsPicklist.splice(randomIndex, 1);

}